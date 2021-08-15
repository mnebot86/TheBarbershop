import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneService } from "../../services/services";
import { Link } from "react-router-dom";
import Layout from '../../components/Layout/Layout'
import "./Detail.css";

const Detail = ({ setService, service, client }) => {
  const { id } = useParams();

  useEffect(() => {
    const fetchService = async () => {
      const service = await getOneService(id);
      setService(service);
    };
    fetchService();
  }, [id, setService]);
  return (
    <Layout>
ƒ<div className="details">
      <div className="container">
        <img src={service?.image_url} alt="haircuts" />
        <div className="word-wrap">
          <h1>{service?.name}</h1>
          <p>${service.price}</p>
          <p>{service.description}</p>
      <div className="btn">
        {client ? (
          <Link to={`/booking/services/${service.id}`}>
            <button>Book!</button>
          </Link>
        ) : (
          <Link to={`/signup`}>
            <button>Book!</button>
          </Link>
        )}
      </div>
        </div>
      </div>
    </div>
        </Layout>
  );
};

export default Detail;
