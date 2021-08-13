import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneBooking } from "../../services/bookings";

const Confirmation = (props) => {

const [booking, setBooking] = useState({
  date: new Date(),
  client_id: props.client.id,
  service_id: props.service.id,
})

// const [isUpdate, setUpdated] = useState(false)

let { id } = useParams()

useEffect(() => {
  const fetchBooking = async () => {
    const booking = await getOneBooking(id)
    setBooking(booking)
    console.log(booking)
  }
  fetchBooking()
},[id])


  return (
    <div>
      <h1>Confirmation</h1>
      <p>{props.service.name}</p>
      <p>{booking.date}</p>
    </div>
  );
};

export default Confirmation;