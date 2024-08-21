import { fetchPosts } from "../api/fetchPosts.js";
import { renderPosts } from "../../ui/header/renderPosts.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";

export async function handlePosts() {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
  } catch (error) {
    displayMessage("#collections-div", error.message);
  }
}
