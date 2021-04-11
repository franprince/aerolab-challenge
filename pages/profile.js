import * as React from "react";
import Head from "next/head";
import styles from "../styles/Profile.module.scss";
import Header from "../components/common/Header/Header";
import Banner from "../components/common/Banner/Banner";
import AddPoints from "../components/profile/AddPoints";
import OrderHistory from "../components/profile/OrderHistory";
import Footer from "../components/common/Footer/Footer";

export default function Profile() {
  return (
    <div>
      <Head>
        <title>Aerolab rewards program - User profile</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <Banner
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
