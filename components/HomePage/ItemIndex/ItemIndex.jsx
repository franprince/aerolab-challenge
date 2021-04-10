import styles from "./ItemIndex.module.scss";

function ItemIndex({ data, border }) {
  return (
    <div
      className={styles.indexContainer}
      style={border ? { borderRight: "1px solid #d9d9d9" } : { border: "none" }}
    >
      <p className={styles.productIndex}>
        {`${String(data.indexFirst).padStart(2, "0")}-${data.indexLast} of
        ${data.indexTotal} products`}
      </p>
    </div>
  );
}

export default ItemIndex;
