import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Splash from "./screens/Splash/Splash";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import Home from "./screens/Home/Home";
import Services from "./screens/Services/Services";
import Detail from "./screens/Detail/Detail";
import Booking from "./screens/Booking/Booking";
import Confirmation from "./screens/Confirmation/Confirmation";
import BookingEdit from "./screens/BookingEdit/BookingEdit";
import "./App.css";
import { verify } from "./services/clients";
import SignOut from "./screens/SignOut/SignOut";
import { getAllServices } from "./services/services";

function App() {
  const [client, setClient] = useState(null);
  const [service, setService] = useState({});

  useEffect(() => {
    const fetchClient = async () => {
      const client = await verify();
      client ? setClient(client) : setClient(null);
    };
    fetchClient();
  }, []);

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const allServices = await getAllServices();
      setServices(allServices);
    };
    fetchServices();
  }, []);

  return (
    <div>
      <Layout client={client}>
        <Route exact path="/">
          <Splash client={client} />
        </Route>
        <Route path="/signup">
          <SignUp client={client} setClient={setClient} />
        </Route>
        <Route path="/login">
          <SignIn client={client} setClient={setClient} />
        </Route>
        <Route exact path="/signout">
          <SignOut setClient={setClient} />
        </Route>
        <Route path="/home">
          <Home client={client} />
        </Route>
        <Route exact path="/services">
          <Services services={services} />
        </Route>
        <Route exact path="/services/:id">
          <Detail
            client={client}
            services={services}
            service={service}
            setService={setService}
          />
        </Route>
        <Route path="/booking">
          <Booking
            services={services}
            service={service}
            setService={setService}
            setClient={setClient}
            client={client}
          />
        </Route>
        <Route path="/confirmation">
          <Confirmation client={client} />
        </Route>
        <Route exact path="/booking/edit/:id">
          <BookingEdit client={client} />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
