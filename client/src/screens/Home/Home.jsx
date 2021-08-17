import Layout from "../../components/Layout/Layout";
import "./Home.css";

const Home = (props) => {
  return (
    <Layout client={props.client}>
      <div className="homeBg">
        <div className="home-wordBg">
          <p className="home-word-wrap">
            <span>TheBarberShop</span> is your one shop stop, for the freshes hair style and
            cuts.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
