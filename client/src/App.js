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

function App() {
  const [client, setClient] = useState(null)

useEffect(() => {
  const fetchClient = async () => {
    const client = await verify()
    client ? setClient(client) : setClient(null)
  }
fetchClient(

)},[])

  return (
    <div>
      <Route exact path="/">
          <Splash client={client}/>
        </Route>
        <Route path="/signup">
          <SignUp client={client} setClient={setClient}/>
        </Route>
        <Route path="/login">
          <SignIn client={client} setClient={setClient}/>
        </Route>
        <Route exact path = "/signout">
          < SignOut setClient={setClient}/>
        </Route>
        <Route path="/home">
          <Home client={client}/>
        </Route>
        <Route exact path="/services">
          <Services client={client}/>
        </Route>
        <Route exact path="/services/:id">
          <Detail client={client}/>
        </Route>
        <Route path="/booking">
          <Booking client={client}/>
        </Route>
        <Route path="/confirmation">
          <Confirmation client={client}/>
        </Route>
        <Route exact path="/booking/edit/:id">
          <BookingEdit client={client}/>
        </Route>
      </div>
  );
}

export default App;
