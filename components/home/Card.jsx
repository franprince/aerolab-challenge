import * as React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
import { userContext } from "../../contexts/userContext";
import fireRedeemProductNotification from "../../utils/fireRedeemProductNotification";

function Card({ product }) {
  const { userData, userDispatch } = React.useContext(userContext);
  const addDotSeparator = (number) =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const enoughPoints =
    userData.userData && userData.userData.points >= product.cost;

  const isAnOrA = (name) =>
    ["a", "e", "i", "o", "u"].includes(name[0].toLowerCase()) ? "an" : "a";

  return (
    <div className={styles.cardContainer}>
      {enoughPoints ? (
        <div className={styles.buy}></div>
      ) : (
        <div className={styles.needMorePoints}>
          {userData.userData && (
            <p>You need {product.cost - userData.userData.points}</p>
          )}
          <img src="/icons/coin.svg" alt="coin" height={25} width={25} />
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
          <img src="/icons/coin.svg" alt="coin" height={34} width={34} />
        </div>
        <button
          onClick={() =>
            fireRedeemProductNotification(
              {
                imageUrl: product.img.url,
                imageAlt: product.name,
                title: `You are about to redeem ${
                  product.cost
                } points for ${isAnOrA(product.name)} ${product.name} `,
                text: `You will have ${
                  userData.userData.points - product.cost
                } points left after this transaction`,
              },
              product._id,
              userDispatch
            )
          }
          disabled={!enoughPoints}
        >
          {enoughPoints ? "Redeem now" : "Not enough points"}
        </button>
      </div>
    </div>
  );
}

export default Card;
