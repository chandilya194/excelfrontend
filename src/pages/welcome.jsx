import './welcome.css'
import { useNavigate } from 'react-router-dom'
export function Welcome(){
    const navigate = useNavigate();
    const navi=()=>{
        navigate("/register");
    }
    return(
        <div className="welcomeout"><center>
        <h1 style={{fontSize:"60px"}}>EXCEL VIEW</h1>
        <p style={{width:"800px"}}>Upload your excel files and view Visualization and insights for your data and manange your data in an efficient way.</p>
        <button className="getstarted" onClick={navi}>Get started</button>
        </center>
        </div>
    )
}