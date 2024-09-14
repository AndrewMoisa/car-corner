import { url } from "../../constants/constants.js";

export async function fetchRecentPosts() {
  const queryPara = "?per_page=5&orderby=date&order=desc&_embed";
  const posts = `${url}/posts${queryPara}`;

  const response = await fetch(posts);

  if (response.ok) {
    const results = await response.json();
    console.log(results);
    return results;
  }

  throw new Error("There was an error fetching the blogs");
}
