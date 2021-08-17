import { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { createBooking } from "../../services/bookings";
import { useHistory, useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Booking.css";
const Booking = (props) => {
  const history = useHistory();
  const [value, onChange] = useState(new Date());

  const { id } = useParams();

  useEffect(() => {
    props.setService(props.services?.find((s) => s.id === parseInt(id)));
  }, [id, props]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = {
      client_id: props.client?.id,
      service_id: id,
      date: value,
    };
    const newBooking = await createBooking(bookingData);
    history.push(`/confirmation/${newBooking.id}`);
    console.log("TIme", bookingData?.date);
  };

  return (
      <Layout client={props.client}>
    <div className="booking">
        <div className="booking-container">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-name">
              <p>Service: {props.service?.name}</p>
            </div>
            <div>
              <label className="booking-label" htmlFor="date">Appointment: </label>
              <DateTimePicker
                className="react-datetime"
                disableCalendar
                disableClock
                onChange={onChange}
                value={value}
                name="date"
                id="date"
              />
            </div>
            <button id="bookingIt-btn" type="submit">
              Book It
            </button>
          </form>
        </div>
    </div>
      </Layout>
  );
};

export default Booking;
