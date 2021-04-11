import styles from "./OrderHistory.module.scss";
import * as React from "react";
import getOrderHistory from "../../utils/getOrderHistory";
import usePagination from "../../hooks/usePagination";
import ItemIndex from "../common/Paginator/ItemIndex";
import IndexButtons from "../common/Paginator/IndexButtons";
import formatDate from "../../utils/formatDate";

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

  return (
    <section className={styles.historyContainer}>
      <h2>Order history</h2>
      <div className={styles.pagination}></div>
      <div className={styles.historyGrid}>
        {orderHistory &&
          orderHistorySlice.map((element) => {
            const date = formatDate(element.createDate);
            return (
              <div className={styles.historyCard} key={element.createDate}>
                <p>{element.name}</p>
                <p>{element.category}</p>
                <p>{date}</p>
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
    </section>
  );
}

export default OrderHistory;
