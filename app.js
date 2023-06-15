window.onload = function() {
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.carousel-image');

  setInterval(() => {
      images[currentImageIndex].style.display = 'none';
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].style.display = 'block';
  }, 5000); // Change image every 3 seconds
}
