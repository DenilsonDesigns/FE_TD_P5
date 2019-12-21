// Functions used in page
function appendPhotos(photoObj) {
  for (let key in photoObj) {
    let mainDiv = document.getElementById("photo-container");
    let imageToAppend = document.createElement("img");
    // console.log(`/../photos/${key}`);
    imageToAppend.src = `/../photos/${key}`;
    imageToAppend.alt = photoObj[key].name;
    // console.log(imageToAppend);
    mainDiv.appendChild(imageToAppend);
  }
}

appendPhotos(photoDesc);
