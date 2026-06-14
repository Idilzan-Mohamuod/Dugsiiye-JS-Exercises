// Select by ID (using the '#' symbol)
const mainHeader = document.querySelector("#header");
console.log("Selected by ID:", mainHeader);

// selector by Class(using the '.' symbol)
const firstParagraph = document.querySelector(".text");
console.log("Selected first class:", firstParagraph);

// selector by First Tag List
const firstLi = document.querySelector("li");
console.log("Selected first HTML tag:", firstLi);

//Query selector All for paragraphs//
const allParagraphs = document.querySelectorAll(".text");
console.log("All paragraphs:", allParagraphs);

//Query selector All for Tag lists/
const allTags = document.querySelectorAll(".tag");
console.log("All tags:", allTags);
