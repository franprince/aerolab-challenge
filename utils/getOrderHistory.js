async function getOrderHistory() {
  try {
    const fetchOrderHistory = await fetch(
      "https://coding-challenge-api.aerolab.co/user/history",
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );
    const orderHistory = await fetchOrderHistory.json();
    if (fetchOrderHistory.ok) {
      return { status: "fullfilled", orderHistory: orderHistory };
    } else {
      return { status: "rejected", error: error };
    }
  } catch (error) {
    console.error(error);
  }
}

export default getOrderHistory;
