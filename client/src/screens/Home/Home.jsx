import Layout from "../../components/Layout/Layout";
import "./Home.css";

const Home = (props) => {
  return (
    <Layout client={props.client}>
      <div className="homeBg">
        <div className='container'>
          <p className="word-wrap">
            TheBarberShop is your one shop stop, for the freshes hair style and
            cuts.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
