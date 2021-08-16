import { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { updateBooking, getOneBooking } from "../../services/bookings";
import { useHistory, useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./BookingEdit.css";

const BookingEdit = (props) => {
  
  const history = useHistory();
  const [value, onChange] = useState(new Date());
  const [booking, setBooking] = useState({});
  const [service, setService] = useState('')
  const { id } = useParams();

useEffect(() => {
  const fetchBooking = async () => {
    const oneBooking = await getOneBooking(id);
    setBooking(oneBooking);
    setService(oneBooking.service_id)
    onChange(new Date(oneBooking.date))
  };
  fetchBooking();

},[])

  const handleChange = (e) => {
    const { value } = e.target;
  setService(value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = {
      ...booking,
      date: value,
      service_id: service
    }
    const updatedBooking = await updateBooking(id, bookingData);
    console.log(updatedBooking);
    history.go(-1);
  };

  return (
    <Layout>
      <div className="bookingEdit">
        <div className="bookingEdit-container">
          <form className="bookingEdit-form" onSubmit={handleSubmit}>
            <div></div>
            <div className="bookingEdit-service">
              <label className="bookingEdit-label" htmlFor="select">
                Service:
              </label>
              <select
                id="select"
                class="select"
                value={service}
                onChange={handleChange}
              >
                {props.services.map((service) => (
                  <option value={service.id}>{service.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="bookingEdit-label" htmlFor="date">
                Appointment:{" "}
              </label>
              <DateTimePicker
                className="react-datetime-picker"
                onChange={onChange}
                value={value}
                name="date"
                id="date"
              />
            </div>
            <button className="bookingEdit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default BookingEdit;
