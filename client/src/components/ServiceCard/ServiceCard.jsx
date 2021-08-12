import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  return (
    <div>
      <div>
        <Link to={`/services/${props.id}`}>
      <p>{props.name}</p>
        </Link>
      <p>{props.price}</p>
      </div>
    </div>
  );
};

export default ServiceCard;