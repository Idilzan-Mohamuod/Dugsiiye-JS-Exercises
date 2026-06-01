function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("data Fetched Success");
      } else {
        reject("failed to fetch user data");
      }
    }, 2000);
  });
}

fetchUserData()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
