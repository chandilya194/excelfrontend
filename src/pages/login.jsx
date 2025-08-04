import { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
  const url = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({ email: "", password: "" ,role:"user"});
  const [message, setMessage] = useState("");
  const [rolestate,Setrolestate]= useState("user")
  const [buttonss,Setbuttonss]= useState(["user","admin"])

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value});

  const rolechange =(item)=>{
    Setrolestate(item)
    setForm({...form,role:item})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/auth/login`, form)
      .then((res)=>{
setMessage("Login successful!");
      console.log(res.data.message); 
      // Save token to localStorage if needed:
       localStorage.setItem("token", res.data.token);
       if (res.data.role==="user"){
       navigate("/dashboard");
       }else{
        navigate("/admin");

       }
      })
      
    } catch (err) {
      console.log(err.response?.data?.error)
      alert(err.response?.data?.error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit} >
        <h2>Login</h2>
        <div className="admintoggle" style={{display:"flex"}}>
{/* <button style={{borderRadius:"20px",width:"80px",padding:"7px 0px"}}>user</button>
<button style={{borderRadius:"20px",width:"80px"}}>admin</button> */}
  {      buttonss.map((item,index)=>{return <button type="button" key={index} onClick={()=>{rolechange(item)}} style={{backgroundColor:rolestate===item?"#2c36ca":"white",color:rolestate===item?"white":"black",borderRadius:"20px",width:"80px",padding:"7px 0px"}}>{item}</button>})
} 
</div>
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

        <button className="loginbut" >Login</button>
       <div style={{textAlign:"center",marginTop:"20px"}}>Don't have an account? <Link to="/register">Register</Link></div>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}
