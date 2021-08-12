import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { signUp } from "../../services/clients";
import { useHistory } from "react-router-dom";

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
    })};

    const onSignUp = async (event) => {
      event.preventDefault();
      const { setClient } = props;
      const client = await signUp(form);
        setClient(client);
        history.pushState("/home");
      };
    
  

  const { name, email, password, image_url } = form;
  return (
    <div>
      <Layout>
        <form onSubmit={onSignUp}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
          <label htmlFor="image_url">Picture</label>
          <input
            type="url"
            id="image_url"
            value={image_url}
            name="image_url"
            onChange={handleChange}
          />
          <button type='submit'>Sign Up</button>
        </form>
      </Layout>
    </div>
  );
};
export default SignUp;
