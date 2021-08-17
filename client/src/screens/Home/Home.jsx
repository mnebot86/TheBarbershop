import Layout from "../../components/Layout/Layout";
import "./Home.css";

const Home = (props) => {
  return (
    <Layout client={props.client}>
      <div className="homeBg">
        <div className="home-wordBg">
          <p className="home-word-wrap">
            <span>TheBarberShop</span> is your one stop shop, for the freshest hair styles and
            cuts.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
