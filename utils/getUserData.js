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
    if (fetchUserData.ok) {
      return { status: "fullfilled", userData: userData };
    } else {
      return { status: "rejected", error: error };
    }
  } catch (error) {
    console.error(error);
  }
}

export default getUserData;
