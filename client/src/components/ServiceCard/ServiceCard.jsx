import { Link } from "react-router-dom";
import './ServiceCard.css'

const ServiceCard = (props) => {
  return (
    <div className="service-card">
      <Link to={`/services/${props.id}`}>
        <p className="card-font-style">{props.name}</p>
      </Link>
      <p className="card-font-style">${props.price}</p>
    </div>
  );
};

export default ServiceCard;
