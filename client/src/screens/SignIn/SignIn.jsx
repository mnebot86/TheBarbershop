import { useHistory } from "react-router-dom";
import { login } from "../../services/clients";
import { useState } from "react";

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
    <div>
      <form onSubmit={onSignIn}>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
