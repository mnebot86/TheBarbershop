import { useParams, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const Confirmation = (props) => {
  const booking = {
    date: new Date(),
    client: props.client?.name,
    service: props.service?.name,
  };
  console.log("booking", booking.date);

  let { id } = useParams();

  return (
    <div className="confirmation">
      <Layout>
        <div>
          <img src={props.client?.image_url} alt={props.client?.name} />
          <p>Name: {booking.client}</p>
          <p>Appointment: {booking.date?.toString()}</p>
          <p>Service: {booking?.service}</p>
          <Link to={`/booking/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default Confirmation;
