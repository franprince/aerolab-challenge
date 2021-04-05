import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
import { userContext } from "../../contexts/userContext";

function Card({ product }) {
  const { data } = React.useContext(userContext);
  const addDotSeparator = (number) =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const enoughPoints = data.userData && data.userData.points > product.cost;

  async function redeemProducts(productId) {
    console.log(productId);
    try {
      const redeemProduct = await fetch(
        "https://coding-challenge-api.aerolab.co/redeem",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: productId,
          }),
        }
      );
      const response = await redeemProduct.json();
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.cardContainer}>
      {enoughPoints ? (
        <div className={styles.buy}></div>
      ) : (
        <div className={styles.needMorePoints}>
          {data.userData && (
            <p>You need {product.cost - data.userData.points}</p>
          )}
          <img src="/icons/coin.svg" height={25} width={25} />
        </div>
      )}
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
        <button
          onClick={() => redeemProducts(product._id)}
          disabled={!enoughPoints}
        >
          {enoughPoints ? "Redeem now" : "Not enough points"}
        </button>
      </div>
    </div>
  );
}

export default Card;
