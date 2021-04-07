async function redeemProducts(productId) {
  const redeemProduct = await fetch(
    "https://coding-challenge-api.aerolab.co/redeem",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
      }),
    }
  );
  const response = await redeemProduct.json();
  return response;
}

export default redeemProducts;