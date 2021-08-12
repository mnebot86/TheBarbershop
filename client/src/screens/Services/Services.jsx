import { useEffect, useState } from "react";
import { getAllServices } from "../../services/services";
import Layout from "../../components/Layout/Layout";
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
      <Layout services={services}>
      {services.map((service, index) => (
        <ServiceCard 
        id={ service.id }
        image={ service.image_url }
        name={ service.name }
        price={ service.price }
        description={ service.description }
        key={ index }/>
      ))}
      </Layout>
    </div>
  );
};

export default Services;
