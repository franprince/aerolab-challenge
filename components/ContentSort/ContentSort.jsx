import React from "react";
import { productContext } from "../../contexts/productContext";
import ItemIndex from "../ItemIndex/ItemIndex";
import styles from "./ContentSort.module.scss";

function ContentSort() {
  const { state, dispatch } = React.useContext(productContext);

  return (
    <div className={styles.sortingTools}>
      <ItemIndex />
      <p className={styles.sortBy}>Sort by:</p>
      <button
        className={state.sortedBy === "mostRecent" ? styles.active : undefined}
        onClick={() => dispatch({ type: "SORT_MOST_RECENT" })}
      >
        Most recent
      </button>
      <button
        className={state.sortedBy === "lowestPrice" ? styles.active : undefined}
        onClick={() => dispatch({ type: "SORT_LOWEST_PRICE" })}
      >
        Lowest price
      </button>
      <button
        className={
          state.sortedBy === "highestPrice" ? styles.active : undefined
        }
        onClick={() => dispatch({ type: "SORT_HIGHEST_PRICE" })}
      >
        Highest price
      </button>
    </div>
  );
}

export default ContentSort;
