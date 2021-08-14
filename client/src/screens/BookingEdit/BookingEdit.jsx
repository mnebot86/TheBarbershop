import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { deleteBooking, updateBooking } from "../../services/bookings";
import { useHistory, useParams } from "react-router-dom";

const BookingEdit = (props) => {

  const history = useHistory();
  const [value, onChange] = useState(new Date());
  const [booking, setBooking] = useState({
    date: value,
    client_id: props.client?.id,
    service_id: '',
  });

  let { id } = useParams();

  const handleChange = (e) => {
    const { value } = e.target;
    setBooking({
      ...booking,
      service_id: value,
      
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBooking = await updateBooking(id, booking);
    console.log(updatedBooking);
    history.go(-1)
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteBooking(id);
    history.push("/home");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={props.service?.name} onChange={handleChange}>
          {props.services.map((service) => (
            <option value={service.id}>{service.name}</option>
          ))}
        </select>
        <label htmlFor="date">Appointment: </label>
        <DateTimePicker
          onChange={onChange}
          value={value}
          name="date"
          id="date"
        />
        <button type="submit">Submit</button>
      </form>
      <button type="submit" onClick={(e) => handleDelete(e)}>
        Delete
      </button>
    </div>
  );
};

export default BookingEdit;
