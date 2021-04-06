async function getUserData() {
  try {
    const fetchUserData = await fetch(
      "https://coding-challenge-api.aerolab.co/user/me",
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );
    const userData = await fetchUserData.json();
    return { status: "fullfilled", userData: userData };
  } catch (error) {
    return { status: "rejected", error: error };
  }
}

export default getUserData;
