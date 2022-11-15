let button = document.querySelector("#button");

function hideButton(event) {
  event.preventDefault();
  button.style.display = "none";
}

button.addEventListener("click", hideButton);
