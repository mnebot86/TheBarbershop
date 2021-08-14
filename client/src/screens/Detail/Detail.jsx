import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneService } from "../../services/services";
import { Link } from "react-router-dom"

const Detail = ({setService, service, client}) => {
  
  const { id } = useParams();

  useEffect(() => {
    const fetchService = async () => {
      const service = await getOneService(id);
      setService(service);
    };
    fetchService();
  }, [id, setService]);
  return (
    <div>
      <div>
        <img src={service?.image_url} alt="haircuts" />
        <h1>{service?.name}</h1>
        <p>${service.price}</p>
        <p>{service.description}</p>
      </div>
      <div>
        {client ? <Link to={`/booking/services/${service.id}`}>
        <button>Book!</button>
        </Link> : <Link to={`/signup`}>
        <button>Book!</button>
        </Link>}
        
      </div>
    </div>
  );
};

export default Detail;
