function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ id: 1, name: "Jama Yousuf" });
      } else {
        reject("failed to fetch user data");
      }
    }, 2000);
  });
}

async function displayUserData() {
  try {
    const user = await fetchUserData();
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}
displayUserData();
