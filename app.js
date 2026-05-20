const toggleBox = document.querySelector("#toggle-box");
const toggleCircle = document.querySelector("#toggle-circle");
const moonIcon = document.querySelector("#moon-icon");
const sunIcon = document.querySelector("#sun-icon");
const toggleText = document.querySelector("#toggle-text");
const body = document.querySelector("body");
const headerContainer = document.querySelector("#header-container");
const h1 = document.querySelector("h1");

const toggleFunc = () => {
  toggleBox.classList.toggle("light");

  toggleCircle.classList.toggle("translate-x-full");
  moonIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("stroke-white");
  sunIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("stroke-white");
  h1.classList.toggle("text-white");
  toggleText.classList.toggle("text-white");

  if (toggleBox.classList.contains("light")) {
    toggleText.textContent = "Light Mode";
    body.classList.replace("bg-blue-100", "bg-slate-950");
    headerContainer.classList.replace("bg-blue-50", "bg-slate-800");
    toggleBox.classList.replace("bg-blue-100", "bg-slate-950");
    toggleCircle.classList.replace("bg-white", "bg-slate-800");
  } else {
    toggleText.textContent = "Dark Mode";
    body.classList.replace("bg-slate-950", "bg-blue-100");
    headerContainer.classList.replace("bg-slate-800", "bg-blue-50");
    toggleBox.classList.replace("bg-slate-950", "bg-blue-100");
    toggleCircle.classList.replace("bg-slate-800", "bg-white");
  }
};

toggleBox.addEventListener("click", () => toggleFunc());
