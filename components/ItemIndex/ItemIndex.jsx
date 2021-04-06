import usePagination from "../../hooks/usePagination";
import styles from "./ItemIndex.module.scss";

function ItemIndex() {
  return (
    <div className={styles.indexContainer}>
      <p className={styles.productIndex}>1-16 of 32 products</p>
    </div>
  );
}

export default ItemIndex;
