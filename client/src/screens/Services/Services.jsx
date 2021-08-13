import { useEffect, useState } from "react";
import { getAllServices } from "../../services/services";
import Layout from "../../components/Layout/Layout";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Services = (props) => {
  

  return (
    <div>
      {props.services.map((service, index) => (
        <ServiceCard
          service={props.services}
          id={service.id}
          image={service.image_url}
          name={service.name}
          price={service.price}
          description={service.description}
          key={index}
        />
      ))}
    </div>
  );
};

export default Services;
