import { Route } from "react-router-dom";
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

function App() {
  return (
    <div>
      <Route exact path="/">
          <Splash />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/services/:id">
          <Detail />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
        <Route exact path="/booking/edit/:id">
          <BookingEdit />
        </Route>
      </div>
  );
}

export default App;
