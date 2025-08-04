import styles from "./InputDesign.module.css";
import StatsCard from "./StatsCard";
import UploadSection from "./UploadSection";
import FileHistory from "./FileHistory";
import axios from "axios";
import { useEffect, useState } from "react";
 
function MainContent() {
    const url = import.meta.env.VITE_API_URL;

 const token= localStorage.getItem("token") 
 const [name,Setname]= useState("")
 const [count,Setcount]= useState(0)
 const [files,Setfiles]= useState([])
 const [delcheck,Setdelcheck]= useState(0)
useEffect(()=>{

   axios.get(`${url}/upload`,{headers:{Authorization:`Bearer ${token}`}})
 .then((res)=>{
  // console.log(res.data.name)
  //  console.log(res.data.upload)
  Setcount(res.data.upload.length)
  Setname(res.data.name)
  Setfiles(res.data.upload) 
 })
 },[])  
    
 
    return (
    <main className={styles.main}>
      <div className={styles.head}>
       
          <span className={styles.hai}>Hai,<span className={styles.chandilya}>{name}</span></span>
          <span style={{opacity:"50%",fontSize:"20px"}}>Upload your excel files and visualize your data</span>
       
        
      </div>

      <div className={styles.cards}>
        <StatsCard count={count} label="Uploads" type="upload" />
        <StatsCard count="3" label="Chart Types" type="download" />
      </div>

      <UploadSection />

      <FileHistory filenames={files}/>
    </main>
  );
}

export default MainContent;
