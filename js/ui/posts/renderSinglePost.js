import * as constants from "../../constants/constants.js";

export async function renderSinglePost(post) {
  const container = constants.mainContainer;
  const title = post.title.rendered;
  const content = post.content.rendered;
  const postImage = post._embedded["wp:featuredmedia"][0].source_url;

  container.innerHTML = `<article class="blog">
                              <h1>${title}</h1>
                              ${content}
                              ${
                                postImage
                                  ? `<img src="${postImage}" alt="${title}" id="myImg" />`
                                  : ""
                              }
                              <div id="myModal" class="modal">
                                <span class="close">&times;</span>
                                <img class="modal-content" id="img" />
                                <div id="caption"></div>
                              </div>
                            </article>`;
}
