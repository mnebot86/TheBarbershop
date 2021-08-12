import Layout from "../../components/Layout/Layout";

const Booking = (props) => {

  
  return (
    <div>
      <p>{props.name}</p>
        <form>
          <input type="date" />
          <input type="time" />
        </form>
      </div>
  );
};

export default Booking;
