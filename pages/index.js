import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Top from "../components/Top/Top";
import Header from "../components/Header/Header";
import GridLayout from "../components/GridLayout/GridLayout";
import ContentSort from "../components/ContentSort/ContentSort";
import { ProductContextProvider } from "../contexts/productContext";
export default function Home({ products, user }) {
  return (
    <div>
      <ProductContextProvider>
        <Head>
          <title>Aerolab rewards program</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Top userData={user} />
          <Header />
          <div className={styles.container}>
            <ContentSort />
            <GridLayout products={products} />
          </div>
        </main>
      </ProductContextProvider>
    </div>
  );
}
export async function getStaticProps() {
  const fetchProducts = await fetch(
    "https://coding-challenge-api.aerolab.co/products",
    {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );
  const products = await fetchProducts.json();
  const fetchUser = await fetch(
    "https://coding-challenge-api.aerolab.co/user/me",
    {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );
  const user = await fetchUser.json();

  return {
    props: {
      products,
      user,
    },
    revalidate: 1,
  };
}
