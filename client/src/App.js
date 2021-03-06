import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [service, setService] = useState({});
  const [client, setClient] = useState(null);


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
      <Route exact path="/">
        <Splash client={client} />
      </Route>
      <Route exact path="/signup">
        <SignUp client={client} setClient={setClient} />
      </Route>
      <Route exact path="/login">
        <SignIn client={client} setClient={setClient} />
      </Route>
      <Route exact path="/signout">
        <SignOut setClient={setClient} />
      </Route>
      <Route exact path="/home">
        <Home client={client} setClient={setClient} />
      </Route>
      <Route exact path="/services">
        <Services client={client} setClient={setClient} services={services} />
      </Route>
      <Route exact path="/services/:id">
        <Detail
          client={client}
          services={services}
          service={service}
          setService={setService}
        />
      </Route>
      <Route exact path="/booking/services/:id">
        <Booking
          services={services}
          service={service}
          setService={setService}
          setClient={setClient}
          client={client}
        />
      </Route>
      <Route exact path="/confirmation/:id">
        <Confirmation client={client} service={service} />
      </Route>
      <Route exact path="/booking/:id/edit">
        <BookingEdit
          client={client}
          services={services}
          service={service}
          setService={setService}
          setClient={setClient}
        />
      </Route>
    </div>
  );
}

export default App;
