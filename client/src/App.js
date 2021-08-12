import { Route } from 'react-router';
import Layout from './components/Layout/Layout';
import Splash from './screens/Splash/Splash';
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import Home from "./screens/Home/Home";
import Services from "./screens/Services/Services";
import Detail from "./screens/Detail/Detail";
import Booking from "./screens/Booking/Booking";
import Confirmation from "./screens/Confirmation/Confirmation";
import BookingEdit from "./screens/BookingEdit/BookingEdit"
import './App.css';

function App() {
  return (
    <Layout>
      <Route exact path="/">
        <Splash/>
      </Route>
      <Route exact path="/signup">
        <SignUp/>
      </Route>
      <Route exact path="/login">
        <SignIn/>
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/services">
        <Services/>
      </Route>
      <Route exact path="/detail/:id">
        <Detail/>
      </Route>
      <Route exact path="/booking">
        <Booking/>
      </Route>
      <Route exact path="/confirmation">
        <Confirmation/>
      </Route>
      <Route exact path="/bookingedit/:id">
        <BookingEdit />
      </Route>
      



    </Layout>
  );
}

export default App;
