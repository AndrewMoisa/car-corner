import { handleHeader } from "./logic/handlers/handleHeader.js";
import { handlePosts } from "./logic/handlers/handlePosts.js";

function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
      handleHeader();
      break;
    case "/posts.html":
      handleHeader();
      handlePosts();
      break;
  }
}

router();
