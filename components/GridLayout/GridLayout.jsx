import Card from "../Card/Card";
import styles from "./GridLayout.module.scss";
import React from "react";
import { productContext } from "../../contexts/productContext";
import ContentSort from "../ContentSort/ContentSort";
import usePagination from "../../hooks/usePagination";

function GridLayout() {
  const [totalItems, setTotalItems] = React.useState(0);
  const { state, dispatch } = React.useContext(productContext);
  const [paginationState, paginationDispatch] = usePagination(
    totalItems,
    16,
    state.sortedData
  );
  React.useEffect(() => {
    if (state.sortedData) {
      setTotalItems(state.sortedData.length);
    }
  }, [state.sortedData]);

  return (
    <>
      <ContentSort totalItems={paginationState.totalItems} />
      <div className={styles.container}>
        <div className={styles.gridLayout}>
          {state.status === "fullfilled"
            ? paginationState.pageArray &&
              paginationState.pageArray.map((product) => (
                <Card key={product._id} product={product} />
              ))
            : "Loading..."}
        </div>
      </div>
    </>
  );
}

export default GridLayout;
