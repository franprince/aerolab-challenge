import React from "react";
import styles from "./Top.module.scss";
import Image from "next/image";
import { userContext } from "../../contexts/userContext";

function Top() {
  const { userData, userDispatch } = React.useContext(userContext);
  return (
    <div className={styles.top}>
      <div className={styles.logo}>
        <Image src="/aerolab-logo.svg" height={39} width={36} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={styles.name}>
          <p>
            {userData.status === "fullfilled"
              ? userData.userData.name
              : "Loading..."}
          </p>
        </div>
        <div className={styles.cointainer}>
          <p>
            {userData.status === "fullfilled"
              ? userData.userData.points
              : "Loading..."}
          </p>
          <Image src="/icons/coin.svg" height={34} width={34} />{" "}
        </div>
      </div>
    </div>
  );
}

export default Top;
