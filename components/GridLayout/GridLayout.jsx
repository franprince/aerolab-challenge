import Card from "../Card/Card";
import styles from "./GridLayout.module.scss";
import React from "react";
import { productContext } from "../../contexts/productContext";
import ContentSort from "../ContentSort/ContentSort";
import usePagination from "../../hooks/usePagination";

function GridLayout() {
  const { state, dispatch } = React.useContext(productContext);

  const totalItems = state.sortedData && state.sortedData.length;
  const [paginationState, paginationDispatch] = usePagination(totalItems, 16);
  return (
    <>
      <ContentSort totalItems={paginationState.totalItems} />
      <div className={styles.container}>
        <div className={styles.gridLayout}>
          {state.status === "fullfilled"
            ? state.sortedData &&
              state.sortedData.map((product) => (
                <Card key={product._id} product={product} />
              ))
            : "Loading..."}
        </div>
      </div>
    </>
  );
}

export default GridLayout;
