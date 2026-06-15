async function fetchUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();
    console.log("Users fetched successfully:", users);
  } catch (error) {
    console.error("Failed to fetch users:", error.message);
  }
}

fetchUsers();
