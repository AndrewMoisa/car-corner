import { getQueryParam } from "../helpers/getQueryParam.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { fetchSinglePost } from "../api/fetchSinglePost.js";
import { renderSinglePost } from "../../ui/posts/renderSinglePost.js";
import { imgModal } from "../../ui/posts/imgModal.js";

export async function handleSinglePost() {
  const id = getQueryParam("id");
  if (!id) {
    window.location.href = "/";
  }

  try {
    const singlePost = await fetchSinglePost(id);
    renderSinglePost(singlePost);
    imgModal();

    console.log(singlePost);
  } catch (error) {
    displayMessage("main", error.message);
    console.log("An error occurred", error);
  }
}
