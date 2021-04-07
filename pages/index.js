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
        </ProductContextProvider>
      </UserContextProvider>
    </div>
  );
}
