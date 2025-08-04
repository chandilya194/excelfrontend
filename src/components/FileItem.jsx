import styles from "./InputDesign.module.css";
import logo from "../assets/delete_button.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function FileItem({ id,fileName, date}) {
    const url = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const [delconst,Setdelconst]= useState(0)
  const itemdelete=()=>{ 
     Setdelconst(1)
     const token= localStorage.getItem("token")
     
axios.delete(`${url}/upload/`+id,{headers:{Authorization:`Bearer ${token}`}})
.then((res)=>console.log(res.data.mess))
  }
  const gotoo=()=>{
navigate("/check?mode=analyze&id="+id);
  }
  return (
    delconst===0?<>
    <article className={styles.historyFile}>
      <div className={styles.fileBody}>
        <span className={styles.fileName}>
          {fileName}
        </span>
        <time className={styles.css25725}>
          {date}
        </time>
      </div>
      <div className={styles.fileButton}>
        <button className={styles.analyzeButton} onClick={gotoo}>
          <span className={styles.analyze}>
            Analyze
          </span>
        </button>
       
        <button className={styles.delbut}>
           <div>
            <img className={styles.delimg} onClick={itemdelete} src={logo} alt="Logo" />
          </div>
        </button>
        
      </div>
    </article>
    </>:
    <>
    
    </>
  );
}

export default FileItem;
