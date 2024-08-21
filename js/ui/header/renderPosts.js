import * as constants from "../../constants/constants.js";

export function renderPosts(data) {
  const container = constants.mainContainer;
  const posts = data;
  console.log(posts);
  container.innerHTML = `<p>TEST</p>`;
}
