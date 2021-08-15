import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Layout from "../../components/Layout/Layout";
import "./Services.css";
const Services = (props) => {
  return (
    <div className="services">
      <Layout>
        <div className="services-container">
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
      </Layout>
    </div>
  );
};

export default Services;
