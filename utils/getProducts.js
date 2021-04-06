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
    return {
      sortedBy: "mostRecent",
      sortedData: products,
      defaultData: products,
      status: "fullfilled",
    };
  } catch (error) {
    return {
      status: "rejected",
      error: error,
    };
  }
}

export default getProducts;
