import styles from "./InputDesign.module.css";
import { useNavigate } from "react-router-dom";

function MenuItem({ itemno,icon, text, onClick, className }) {
  const navigate = useNavigate();
  const page=["/dashboard","/check"]
  const gotoo=()=>{
    navigate(page[itemno])
  }
  return (
    <div className={className} onClick={gotoo}>
      <div>
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div className={styles.dashboard2}>
        {text}
      </div>
    </div>
  );
}
 
export default MenuItem;
