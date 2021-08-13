import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneBooking } from "../../services/bookings";

const Confirmation = (props) => {

const [booking, setBooking] = useState({
  date: new Date(),
  client_id: props.client?.id,
  service_id: props.service.id,
})

// const [isUpdate, setUpdated] = useState(false)

let { id } = useParams()

useEffect(() => {
  const fetchBooking = async () => {
    const getBooking = await getOneBooking(id)
    setBooking(getBooking)
    console.log(typeof booking.date)
  }
  fetchBooking()
},[id])


  return (
    <div>
    <img src={props.client.image_url} alt={props.client.name} />
    <p>Name: {props.client.name}</p>
    <p>Appointment: {booking.date}</p>
    <p>Service: {props.service.name}</p>
    </div>
  );
};

export default Confirmation;