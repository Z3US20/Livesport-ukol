const btn = document.querySelector("label");


const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.remove("dark-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");

  } else {
    document.body.classList.toggle("dark-theme");
  }

});

