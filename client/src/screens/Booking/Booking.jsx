import Layout from "../../components/Layout/Layout";

const Booking = (props) => {

  
  return (
    <div>
      <Layout>
        <p>{props.name}</p>
        <form>
          <input type="date" />
          <input type="time" />
        </form>
      </Layout>
    </div>
  );
};

export default Booking;
