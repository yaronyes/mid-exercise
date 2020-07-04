const images = ["paz_250x110103131473.jpg", "banner_atar.jpg", "250X110571325734.jpg"];
const imageFolderPath = "img/";
const $image = document.getElementById("changing-img");
var index = -1;

const getNextIndex = (index) => {
    return index < 2  ? index + 1 : 0;
}

setInterval(() => {
    index = getNextIndex(index);        
    $image.src = `${imageFolderPath}${images[getNextIndex(index)]}`;
}, 5000);