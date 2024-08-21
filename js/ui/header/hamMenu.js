export function handleHamMenuClick() {
  const hamMenu = document.querySelector(".ham-menu");
  const offScreenMenu = document.querySelector(".nav-menu");

  hamMenu.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent click from propagating to the document
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("off-screen-menu");
    offScreenMenu.classList.toggle("nav-menu-active");
  });

  document.addEventListener("click", (event) => {
    if (event.target !== hamMenu && !offScreenMenu.contains(event.target)) {
      offScreenMenu.classList.remove("off-screen-menu");
      offScreenMenu.classList.remove("nav-menu-active");
      hamMenu.classList.remove("active");
    }
  });
}
