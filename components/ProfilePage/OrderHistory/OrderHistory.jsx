import styles from "./OrderHistory.module.scss";
import React from "react";
import getOrderHistory from "../../../utils/getOrderHistory";

function OrderHistory() {
  const itemsPerPage = 12;
  const [orderHistory, setOrderHistory] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  React.useEffect(() => {
    getOrderHistory().then((response) => {
      setOrderHistory(response);
    });
  }, []);

  const startItem = currentPage === 1 ? 0 : (currentPage - 1) * itemsPerPage;

  const orderHistorySlice =
    orderHistory &&
    [...orderHistory.orderHistory]
      .reverse()
      .slice(startItem, startItem + itemsPerPage);

  const Index = () => {
    const totalItems = orderHistory && orderHistory.orderHistory.length;
    const getStartItem = startItem + 1;
    const getLastItem =
      startItem + itemsPerPage > totalItems
        ? totalItems
        : startItem + itemsPerPage;

    return (
      orderHistory && <p>{`${getStartItem}-${getLastItem} of ${totalItems}`}</p>
    );
  };

  function handleNext() {
    const totalItems = orderHistory.orderHistory.length;
    if (startItem + itemsPerPage >= totalItems) return;
    setCurrentPage(currentPage + 1);
  }
  function handlePrev() {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  }
  return (
    <div className={styles.historyContainer}>
      <h2>Order history</h2>
      <div className={styles.pagination}>
        <Index />
      </div>
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
      <div className={styles.pagination}>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
        <Index />
      </div>
    </div>
  );
}

export default OrderHistory;
