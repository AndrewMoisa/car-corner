export function renderHeader() {
  const header = document.querySelector("header");

  header.innerHTML = `<div class="logo">CarCorner</div>
                      <nav class="nav-menu">
                      <a href="/index.html">Home</a>
                      <a href="/contact.html">Contact</a>
                      <a href="/about.html">About</a>                     
                      </nav>`;
}
