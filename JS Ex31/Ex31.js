async function fetchUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';

  try {
    // 1. Make the GET request
    const response = await fetch(url);

    // 2. Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 3. Parse the JSON response body
    const users = await response.json();

    // 4. Log the list of users to the console
    console.log('Users fetched successfully:', users);
  } catch (error) {
    // 5. Handle any errors (network issues, bad status codes, etc.)
    console.error('Failed to fetch users:', error.message);
  }
}

// Call the function to execute the request
fetchUsers();