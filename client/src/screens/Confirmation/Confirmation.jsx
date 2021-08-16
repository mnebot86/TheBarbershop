import { useParams, Link, useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { deleteBooking } from "../../services/bookings";
import "./Confirmation.css";

const Confirmation = (props) => {
  const history = useHistory();
  const booking = {
    date: new Date(),
    client: props.client?.name,
    service: props.service?.name,
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteBooking(id);
    history.push("/home");
  };

  let { id } = useParams();

  return (
    <Layout>
      <div>
        <div className="confirmation">
        <p className="confirmation-title">Confirmation</p>
          <div className="confirmation-container">
            <img src={props.client?.image_url} alt={props.client?.name} />
            <div className="confirmation-wrap">
              <p>Name: {booking.client}</p>
              <p>Appointment: {booking.date?.toString()}</p>
              <p>Service: {booking?.service}</p>
              <div className="confirmation-btn-container">
                <Link to={`/booking/${id}/edit`}>
                  <button id="btn-style">Edit</button>
                </Link>
                <button
                  id="btn-style"
                  type="submit"
                  onClick={(e) => handleDelete(e)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Confirmation;
