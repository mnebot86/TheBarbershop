import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneBooking } from "../../services/bookings";

const Confirmation = (props) => {

const [booking, setBooking] = useState({
  date: new Date(),
  client_id: props.client?.id,
  service_id: props.service?.id,
})



let { id } = useParams()

useEffect(() => {
  const fetchBooking = async () => {
    const getBooking = await getOneBooking(id)
    setBooking(getBooking)
  }
  fetchBooking()
},[id])



  return (
    <div>
    <img src={props.client?.image_url} alt={props.client?.name} />
    <p>Name: {props.client?.name}</p>
    <p>Appointment: {booking.date.toString()}</p>
    <p>Service: {props.service?.name}</p>
    <Link to = {`/booking/${booking.id}/edit`}>
    <button>Edit</button>
    </Link>
    </div>
  );
};

export default Confirmation;