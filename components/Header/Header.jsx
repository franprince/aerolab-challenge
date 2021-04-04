import styles from "./Header.module.scss";
import Image from "next/image";

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Electronics</h1>
      <Image
        src="/header-x1.png"
        alt="Electronics"
        layout="fill"
        objectFit="cover"
        objectPosition="right"
        loading="eager"
      />
    </div>
  );
}
export default Header;
