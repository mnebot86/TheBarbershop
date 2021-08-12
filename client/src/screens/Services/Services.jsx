import { useEffect, useState } from "react";
import { getAllServices } from "../../services/services";

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
    <div>
      <h1>Hello</h1>
      {services.map((service) => (
        <p>{service.name}</p>
      ))}
    </div>
  );
};

export default Services;
