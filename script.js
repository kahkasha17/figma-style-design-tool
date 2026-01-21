const navMenuBtn = document.getElementById("navMenuBtn");
const navMobile = document.getElementById("navMobile");

navMenuBtn.addEventListener("click", () => {
  navMobile.classList.toggle("active");
});
