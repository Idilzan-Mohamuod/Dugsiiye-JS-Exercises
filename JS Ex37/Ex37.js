// 1. SELECTING DOM ELEMENTS
const blogTitle = document.querySelector("#blogTitle");
const blogImage = document.querySelector("#blogImage");
const blogComment = document.querySelector("#blogComment");
const postBtn = document.querySelector("#postBtn");
const postsContainer = document.querySelector("#postsContainer");

// Load saved blog posts when the page finishes loading
document.addEventListener("DOMContentLoaded", loadPosts);

function loadPosts() {
  // Getting old posts from local storage
  const posts = getPostsfromLocalStorage();
  posts.forEach((post) => {
    addPoststoDom(post);
  });
}

// 2. ADDING SUBMIT EVENT
postBtn.addEventListener("click", addPosts);

function addPosts(event) {
  event.preventDefault();

  // Grabbing values from all three inputs
  const titleText = blogTitle.value.trim();
  const imageUrl = blogImage.value.trim();
  const commentText = blogComment.value.trim();

  // Validate that all fields have text inside them
  if (titleText !== "" && imageUrl !== "" && commentText !== "") {
    
    // Creating a single post object holding all your inputs
    const post = {
      id: Date.now(),
      title: titleText,
      image: imageUrl,
      comment: commentText
    };

    // Adding post to DOM and saving to local storage
    addPoststoDom(post);
    savePoststoLocalStorage(post);

    // Resetting your input forms
    blogTitle.value = "";
    blogImage.value = "";
    blogComment.value = "";
  } else {
    alert("Please fill in all inputs before posting!");
  }
}

// 3. RENDERING TO THE DOM
function addPoststoDom(post) {
  // Creating a wrapper div for your blog card
  const div = document.createElement("div");
  div.className = "blog-card";
  div.dataset.id = post.id;

  // Structuring the card to show your Title, Image, and Comment
  div.innerHTML = `
        <h3>${post.title}</h3>
        <img src="${post.image}" alt="Blog Image">
        <p>${post.comment}</p>
        <button class="btn-edit">Edit</button>
        <button class="btn-delete">Delete</button>
    `;

  // Appending it into your posts container down section
  postsContainer.appendChild(div);

  // Attach your action event listeners to this card
  attachEventListeners(div, post);
}

// 4. ATTACHING ACTION LISTENERS
function attachEventListeners(div, post) {
  const deleteBtn = div.querySelector(".btn-delete");
  const editBtn = div.querySelector(".btn-edit");

  deleteBtn.addEventListener("click", function () {
    handleDelete(post.id, div);
  });

  editBtn.addEventListener("click", function () {
    handleEdit(post.id, div);
  });
}

// 5. REAL-TIME EDIT ROUTINE
function handleEdit(postId, div) {
  const titleSpan = div.querySelector("h3");
  const imageSpan = div.querySelector("img");
  const commentSpan = div.querySelector("p");

  // Prompts user for all three properties sequentially
  const newTitle = prompt("Edit Your Blog Title Here:", titleSpan.textContent);
  const newImage = prompt("Edit Your Image URL Here:", imageSpan.src);
  const newComment = prompt("Edit Your Blog Content Here:", commentSpan.textContent);

  // Verify that the user did not cancel the prompts or leave them blank
  if (newTitle && newImage && newComment) {
    // Update to localStorage
    updatePosts(postId, newTitle.trim(), newImage.trim(), newComment.trim());
    
    // Update to DOM immediately
    titleSpan.textContent = newTitle.trim();
    imageSpan.src = newImage.trim();
    commentSpan.textContent = newComment.trim();
  }
}

// 6. DELETE ROUTINE
function handleDelete(id, div) {
  let posts = getPostsfromLocalStorage();
  posts = posts.filter((post) => post.id !== id);
  localStorage.setItem("blogPosts", JSON.stringify(posts));
  div.remove();
}

// 7. LOCAL STORAGE MANAGEMENT UTILITIES
function updatePosts(postId, newTitle, newImage, newComment) {
  const posts = getPostsfromLocalStorage();
  const post = posts.find((post) => post.id == postId);
  if (post) {
    post.title = newTitle;
    post.image = newImage;
    post.comment = newComment;
    localStorage.setItem("blogPosts", JSON.stringify(posts));
  }
}

function savePoststoLocalStorage(post) {
  const oldPosts = getPostsfromLocalStorage();
  oldPosts.push(post);
  localStorage.setItem("blogPosts", JSON.stringify(oldPosts));
}

function getPostsfromLocalStorage() {
  const oldPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  return oldPosts;
}