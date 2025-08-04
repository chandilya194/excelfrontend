import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export function Register() {
  const navigate= useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role:"user"
  });

  const [message, setMessage] = useState("");
  const [active, Setactive] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
          Setactive(true)

    try {
      if(form.email[0]===form.email[0].toUpperCase()){
        alert("Email should not start with a capital letter.")
        return;
      }
      const res = await axios.post("http://localhost:5000/auth/register", form);
      setMessage("Registered successfully!");
      setForm({ username: "",email: "",password: ""})
      const gotologin= window.confirm("Registered successfully.")
      if(gotologin){
        navigate("/login")
      }
      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong.");
    }finally{
                Setactive(false)

    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <input
         type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button disabled={active} type="submit">Register</button>
        <div style={{textAlign:"center",marginTop:"20px"}}>Already have an account?<Link to="/login">Log in</Link></div>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}
