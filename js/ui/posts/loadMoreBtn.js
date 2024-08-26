import * as constants from "../../constants/constants.js";

export function loadMoreBtn(loadMore) {
  const loadMoreDiv = document.createElement("div");
  const loadMoreButton = document.createElement("button");
  loadMoreButton.id = "load-more";
  loadMoreDiv.id = "load-more-div";
  loadMoreButton.textContent = "Load more";
  loadMoreDiv.appendChild(loadMoreButton);
  constants.mainContainer.appendChild(loadMoreDiv);
  loadMoreButton.addEventListener("click", loadMore);
}
