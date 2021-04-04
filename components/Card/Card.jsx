import styles from "./Card.module.scss";
import Image from "next/image";

function Card({ product }) {
  const addDotSeparator = (number) =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (
    <div className={styles.cardContainer}>
      <div className={styles.buy}></div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={product.img.url}
            alt={product.name}
            height={182}
            width={252}
          />
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.name}>{product.name}</p>
        </div>
      </div>
      <div className={styles.cardHidden}>
        <div className={styles.cardHiddenContainer}>
          <p>{addDotSeparator(product.cost)}</p>
          <img src="/icons/coin.svg" height={34} width={34} />
        </div>
        <button>Redeem now</button>
      </div>
    </div>
  );
}

export default Card;
