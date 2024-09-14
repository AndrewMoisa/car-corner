export function imgModal() {
  // Move these inside renderSinglePost to ensure they exist
  const modal = document.getElementById("myModal");
  const img = document.getElementById("myImg");
  const modalImg = document.getElementById("img");
  const captionText = document.getElementById("caption");

  if (img) {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    });

    const span = document.getElementsByClassName("close")[0];

    span.addEventListener("click", function () {
      modal.style.display = "none";
    });

    document.addEventListener("click", function () {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
}
