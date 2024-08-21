import { url } from "../../constants/constants.js";

export async function fetchPosts() {
  const posts = `${url}/posts`;

  const response = await fetch(posts);

  if (response.ok) {
    const results = await response.json();
    return results;
  }

  throw new Error("There was an error fetching the jokes");
}
