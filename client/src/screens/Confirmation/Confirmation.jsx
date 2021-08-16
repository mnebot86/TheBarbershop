import { useParams, Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { deleteBooking, getOneBooking } from "../../services/bookings";
import "./Confirmation.css";

const Confirmation = (props) => {
  const [booking, setBooking]= useState({})

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    const fetchBooking = async () => {
      const oneBooking = await getOneBooking(id);
      setBooking(oneBooking);
    };
    fetchBooking();
  }, [id]);

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteBooking(id);
    history.push("/home");
  };


  return (
    <Layout>
      <div>
        <div className="confirmation">
        <p className="confirmation-title">Confirmation</p>
          <div className="confirmation-container">
            <img src={props.client?.image_url} alt={props.client?.name} />
            <div className="confirmation-wrap">
              <p>Name: {booking.client?.name}</p>
              <p>Appointment: {new Date(booking.date).toLocaleString("en-us")}</p>
              <p>Service: {booking.service?.name}</p>
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
