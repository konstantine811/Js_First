const h1El = document.querySelector("h1");
const btn = document.getElementById("btn");
btn.addEventListener("click", hideText);
let isTextVisible = true;
function hideText() {
  h1El.style.visibility = isTextVisible ? "hidden" : "visible";
  btn.textContent = isTextVisible ? "Hide of text" : "Show of text";
  isTextVisible = !isTextVisible;
}
