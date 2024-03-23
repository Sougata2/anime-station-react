import styles from "./Spinner.module.css";
function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.hourglassBackground}>
        <div className={styles.hourglassContainer}>
          <div className={styles.hourglassCurves}></div>
          <div className={styles.hourglassCapTop}></div>
          <div className={styles.hourglassGlassTop}></div>
          <div className={styles.hourglassSand}></div>
          <div className={styles.hourglassSandStream}></div>
          <div className={styles.hourglassCapBottom}></div>
          <div className={styles.hourglassGlass}></div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
