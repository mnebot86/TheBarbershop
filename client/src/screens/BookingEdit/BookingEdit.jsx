import { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { updateBooking } from "../../services/bookings";
import { useHistory, useParams } from "react-router-dom";

const BookingEdit = (props) => {
  const history = useHistory();
  const [value, onChange] = useState(new Date());
  const { id } = useParams();
  console.log(props.booking)
  useEffect(() => {
    props.setService(props.services?.find((s) => s.id === parseInt(id)));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = {
      client_id: props.client?.id,
      service_id: id,
      date: value,
    };

    const newBooking = await updateBooking(id,bookingData);
    console.log(bookingData);
    history.push(`/confirmation/${newBooking.id}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <select>
        {props.services.map((service) =>(
          <option value={service.name}>{service.name}</option>
        ))}
        </select>
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
  );
};

export default BookingEdit;
