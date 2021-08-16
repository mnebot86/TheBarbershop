import { useHistory } from "react-router-dom";
import { login } from "../../services/clients";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./SignIn.css";
const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    const { setClient } = props;
    const client = await login(form);
    setClient(client);
    history.push("/home");
  };

  const { email, password } = form;
  return (
    <div className="sign-in">
      <Layout>
        <form className="sign-in-form" onSubmit={onSignIn}>
          <div className="sign-in-inner">
            <input
              className="sign-up-inputs"
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              name="email"
              onChange={handleChange}
            />
            <input
              className="sign-up-inputs"
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              name="password"
              onChange={handleChange}
            />
            <button type="submit">Sign In</button>
          </div>
        </form>
      </Layout>
    </div>
  );
};

export default SignIn;
