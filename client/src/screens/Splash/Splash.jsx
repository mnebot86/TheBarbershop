import "./Splash.css";
import { Link } from "react-router-dom"
import movie from "../Home/images/mixkit-young-man-in-profile-while-having-his-hair-cut-36414-medium.mp4";

function Splash() {
  return (
    <div className="splash">
      <video playInline autoPlay muted loop playbackRate="0.5" id="bgVid">
        <source src={movie} type="video/mp4" />
      </video>
      <div className='splash-container'>
        <p className="splash-title">TheBarberShop</p>
        <Link to = "/signup">
        <button className="splash-button color">Sign up</button>
        </Link>
        <Link to = "/login">
        <button className="splash-login splash-button color">Login</button>
        </Link>
        <Link to = "/home">
        <button className="guest color">Guest</button>
        </Link>
      </div>
    </div>
  );
}

export default Splash;
