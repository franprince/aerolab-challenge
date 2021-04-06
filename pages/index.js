import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Top from "../components/Top/Top";
import Header from "../components/Header/Header";
import GridLayout from "../components/GridLayout/GridLayout";
import { ProductContextProvider } from "../contexts/productContext";
import { UserContextProvider } from "../contexts/userContext";
export default function Home() {
  return (
    <div>
      <UserContextProvider>
        <ProductContextProvider>
          <Head>
            <title>Aerolab rewards program</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <Top />
            <Header />
            <div className={styles.container}>
              <GridLayout />
            </div>
          </main>
        </ProductContextProvider>
      </UserContextProvider>
    </div>
  );
}
