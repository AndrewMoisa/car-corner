// import * as constants from "../../constants/constants.js";
import { fetchPosts } from "../api/fetchPosts.js";
import { renderPosts } from "../../ui/posts/renderPosts.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { loadMoreBtn } from "../../ui/posts/loadMoreBtn.js";
import { loadMorePosts } from "../api/loadMorePosts.js";

export async function handlePosts() {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
    loadMoreBtn(loadMorePosts);

    // Call initialLoad on page load
  } catch (error) {
    console.log(error);
    displayMessage("main", error.message);
  }
}
