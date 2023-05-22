import styles from "../styles/OpeningDoor.module.css";

export default function OpeningDoor() {
  return (
    <>
      <div className={styles.door_inside}>
        <div className={styles.door_over}></div>
      </div>
    </>
  );
}
