import styles from "./Banner.module.scss";
import Image from "next/image";

function Banner({ imgUrl, title, backgroundPosition }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <Image
        src={imgUrl}
        alt="Electronics"
        layout="fill"
        objectFit="cover"
        objectPosition={backgroundPosition}
        loading="eager"
        quality={95}
      />
    </div>
  );
}
export default Banner;
