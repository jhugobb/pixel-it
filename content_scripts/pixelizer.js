/*
Creates a new canvas on the likes of a given image.
Replaces such image with the newly created canvas
*/
function pixel( img ) {
  // creat canvas
  var canvas = document.createElement('canvas');
  // copy attributes from img to canvas
  canvas.className = img.className;
  canvas.id = img.id;

  pixelize(img, canvas);

  // replace image with canvas
  img.parentNode.replaceChild( canvas, img )
}

function pixelize(img, canvas) {
  var scale = 0.15;
  var ctx = canvas.getContext('2d');
  var w = canvas.width = img.width;
  var h = canvas.height = img.height;
  w *= scale;
  h *= scale;

  // draw image on canvas
  ctx.drawImage(img, 0, 0, w, h);

  // It's important to set imageSmoothingEnable to false so that
  // the image doesn't blur
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
}
