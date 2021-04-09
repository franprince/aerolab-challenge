import React from "react";
import Head from "next/head";
import styles from "../styles/User.module.scss";
import Top from "../components/General/Top/Top";
import Header from "../components/General/Header/Header";
import AddPoints from "../components/ProfilePage/AddPoints/AddPoints";
import OrderHistory from "../components/ProfilePage/OrderHistory/OrderHistory";
import Footer from "../components/General/Footer/Footer";

export default function Profile() {
  return (
    <div>
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
          <AddPoints />
          <OrderHistory />
        </div>
      </main>
      <Footer />
    </div>
  );
}
