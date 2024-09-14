import { handleHeader } from "./logic/handlers/handleHeader.js";
import { handlePosts } from "./logic/handlers/handlePosts.js";
import { handleSinglePost } from "./logic/handlers/handleSinglePost.js";
import { handleCarousel } from "./logic/handlers/handleCarousel.js";
import { verifyFrom } from "./ui/contact/verifyForm.js";

function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
      handleHeader();
      document.addEventListener("DOMContentLoaded", handleCarousel);
      break;
    case "/posts.html":
      handleHeader();
      document.addEventListener("DOMContentLoaded", handlePosts);
      break;
    case "/post.html":
      handleHeader();
      document.addEventListener("DOMContentLoaded", handleSinglePost);
      break;
    case "/about.html":
      handleHeader();
      break;
    case "/contact.html":
      handleHeader();
      verifyFrom();
      // renderContact();
      break;
  }
}

router();
