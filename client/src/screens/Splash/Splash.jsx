import "./Splash.css";
import movie from "../Home/images/mixkit-young-man-in-profile-while-having-his-hair-cut-36414-medium.mp4";

function Splash(props) {
  return (
    <div className="splash">
      <video playInline autoPlay muted loop playbackRate="0.5" id="bgVid">
        <source src={movie} type="video/mp4" />
      </video>
      <div className='splash-container'>
        <p className="splash-title">TheBarberShop</p>
        <button className="sign-up splash-button">Sign up</button>
        <button className="login splash-button">Login</button>
        <button className="guest">Guest</button>
      </div>
    </div>
  );
}

export default Splash;
