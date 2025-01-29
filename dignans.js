const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});


// Script the Print Menu button

function printMenu() {
  const menuContent = document.getElementById("menu").innerHTML;
  const originalContent = document.body.innerHTML;

  // Replace the page content with menu content for printing
  document.body.innerHTML = menuContent;
  window.print();

  // Restore the original page content after printing
  document.body.innerHTML = originalContent;
}
