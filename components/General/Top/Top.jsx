import React from "react";
import styles from "./Top.module.scss";
import Image from "next/image";
import { userContext } from "../../../contexts/userContext";
import Spinner from "../Spinner/Spinner";
import Link from "next/link";
Link;
function Top() {
  const { userData, userDispatch } = React.useContext(userContext);
  console.log(userData);
  return (
    <div className={styles.top}>
      <div className={styles.logo}>
        <Link href="/" aria-label="Go to homepage">
          <a>
            <Image
              src="/aerolab-logo.svg"
              alt="Aerolab's logo"
              height={39}
              width={36}
            />
          </a>
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={styles.name}>
          <Link href="/profile" aria-label="Go to user profile">
            <a>
              <p>
                {userData.status === "fullfilled"
                  ? userData.userData.name
                  : "Loading..."}
              </p>
            </a>
          </Link>
        </div>
        <div className={styles.cointainer}>
          {userData.status === "fullfilled" ? (
            <p>{userData.userData.points}</p>
          ) : (
            <Spinner maxWidth="30" />
          )}
          <Image src="/icons/coin.svg" alt="coin" height={34} width={34} />
        </div>
      </div>
    </div>
  );
}

export default Top;
