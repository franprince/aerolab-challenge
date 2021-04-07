async function getRedeemHistory() {
  try {
    const fetchRedeemHistory = await fetch(
      "https://coding-challenge-api.aerolab.co/user/history",
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );
    const redeemHistory = await fetchRedeemHistory.json();
    return { status: "fullfilled", redeemHistory: redeemHistory };
  } catch (error) {
    return { status: "rejected", error: error };
  }
}

export default getRedeemHistory;
