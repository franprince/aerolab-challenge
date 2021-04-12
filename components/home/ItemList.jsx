import ItemCard from "./ItemCard";
import styles from "./ItemList.module.scss";
import * as React from "react";
import { productContext } from "../../contexts/productContext";
import ItemSort from "./ItemSort";
import Spinner from "../common/Spinner/Spinner";
import usePagination from "../../hooks/usePagination";
import ItemIndex from "../common/Paginator/ItemIndex";
import IndexButtons from "../common/Paginator/IndexButtons";

function GridLayout() {
  const { state, dispatch } = React.useContext(productContext);
  const itemsPerPage = 16;
  const totalItems = state.sortedData && state.sortedData.length;
  const { paginationState, paginationDispatch } = usePagination(
    itemsPerPage,
    totalItems
  );
  const paginatedData =
    state.sortedData &&
    state.sortedData.slice(paginationState.firstItem, paginationState.lastItem);
  return (
    <>
      <div className={styles.paginationContainer}>
        <ItemIndex data={paginationState.index} border={true} />
        <ItemSort />
        <IndexButtons
          prevDisabled={paginationState.prevDisabled}
          nextDisabled={paginationState.nextDisabled}
          paginationDispatch={paginationDispatch}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.gridLayout}>
          {state.status === "fullfilled" ? (
            state.sortedData &&
            paginatedData.map((product) => (
              <ItemCard key={product._id} product={product} />
            ))
          ) : (
            <div className={styles.loading}>
              <Spinner size={200} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.paginationContainerBottom}>
        <ItemIndex data={paginationState.index} border={false} />

        <IndexButtons
          prevDisabled={paginationState.prevDisabled}
          nextDisabled={paginationState.nextDisabled}
          paginationDispatch={paginationDispatch}
        />
      </div>
    </>
  );
}

export default GridLayout;
