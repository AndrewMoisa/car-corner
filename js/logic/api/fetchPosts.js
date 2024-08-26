import { url } from "../../constants/constants.js";

export async function fetchPosts(page = 1) {
  const posts = `${url}/posts?_embed&page=${page}`;

  const response = await fetch(posts);

  if (response.ok) {
    const results = await response.json();
    return results;
  }

  throw new Error("There was an error fetching the blogs");
}
