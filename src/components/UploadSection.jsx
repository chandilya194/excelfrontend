import styles from "./InputDesign.module.css";
import { useNavigate } from "react-router-dom";
function UploadSection() {
  const navigate = useNavigate();
  const toupload=()=>{
    navigate('/check')
  }
  return (
    <section className={styles.uploadfileCard}>
      <button onClick={toupload} className={styles.uploadfileButton}>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                `<svg id="1:25" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" class="upload-button-icon" style="width: 28px; height: 28px; fill: #FFF"> <path d="M0.722412 24.1218V18.6108C0.722412 17.8498 1.33926 17.233 2.10017 17.233C2.86108 17.233 3.47793 17.8498 3.47793 18.6108V24.1218C3.47793 24.4873 3.62319 24.8376 3.88157 25.096C4.13995 25.3544 4.49028 25.4996 4.85569 25.4996H24.1443C24.5097 25.4996 24.86 25.3544 25.1184 25.096C25.3768 24.8376 25.5221 24.4873 25.5221 24.1218V18.6108C25.5221 17.8498 26.1389 17.233 26.8998 17.233C27.6607 17.233 28.2776 17.8498 28.2776 18.6108V24.1218C28.2776 25.2181 27.8418 26.2691 27.0667 27.0442C26.2915 27.8194 25.2405 28.2552 24.1443 28.2552H4.85569C3.75947 28.2552 2.70847 27.8194 1.93333 27.0442C1.15819 26.2691 0.722412 25.2181 0.722412 24.1218ZM13.1222 18.6108V5.4035L8.58532 9.94046C8.04727 10.4785 7.17513 10.4785 6.63708 9.94046C6.09904 9.40241 6.09904 8.53026 6.63708 7.9922L13.5259 1.10333L13.6308 1.00915C14.172 0.56778 14.9697 0.598909 15.4741 1.10333L22.3629 7.9922L22.4571 8.09715C22.8984 8.63831 22.8673 9.43604 22.3629 9.94046C21.8585 10.4449 21.0608 10.476 20.5196 10.0346L20.4147 9.94046L15.8777 5.4035V18.6108C15.8777 19.3717 15.2609 19.9885 14.5 19.9885C13.7391 19.9885 13.1222 19.3717 13.1222 18.6108Z" fill="white"></path> </svg>`,
            }}
          />
        </div>
        <span className={styles.uploadfile2}>
          Upload file
        </span>
      </button>
    </section>
  );
}

export default UploadSection;
