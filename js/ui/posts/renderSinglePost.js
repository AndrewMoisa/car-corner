import * as constants from "../../constants/constants.js";

export async function renderSinglePost(post) {
  // Extract post data
  const container = constants.mainContainer;
  const title = post.title.rendered;
  const content = post.content.rendered;
  const postImage = post._embedded["wp:featuredmedia"][0]?.source_url;

  container.innerHTML = "";

  document.title = title;

  // Create elements for the blog post
  const article = document.createElement("article");
  article.className = "blog";

  const titleElement = document.createElement("h1");
  titleElement.textContent = title;

  const contentElement = document.createElement("div");
  contentElement.innerHTML = content;

  // Append title and content to the article
  article.appendChild(titleElement);
  article.appendChild(contentElement);

  // If there's an image, create and append it
  if (postImage) {
    const imageElement = document.createElement("img");
    imageElement.src = postImage;
    imageElement.alt = title;
    imageElement.id = "myImg";
    article.appendChild(imageElement);

    // Create modal elements
    const modal = document.createElement("div");
    modal.id = "myModal";
    modal.className = "modal";

    const closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.innerHTML = "&times;";

    const modalImage = document.createElement("img");
    modalImage.className = "modal-content";
    modalImage.id = "img";

    const caption = document.createElement("div");
    caption.id = "caption";

    // Append elements to modal
    modal.appendChild(closeButton);
    modal.appendChild(modalImage);
    modal.appendChild(caption);

    // Append modal to the article
    article.appendChild(modal);
  }

  // Append the entire article to the container
  container.appendChild(article);
}
