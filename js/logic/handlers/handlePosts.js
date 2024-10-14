// import * as constants from "../../constants/constants.js";
import { fetchPosts } from "../api/fetchPosts.js";
import { renderPosts } from "../../ui/posts/renderPosts.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { loadMoreBtn } from "../../ui/posts/loadMoreBtn.js";
import { loadMorePosts } from "../api/loadMorePosts.js";
import * as constants from "../../constants/constants.js";
import { searchBar } from "../api/search.js";

export async function handlePosts() {
  try {
    const posts = await fetchPosts();
    constants.mainContainer.innerHTML = "";
    renderPosts(posts);
    loadMoreBtn(loadMorePosts);
    searchBar(posts);
  } catch (error) {
    console.log(error);
    displayMessage("main", error.message);
  }
}
