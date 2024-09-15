export function loadMoreBtn(load) {
  const loadMoreDiv = document.createElement("div");
  const loadMoreButton = document.createElement("button");
  const container = document.querySelector(".blogs-container");

  loadMoreButton.id = "load-more";
  loadMoreButton.classList.add("primary-btn");
  loadMoreDiv.id = "load-more-div";
  loadMoreButton.textContent = "Load more";

  loadMoreDiv.appendChild(loadMoreButton);
  container.appendChild(loadMoreDiv);

  // Add click event to trigger the provided `load` function
  loadMoreButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent any default behavior (like form submission)
    load(); // Trigger the load function passed as an argument
  });
}
