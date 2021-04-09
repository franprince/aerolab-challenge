import "../styles/globals.css";
import { ProductContextProvider } from "../contexts/productContext";
import { userContext, UserContextProvider } from "../contexts/userContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <ProductContextProvider>
        <Component {...pageProps} />
      </ProductContextProvider>
    </UserContextProvider>
  );
}

export default MyApp;
