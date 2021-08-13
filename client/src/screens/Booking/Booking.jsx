import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { createBooking } from "../../services/bookings";
import { useHistory } from "react-router";

const Booking = (props) => {
  const history = useHistory();
  const [value, onChange] = useState(new Date());
  const [formData, setFormData] = useState({
    date: new Date(),
    client_id: props.client.id,
    service_id: props.service.id,
  });
 

  const handleChange = () => {
    onChange(value);
    setFormData({ ...formData, date: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBooking = await createBooking(formData);

    history.push(`/confirmation/${newBooking.id}`);
  };

  return (
    <div>
      <p>Service: {props.service?.name}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Appointment: </label>
        <DateTimePicker
          onChange={handleChange}
          value={formData.date}
          name="date"
          id="date"
        />
        <button type="submit">Good Choice</button>
      </form>
    </div>
  );
};

export default Booking;
