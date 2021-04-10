import styles from "./OrderHistory.module.scss";
import * as React from "react";
import getOrderHistory from "../../../utils/getOrderHistory";
import usePagination from "../../../hooks/usePagination";
import ItemIndex from "../../HomePage/ItemIndex/ItemIndex";
import IndexButtons from "../../HomePage/ItemIndex/IndexButtons";

function OrderHistory() {
  const [orderHistory, setOrderHistory] = React.useState(null);
  React.useEffect(() => {
    getOrderHistory().then((response) => {
      setOrderHistory(response);
    });
  }, []);
  const itemsPerPage = 12;
  const totalItems = orderHistory && orderHistory.orderHistory.length;
  const { paginationState, paginationDispatch } = usePagination(
    itemsPerPage,
    totalItems
  );

  const orderHistorySlice =
    orderHistory &&
    [...orderHistory.orderHistory]
      .reverse()
      .slice(paginationState.firstItem, paginationState.lastItem);
  console.log(paginationState);
  return (
    <div className={styles.historyContainer}>
      <h2>Order history</h2>

      <div className={styles.pagination}></div>
      <div className={styles.historyGrid}>
        {orderHistory &&
          orderHistorySlice.map((element) => {
            const date = new Date(element.createDate);
            const day = date.getDay();
            const month = date.getMonth();
            const year = date.getFullYear();
            return (
              <div className={styles.historyCard} key={element.createDate}>
                <p>{element.name}</p>
                <p>{element.category}</p>
                <p>{`${day}-${month}-${year}`}</p>
              </div>
            );
          })}
      </div>
      <div className={styles.paginationContainer}>
        <ItemIndex data={paginationState.index} border={false} />

        <IndexButtons
          prevDisabled={paginationState.prevDisabled}
          nextDisabled={paginationState.nextDisabled}
          paginationDispatch={paginationDispatch}
        />
      </div>
    </div>
  );
}

export default OrderHistory;
