import { fetchPosts } from "./fetchPosts.js";
import { renderPosts } from "../../ui/posts/renderPosts.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";

let currentPage = 1; // Global variable to track the current page

export async function loadMorePosts() {
  const loadMoreButton = document.getElementById("load-more");

  if (loadMoreButton) {
    loadMoreButton.disabled = true;
    loadMoreButton.remove();
  }

  currentPage++;

  try {
    // Fetch new posts for the next page
    const posts = await fetchPosts(currentPage);

    if (posts.length > 0) {
      renderPosts(posts); // Render the new posts

      if (loadMoreButton) {
        loadMoreButton.disabled = false;
      }
    } else {
      // Remove the button if no more posts
      if (loadMoreButton) {
        loadMoreButton.remove(); //
      }
    }
  } catch (error) {
    console.error("Error loading posts:", error);
    displayMessage(
      "#load-more-div",
      "An error occurred while loading more posts."
    );
  }
}
