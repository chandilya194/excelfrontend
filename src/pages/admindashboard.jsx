import axios from "axios"
import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
export function Admindash(){
      const url = import.meta.env.VITE_API_URL;

    const [users,Setusers]=useState([])
    const [uploads,Setuploads]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{
        const token= localStorage.getItem("token")

     axios.get(`${url}/upload/admin`,{headers:{Authorization:`Bearer ${token}`}})
     .then((res)=>{
    //   console.log(res.data.users.length)
    //   console.log(res.data.uploads.length)
      Setusers(res.data.users)
      Setuploads(res.data.uploads)
     })
    },[])
   
     const navi=()=>{
        navigate("/login");
    }
     
    return(<div className="outt" style={{backgroundColor:"#cbcbf1"}}>
        <div onClick={navi} className="logout">Logout</div>
    <center>
    <h1 style={{fontSize:"60px"}}>Admin Dashboard</h1></center>
    <div className="boxes">
        <div className="box"><span>{users.length}</span><span>Users</span></div>
        <div className="box"><span>{uploads.length}</span><span>Uploads</span></div>
    </div>
    <div className="usersmain">
    <h2 style={{marginLeft:"400px",fontSize:"30px"}}>Users</h2>

    <div className="users">
        <div className="userbox userhead">
            <div style={{padding:"10px 20px",width:"200px",textAlign:"left"}}>UserName</div>
            <div style={{padding:"10px 20px",width:"350px",textAlign:"left"}}>Email</div>
            <div style={{padding:"10px 20px",width:"80px",textAlign:"left"}}>Role</div>
                </div>
{
    users.map((item,index)=>{
        return <div className="userbox userdesign" key={index}>
            <div style={{padding:"10px 20px",minWidth:"200px"}}>{item.username}</div>
            <div style={{padding:"10px 20px",width:"350px"}}>{item.email}</div>
            <div style={{padding:"10px 20px",width:"80px"}}>{item.role}</div>
            </div>
    })
}
    </div>
    </div>
    </div>)
}