import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/common/Header/Header";
import Banner from "../components/common/Banner/Banner";
import GridLayout from "../components/home/GridLayout";
import Footer from "../components/common/Footer/Footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Aerolab rewards program - Home</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <Banner
          imgUrl="/header-x1.png"
          title="Electronics"
          backgroundPosition="right"
        />
        <div className={styles.container}>
          <GridLayout />
        </div>
      </main>
      <Footer />
    </div>
  );
}
