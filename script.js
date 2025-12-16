const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  const open = mobileMenu.style.display === "flex";
  mobileMenu.style.display = open ? "none" : "flex";
});

mobileMenu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => (mobileMenu.style.display = "none"));
});
