import * as constants from "../../constants/constants.js";

export function renderHeader() {
  const header = constants.header;

  header.innerHTML = `<div class="header-content">
                      <a href="/index.html"><img class="mobile-img logo" src="/images/logo.png" alt="logo"></a>
                      <nav class="nav-menu">
                      <a href="/index.html">Home</a>
                      <a href="/posts.html">Posts</a>
                      <img src="/images/logo.png" alt="logo" class="logo">
                      <a href="/contact.html">Contact</a>
                      <a href="/about.html">About</a>                 
                      </nav>
                      <div class="ham-menu">
                      <span></span>
                      <span></span>
                      <span></span>
                      </div> 
                      </div>
                      <div class="header-extras">
                      <div class="search" >
                      <input type="text" id="searchInput" placeholder="Search for posts">
                      <img id="searchButton" src="/images/search.svg" alt="search" class="search-icon">
                      <img id="closeButton" src="/images/close.png" alt="close" class="close-icon">
                      </div>
                      <div class="theme-button">
                      <button id="theme-button">Dark Mode</button>
                      </div>
                      </div>
                      `;
}
