import { Link } from "react-router-dom";
import './ServiceCard.css'

const ServiceCard = (props) => {
  return (
      <Link to={`/services/${props.id}`}>
    <div className="service-card">
        <p className="card-font-style">{props.name}</p>
      <p className="card-font-style">${props.price}</p>
    </div>
      </Link>
  );
};

export default ServiceCard;
