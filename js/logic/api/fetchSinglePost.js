import { url } from "../../constants/constants.js";

export async function fetchSinglePost(id) {
  const detailPosts = `${url}/posts/${id}?_embed`;

  const response = await fetch(detailPosts);

  if (response.ok) {
    const results = await response.json();
    return results;
  }

  throw new Error("There was an error fetching the details for blogs");
}
