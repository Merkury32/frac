function putPixel(x,y,r,g,b,a,imageData) {
  let z = (y * imageData.width + x) * 4;

  let pixels = imageData.data;
  
  let sr = pixels[z];
  let sg = pixels[z + 1];
  let sb = pixels[z + 2];
  
  let zr = sr*(1-a) + a*r;
  let zg = sg*(1-a) + a*g;
  let zb = sb*(1-a) + a*b;

  pixels[z] = Math.round(zr*255);
  pixels[z + 1] = Math.round(zg*255);
  pixels[z + 2] = Math.round(zb*255);
  pixels[z + 3] = Math.round(a*255);
};

function draw(){
  let a = 1;

  let imageData = readPixels();
  for(let i = 0; i <=512; i++){
    for(let j = 0; j <=512; j++){
      let r = i/512;
      let g = j/512;
      let b = j/512;
      putPixel(j,i,r,g,b,a,imageData);
    };
  };
  refreshPixels(imageData);
};

function readPixels(){

  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  let canvasWidth = canvas.width;
  let canvasHeight = canvas.height;
  let imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

  return imageData;
};

function refreshPixels(imageData){

  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  ctx.putImageData(imageData, 0, 0);
};