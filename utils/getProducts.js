async function getProducts() {
  try {
    const fetchProducts = await fetch(
      "https://coding-challenge-api.aerolab.co/products",
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );
    const products = await fetchProducts.json();
    if (fetchProducts.ok) {
      return {
        sortedBy: "mostRecent",
        sortedData: products,
        defaultData: products,
        status: "fullfilled",
      };
    } else {
      return {
        status: "rejected",
        error: error,
      };
    }
  } catch (error) {
    console.error(error);
  }
}

export default getProducts;
