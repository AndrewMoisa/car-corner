import { renderPosts } from "../../ui/posts/renderPosts.js";
import * as constants from "../../constants/constants.js";

export function searchBar(oldData) {
  document
    .getElementById("searchButton")
    .addEventListener("click", performSearch);

  document
    .getElementById("searchInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        performSearch();
      }
    });

  const searchButton = document.getElementById("searchButton");
  const closeButton = document.getElementById("closeButton");

  closeButton.addEventListener("click", function () {
    document.getElementById("searchInput").value = "";
    searchButton.style.display = "block";
    closeButton.style.display = "none";
    constants.mainContainer.innerHTML = "";

    renderPosts(oldData);
  });

  function performSearch() {
    const query = document.getElementById("searchInput").value;

    constants.mainContainer.innerHTML = "";

    if (query.trim() === "") {
      renderPosts(oldData);
      return;
    } else {
      searchButton.style.display = "none";
      closeButton.style.display = "block";
    }

    // Fetch posts from WordPress REST API
    fetch(`${constants.url}/posts?search=${encodeURIComponent(query)}&_embed`)
      .then((response) => response.json())
      .then((data) => renderPosts(data))
      .catch((error) => console.error("Error:", error));
  }
}
