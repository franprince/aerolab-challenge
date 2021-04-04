import Card from "../Card/Card";
import styles from "./GridLayout.module.scss";
import React from "react";
import { productContext } from "../../contexts/productContext";

function GridLayout({ products }) {
  const { state } = React.useContext(productContext);
  const [items, setitems] = React.useState({});
  React.useEffect(() => {
    if (state.status === "pending") return;
    setitems(state.sortedData);
  }, [state.sortedData, state.status]);
  return (
    <div className={styles.container}>
      <div className={styles.gridLayout}>
        {items.length &&
          items.map((product) => <Card key={product._id} product={product} />)}
      </div>
    </div>
  );
}

export default GridLayout;
