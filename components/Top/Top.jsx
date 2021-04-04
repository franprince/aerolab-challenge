import styles from "./Top.module.scss";
import Image from "next/image";

function Top({ userData }) {
  return (
    <div className={styles.top}>
      <div className={styles.logo}>
        <Image src="/aerolab-logo.svg" height={39} width={36} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={styles.name}>
          <p>{userData.name}</p>
        </div>
        <div className={styles.cointainer}>
          <p>{userData.points}</p>
          <Image src="/icons/coin.svg" height={34} width={34} />{" "}
        </div>
      </div>
    </div>
  );
}

export default Top;
