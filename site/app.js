const list = document.getElementById("ul-main");
const btn = document.getElementById("add-button");
const input = document.getElementById("input-main");

btn.addEventListener("click", addInputValueToList);
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && document.activeElement === input) {
    addInputValueToList();
  }
});

function addInputValueToList() {
  if (input.value == "") return; // input field is empty, action ignored
  var newElement = document.createElement("li");
  newElement.classList.add("list-group-item");
  newElement.appendChild(document.createTextNode(input.value));
  input.value = "";
  list.appendChild(newElement);
}
