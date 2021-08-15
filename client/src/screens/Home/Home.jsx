import Layout from "../../components/Layout/Layout";
import './Home.css'

const Home = (props) => {

return (
<Layout client={props.client}>
  <div className="homeBg">
      <h1>Home</h1>
  </div>
    </Layout>
  );
};

export default Home;