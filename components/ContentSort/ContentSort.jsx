import React from "react";
import { productContext } from "../../contexts/productContext";
import styles from "./ContentSort.module.scss";

function ContentSort() {
  const { state, dispatch } = React.useContext(productContext);

  return (
    <div className={styles.sortingTools}>
      <div className={styles.indexContainer} my-value>
        <p className={styles.productIndex}>16 of 32 products</p>
      </div>
      <p className={styles.sortBy}>Sort by:</p>
      <button
        className={state.sortedBy === "mostRecent" && styles.active}
        onClick={() => dispatch({ type: "SORT_MOST_RECENT" })}
      >
        Most recent
      </button>
      <button
        className={state.sortedBy === "lowestPrice" && styles.active}
        onClick={() => dispatch({ type: "SORT_LOWEST_PRICE" })}
      >
        Lowest price
      </button>
      <button
        className={state.sortedBy === "highestPrice" && styles.active}
        onClick={() => dispatch({ type: "SORT_HIGHEST_PRICE" })}
      >
        Highest price
      </button>
    </div>
  );
}

export default ContentSort;
