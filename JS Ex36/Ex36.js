const colorPicker = document.querySelector("#colorPicker");
const colorPreviewer = document.querySelector("#colorPreviewer");
const colorHistory = document.querySelector("#colorHistory");
const clearSelected = document.querySelector("#clearSelected");

colorPicker.addEventListener("change", function () {
  const colorSelection = colorPicker.value;
  colorPreviewer.style.backgroundColor = colorSelection;
  addColortoHistory(colorSelection);
});

function addColortoHistory(color) {
  const para = document.createElement("p");
  para.textContent = color;
  para.style.color = color;
  colorHistory.appendChild(para);
}

clearSelected.addEventListener("click", function () {
  colorHistory.innerHTML = "";
});
