// Plugin used: https://lokeshdhakar.com/projects/lightbox2/

const imagesOnPage = document.getElementsByTagName("img");
const searchInput = document.getElementById("search-input");
appendPhotos(photoDesc);

searchInput.addEventListener("keyup", () => {
  for (let i = 0; i < imagesOnPage.length; i++) {
    console.log(imagesOnPage[i].alt);
    if (
      imagesOnPage[i].alt
        .toUpperCase()
        .indexOf(searchInput.value.toUpperCase()) > -1 ||
      imagesOnPage[i].title
        .toUpperCase()
        .indexOf(searchInput.value.toUpperCase()) > -1
    ) {
      imagesOnPage[i].style.display = "";
    } else {
      imagesOnPage[i].style.display = "none";
    }
  }
});
