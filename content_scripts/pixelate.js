var images;

do {
  images = document.getElementsByTagName('img');

  for (let image of images) {
    pixel(image);
  }
} while(images.length > 0);
