import { renderCarousel } from "../../ui/carousel/renderCarousel.js";
import { fetchRecentPosts } from "../api/fetchRecentPosts.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
export async function handleCarousel() {
  try {
    const posts = await fetchRecentPosts();
    renderCarousel(posts);
  } catch (error) {
    displayMessage("main", error.message);
  }
}
