import React from "react";
import Head from "next/head";
import styles from "../styles/User.module.scss";
import Top from "../components/Top/Top";
import Header from "../components/Header/Header";
import { UserContextProvider } from "../contexts/userContext";
import getRedeemHistory from "../utils/getRedeemHistory";
import AddPoints from "../components/AddPoints/AddPoints";

export default function Profile() {
  const [redeemHistory, setRedeemHistory] = React.useState(null);

  React.useEffect(() => {
    getRedeemHistory().then((response) => {
      setRedeemHistory(response);
    });
  }, []);

  return (
    <div>
      <UserContextProvider>
        <Head>
          <title>Aerolab rewards program - User profile</title>
        </Head>
        <main className={styles.main}>
          <Top />
          <Header
            imgUrl="/user.jpg"
            title="User Profile"
            backgroundPosition="right"
          />
          <div className={styles.container}>
            <div className={styles.historyContainer}>
              <table className={styles.historyTable}>
                <thead>
                  <tr>
                    <th>Name</th>

                    <th>Category</th>

                    <th>Redeemed on</th>
                  </tr>
                </thead>
                <tbody>
                  {redeemHistory &&
                    redeemHistory.redeemHistory.map((element) => {
                      const date = new Date(element.createDate);
                      const day = date.getDay();
                      const month = date.getMonth();
                      const year = date.getFullYear();
                      return (
                        <tr key={element.createDate}>
                          <td>{element.name}</td>
                          <td>{element.category}</td>
                          <td>{`${day}-${month}-${year}`}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <AddPoints />
          </div>
        </main>
      </UserContextProvider>
    </div>
  );
}
