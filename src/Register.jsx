import { useState } from "react";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name,setName]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
        <h2>REGISTER</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label htmlFor="name">name</label>
        <input
          type="text"
          placeholder="name"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <button type="submit">Register</button>
      </form>

      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account ? Login here.
      </button>
    </div>
  );
};
export default Register;
