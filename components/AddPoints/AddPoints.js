import React from "react";
import { userContext } from "../../contexts/userContext";
import fireAddPointsNotification from "../../utils/fireAddPointsNotification";

function AddPoints() {
  const select = React.useRef();
  const { userData, userDispatch } = React.useContext(userContext);
  return (
    <div>
      <h2>Add points to your wallet</h2>
      <label htmlFor="points">Select how many points you want to add:</label>
      <select name="points" id="cars" ref={select}>
        <option value="1000">1000</option>
        <option value="5000">5000</option>
        <option value="7500">7500</option>
        <option value="1500">1500 (This value is going to fail)</option>
      </select>
      <button
        onClick={() =>
          fireAddPointsNotification(
            {
              title: `You are about to add ${select.current.value} points to your wallet`,
              text: `You will have ${
                Number(userData.userData.points) + Number(select.current.value)
              } points after this transaction`,
            },
            select.current.value,
            userDispatch
          )
        }
      >
        Add!
      </button>
    </div>
  );
}
export default AddPoints;
