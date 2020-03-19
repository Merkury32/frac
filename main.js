function putPixel(x,y,r,g,b,a,imageData) {
  var z = (y * imageData.width + x) * 4;

  var pixels = imageData.data;
  
  var sr = pixels[z];
  var sg = pixels[z + 1];
  var sb = pixels[z + 2];
  
  var zr = sr*(1-a) + a*r;
  var zg = sg*(1-a) + a*g;
  var zb = sb*(1-a) + a*b;

  pixels[z] = Math.round(zr*255);
  pixels[z + 1] = Math.round(zg*255);
  pixels[z + 2] = Math.round(zb*255);
  pixels[z + 3] = Math.round(a*255);
};

function draw(){
  var a = 1;

  var imageData = readPixels();
  for(i = 0; i <=512; i++){
    for(j = 0; j <=512; j++){
      putPixel(j,i,r,g,b,a,imageData);
      var r = i/512;
      var g = j/512;
      var b = j/512;
    };
  };
  refreshPixels(imageData);
};

function readPixels(){

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  var imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

  return imageData;
};

function refreshPixels(imageData){

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  ctx.putImageData(imageData, 0, 0);
};