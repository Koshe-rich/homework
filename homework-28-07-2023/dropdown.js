const dropdownBtn = document.querySelector(".dropbtn");
const dropdownMenu = document.querySelector(".dropdown-content");
const dropdown = document.querySelector(".dropdown");

dropdownBtn.addEventListener("mouseover", () =>
  dropdownMenu.classList.add("dropdown-content_display_block")
);

dropdown.addEventListener("mouseleave", () =>
  dropdownMenu.classList.remove("dropdown-content_display_block")
);
