import { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { createBooking } from "../../services/bookings";
import { useHistory, useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

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
    <div className="booking">
      <Layout>
        <div className='container'>
          <p>Service: {props.service?.name}</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="date">Appointment: </label>
            <DateTimePicker
              onChange={onChange}
              value={value}
              name="date"
              id="date"
            />
            <button type="submit">Good Choice</button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Booking;
