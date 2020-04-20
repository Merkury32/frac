function putPixel(x,y,r,g,b,a,imageData) {
  if(!(x < imageData.height && y < imageData.width  && x >= 0 && y >= 0)) return;
  let z = (y * imageData.width + x) * 4;

  let pixels = imageData.data;
    
  let sr = pixels[z]/255;
  let sg = pixels[z + 1]/255;
  let sb = pixels[z + 2]/255;
  
  let zr = sr*(1-a) + a*r;
  let zg = sg*(1-a) + a*g;
  let zb = sb*(1-a) + a*b;
  
  pixels[z] = Math.round(zr*255);
  pixels[z + 1] = Math.round(zg*255);
  pixels[z + 2] = Math.round(zb*255);
  pixels[z + 3] = Math.round(a*255);
};

let fr = function(x1,y1){
  return x1*x1+y1*y1;
};

let fg = function(x2,y2){
  return Math.sin(x2) + Math.cos(y2);
};

function draw(){
  let a = 1;
  let m = 512;
  let imageData = readPixels();

  for(let i = 0; i <=m; i++){
    let x1 = 4 * i/m - 2;
    let x2 = i/m * 4;
    let y2 = i/m * 4;

    for(let j = 0; j <=m; j++){
      let y1 = 4 * j/m - 2;
      let r = fr(x1,y1);
      let g = fg(x2,y2);
      putPixel(i,j,r,g,0,a,imageData);
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