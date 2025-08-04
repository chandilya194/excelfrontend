import styles from "./InputDesign.module.css";

function StatsCard({ count, label, type }) {
  const cardClass = type === 'upload' ? styles.uploadCard : styles.downloadCard;
  const labelClass = type === 'upload' ? styles.uploads : styles.downloads;

  return (
    <div className={cardClass}>
      <div className={styles.css0}>
        {count}
      </div>
      <div className={labelClass}>
        {label}
      </div>
    </div>
  );
}

export default StatsCard;
