const list = document.querySelector("#list");

function addItem() {
  // creating new item
  const newItem = document.createElement("li");
  // changanging  content
  newItem.textContent = "New Item";
  list.appendChild(newItem);

  // console.log(newItem);
}

function removeItem(){
  if (list.lastChild) 
    {
    list.removeChild(list.lastChild);
  } else {
    alert("Already Execuated the deletetion");
  }
}
