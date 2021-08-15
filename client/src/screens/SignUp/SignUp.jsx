import React from "react";
import { useState } from "react";
import { signUp } from "../../services/clients";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./SignUp.css";

const SignUp = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    image_url: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignUp = async (event) => {
    event.preventDefault();
    const { setClient } = props;
    const client = await signUp(form);
    setClient(client);
    history.push("/home");
  };

  const { name, email, password, image_url } = form;
  return (
    <div className="sign-up">
      <Layout>
        <form className="sign-up-form" onSubmit={onSignUp}>
          <div className="sign-up-inner">
            <div className="sign-up-name">
              <input
                placeholder="Name"
                className="sign-up-inputs"
                type="text"
                id="name"
                value={name}
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="sign-up-email">
              <input
                placeholder="Email"
                className="sign-up-inputs"
                type="email"
                id="email"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="sign-up-password">
              <input
                placeholder="Password"
                className="sign-up-inputs"
                type="password"
                id="password"
                value={password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="sign-up-picture">
              <input
                placeholder="Picture URL"
                className="sign-up-inputs"
                type="url"
                id="image_url"
                value={image_url}
                name="image_url"
                onChange={handleChange}
              />
            </div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </Layout>
    </div>
  );
};
export default SignUp;
