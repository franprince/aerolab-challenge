async function redeemProducts(productId) {
  try {
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
    if (redeemProduct.ok) {
      return response;
    } else {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}

export default redeemProducts;
