import styles from "./InputDesign.module.css";
import FileItem from "./FileItem";
import { useEffect, useState } from "react";

function FileHistory({filenames}) {
  const [files,Setfiles]=useState()
  // useEffect(()=>{
  //   console.log(filenames)
  // },[])
      console.log(filenames)

//  console.log({filenames})
  return ( 
    <section className={styles.uploadHistory}>
      <h2 className={styles.uploadhistory}>
        Upload history
      </h2>
      {filenames.length!==0?
      <div className={styles.historyFiles}>
        {filenames.map((file, index) => (
          <FileItem
            key={index}
            id={file._id}
            
            fileName={file.fileName}
            date={file.uploadedAt.match(/\d{4}-\d{2}-\d{2}/)}
          />
        ))}
      </div>:<><div style={{marginLeft:"400px",marginTop:"50px",fontSize:"30px"}}>No files uploaded</div></>
}
    </section>
  );
}

export default FileHistory;
