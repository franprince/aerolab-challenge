async function addPoints(points) {
  const redeemProduct = await fetch(
    "https://coding-challenge-api.aerolab.co/user/points",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: Number(points),
      }),
    }
  );
  const response = await redeemProduct.json();
  return response;
}

export default addPoints;
