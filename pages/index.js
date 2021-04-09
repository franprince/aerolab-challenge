import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Top from "../components/General/Top/Top";
import Header from "../components/General/Header/Header";
import GridLayout from "../components/HomePage/GridLayout/GridLayout";
import Footer from "../components/General/Footer/Footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Aerolab rewards program - Home</title>
      </Head>
      <main className={styles.main}>
        <Top />
        <Header
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
