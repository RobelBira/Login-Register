import { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
        <h2>LOGIN</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <button className="link-btn" onClick={() => props.onFormSwitch("register")}>
        Don't have an account ? Register here.
      </button>
    </div>
  );
};
export default Login;
