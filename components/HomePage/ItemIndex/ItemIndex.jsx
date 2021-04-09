import styles from "./ItemIndex.module.scss";

function ItemIndex({ data }) {
  return (
    <div className={styles.indexContainer}>
      <p className={styles.productIndex}>
        {data.indexFirst}-{data.indexLast} of {data.indexTotal} products
      </p>
    </div>
  );
}

export default ItemIndex;
