import * as constants from "../../constants/constants.js";

export function renderPosts(data) {
  const container = constants.mainContainer;
  const posts = data;

  container.innerHTML = "";

  const blogsContainer = document.createElement("section");
  blogsContainer.className = "blogs-container";
  container.appendChild(blogsContainer);

  posts.forEach((post) => {
    const postTitle = post.title.rendered;
    const postImage = post._embedded["wp:featuredmedia"][0].source_url;
    const postExcerpt = post.excerpt.rendered;

    // Create the article element
    const articleElement = document.createElement("article");
    articleElement.className = "post";

    // Create the post-text element
    const postTextElement = document.createElement("div");
    postTextElement.className = "post-text";

    // Create the post title element
    const titleElement = document.createElement("h3");
    titleElement.textContent = postTitle;
    postTextElement.appendChild(titleElement);

    // Create the post excerpt element
    const excerptElement = document.createElement("p");
    excerptElement.innerHTML = postExcerpt;
    postTextElement.appendChild(excerptElement);

    // Create the read more link
    const readMoreLink = document.createElement("a");
    readMoreLink.href = `post.html?id=${post.id}`;
    readMoreLink.textContent = "Read more";
    readMoreLink.className = "primary-btn";
    postTextElement.appendChild(readMoreLink);

    // Create the post-img element
    const postImgElement = document.createElement("div");
    postImgElement.className = "post-img";

    // Create the image element
    const imageElement = document.createElement("img");
    imageElement.src = postImage;
    imageElement.alt = postTitle;
    postImgElement.appendChild(imageElement);

    // Append elements to the article
    articleElement.appendChild(postTextElement);
    articleElement.appendChild(postImgElement);

    // Append the article to the container
    blogsContainer.appendChild(articleElement);
  });
}
