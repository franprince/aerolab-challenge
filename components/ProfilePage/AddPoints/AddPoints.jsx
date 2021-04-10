import * as React from "react";
import { userContext } from "../../../contexts/userContext";
import fireAddPointsNotification from "../../../utils/fireAddPointsNotification";
import styles from "./AddPoints.module.scss";

function AddPoints() {
  const [value, setValue] = React.useState(false);
  const { userData, userDispatch } = React.useContext(userContext);
  return (
    <div className={styles.container}>
      <h2>Add points to your wallet</h2>
      <div className={styles.inputContainer}>
        <div className={styles.inputGroup}>
          <input
            className={styles.checkLabel}
            type="radio"
            id="1000"
            name="points"
            value="1000"
            onClick={(e) => setValue(e.target.value)}
          />
          <label className={styles.labelForCheck} htmlFor="1000">
            1000 points
          </label>
        </div>
        <div className={styles.inputGroup}>
          <input
            className={styles.checkLabel}
            type="radio"
            id="5000"
            name="points"
            value="5000"
            onClick={(e) => setValue(e.target.value)}
          />
          <label className={styles.labelForCheck} htmlFor="5000">
            5000 points
          </label>
        </div>
        <div className={styles.inputGroup}>
          <input
            className={styles.checkLabel}
            type="radio"
            id="7500"
            name="points"
            value="7500"
            onClick={(e) => setValue(e.target.value)}
          />
          <label className={styles.labelForCheck} htmlFor="7500">
            7500 points
          </label>
        </div>
      </div>
      <button
        onClick={() =>
          value &&
          fireAddPointsNotification(
            {
              title: `You are about to add ${value} points to your wallet`,
              text: `You will have ${
                Number(userData.userData.points) + Number(value)
              } points after this transaction`,
            },
            value,
            userDispatch
          )
        }
      >
        Add points
      </button>
    </div>
  );
}
export default AddPoints;
