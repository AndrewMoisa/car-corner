// import * as constants from "../../constants/constants.js";

export function loadMoreBtn(loadMore) {
  const loadMoreDiv = document.createElement("div");
  const loadMoreButton = document.createElement("button");
  const container = document.querySelector(".blogs-container");
  loadMoreButton.id = "load-more";
  loadMoreButton.classList.add("primary-btn");
  loadMoreDiv.id = "load-more-div";
  loadMoreButton.textContent = "Load more";
  loadMoreDiv.appendChild(loadMoreButton);
  container.appendChild(loadMoreDiv);
  loadMoreButton.addEventListener("click", loadMore);
}
