import { handleHeader } from "./logic/handlers/handleHeader.js";
import { handlePosts } from "./logic/handlers/handlePosts.js";
import { handleSinglePost } from "./logic/handlers/handleSinglePost.js";

function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
      handleHeader();
      break;
    case "/posts.html":
      handleHeader();
      document.addEventListener("DOMContentLoaded", handlePosts);
      break;
    case "/post.html":
      handleHeader();
      document.addEventListener("DOMContentLoaded", handleSinglePost);
      break;
  }
}

router();
