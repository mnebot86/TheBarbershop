import { useEffect, useState } from "react";
import { getAllServices } from "../../services/services";
import { Link } from "react-router-dom"
import ServiceCard from "../../components/ServiceCard/ServiceCard";

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
      {services.map((service, index) => (
        <ServiceCard 
        id={ service.id }
        image={ service.image_url }
        name={ service.name }
        price={ service.price }
        description={ service.description }
        key={ index }/>
      ))}
    </div>
  );
};

export default Services;
