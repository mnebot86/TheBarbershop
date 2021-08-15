import Layout from "../../components/Layout/Layout";
import "./Home.css";

const Home = (props) => {
  return (
    <Layout client={props.client}>
      <div className="homeBg">
        <div className="wordBg">
          <p className="word-wrap">
            <span>TheBarberShop...</span>is your one shop stop, for the freshes hair style and
            cuts.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
