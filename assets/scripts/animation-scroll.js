const images = [
    "https://via.placeholder.com/800x600?text=Spring+Destination+1",
    "https://via.placeholder.com/800x600?text=Spring+Destination+2",
    "https://via.placeholder.com/800x600?text=Spring+Destination+3"
];

let currentIndex = 0;

const nextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('sliderImage').src = images[currentIndex];
}

const prevImage = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('sliderImage').src = images[currentIndex];
}