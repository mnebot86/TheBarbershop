import { useEffect, useState } from "react";
import { getAllServices } from "../../services/services";
import { Link } from "react-router-dom"

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const allServices = await getAllServices();
      setServices(allServices);
      console.log("Services",allServices);
      console.log(services);
    };
    fetchServices();
  }, []);

  return (
    <div >
      <h1>Hello</h1>
      {services.map((service) => (
        <div key={service.id}>
          <Link to="/details/:id">
            <p>{service.name}</p>
          </Link>
            <p>${service.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
