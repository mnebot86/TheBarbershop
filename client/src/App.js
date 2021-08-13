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
import { getAllBookings } from "./services/bookings";

function App() {
  const [service, setService] = useState({});
  const [client, setClient] = useState(null);
  const [booking, setBooking] = useState([])

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

  useEffect(() => {
    const fetchBooking = async () => {
      const allBookings = await getAllBookings()
      setBooking(allBookings);
    }
    fetchBooking()
  },[])
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
          <Home client={client} setClient={setClient}/>
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
          <Confirmation 
          client={client} 
          booking={booking}
          service={service}
          id={booking.id}/>
        </Route>
        <Route exact path="/booking/:id/edit">
          <BookingEdit 
            client={client}
            services={services}
            service={service}
            setService={setService}
            setClient={setClient}
            booking={booking}/>
        </Route>
      </Layout>
    </div>
  );
}

export default App;
