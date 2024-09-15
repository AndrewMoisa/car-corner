// import * as constants from "../../constants/constants.js";

export function renderCarousel(posts) {
  const container = document.querySelector("main");

  // Clear the main container
  container.innerHTML = "";

  console.log(posts);

  // Create the main section title
  const sectionTitle = document.createElement("h1");
  sectionTitle.classList.add("section-title");
  sectionTitle.textContent = "Recent posts";

  // Create the slider wrapper
  const sliderWrapper = document.createElement("section");
  sliderWrapper.classList.add("slider-wrapper");

  // Create the previous and next buttons
  const prevButton = document.createElement("button");
  prevButton.classList.add("slide-arrow");
  prevButton.id = "slide-arrow-prev";
  prevButton.innerHTML = "&#8249;"; // Left arrow

  const nextButton = document.createElement("button");
  nextButton.classList.add("slide-arrow");
  nextButton.id = "slide-arrow-next";
  nextButton.innerHTML = "&#8250;"; // Right arrow

  // Create the container for the slides
  const slidesContainer = document.createElement("div");
  slidesContainer.classList.add("slides-container");
  slidesContainer.id = "slides-container";

  // Append the buttons and the slides container to the slider wrapper
  sliderWrapper.appendChild(prevButton);
  sliderWrapper.appendChild(nextButton);
  sliderWrapper.appendChild(slidesContainer);

  // Append the title and the slider to the main container
  container.appendChild(sectionTitle);
  container.appendChild(sliderWrapper);

  // Loop through the posts and create slides
  posts.forEach((item) => {
    const imageUrl = item._embedded["wp:featuredmedia"][0]?.source_url;
    if (imageUrl) {
      // Create a slide element
      const slide = document.createElement("div");
      slide.classList.add("slide");

      // Create the anchor element
      const link = document.createElement("a");
      link.classList.add("cards");
      link.href = `/post.html?id=${item.id}`;

      // Create the card image wrapper
      const cardImage = document.createElement("div");
      cardImage.classList.add("card-image");

      // Create the image element
      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = "Image Slide";

      // Append the image to the card image wrapper
      cardImage.appendChild(img);

      // Create the card content wrapper
      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");

      // Create the slide title
      const slideTitle = document.createElement("h2");
      slideTitle.classList.add("slide-title");
      slideTitle.textContent = item.title.rendered;

      // Create the slide description
      const slideDescription = document.createElement("p");
      slideDescription.classList.add("slide-description");
      // Using innerHTML here for excerpt as it may contain HTML tags
      slideDescription.innerHTML = item.excerpt.rendered;

      // Append the title and description to the card content
      cardContent.appendChild(slideTitle);
      cardContent.appendChild(slideDescription);

      // Append the card image and card content to the link
      link.appendChild(cardImage);
      link.appendChild(cardContent);

      // Append the link to the slide
      slide.appendChild(link);

      // Append the slide to the slides container
      slidesContainer.appendChild(slide);
    }
  });

  // Get the first slide to calculate slide width for scrolling
  const slide = document.querySelector(".slide");

  // Add functionality to move the slider left and right
  nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });

  prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });
}
