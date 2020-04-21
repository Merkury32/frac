function putPixel(x,y,r,g,b,a,imageData) {
  if(!(x < imageData.height && y < imageData.width  && x >= 0 && y >= 0)) return;

  x = Math.round(x);
  y = Math.round(y);

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

let h = function(x,y){
  let x1 = 4 * x - 2;
  let y1 = 4 * y - 2;
  let x2 = Math.PI * x * 4;
  let y2 = Math.PI * y * 4;

  let r = x1 * x1 + y1 * y1;
  let g = Math.sin(x2) + Math.cos(y2);
  let b = 0;

  let rgb = [r,g,b];
  return rgb;
};

function draw(){
  let a = 1;
  let m = 512;
  let imageData = readPixels();

  for(let i = 0; i <=m; i++){
    let x = (i/m);
    for(let j = 0; j <=m; j++){
      let y = (j/m);
      let c = h(x,y);
      putPixel(i,j,c[0],c[1],c[2],a,imageData);
    };
  };
  refreshPixels(imageData);
};

let k = function(s){
  let t = s * Math.PI * 2;
  let x = 16 * (Math.sin(t) ** 3);
  let y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
  return [x,y];
};

function drawCurve(){
  let m = 2048;
  let imageData = readPixels();

  for(let i = 0; i <=m; i++){
    let t = (i/m);
    let d = k(t);
    putPixel( d[0]*10 + 250, d[1]*10 + 220, 0,0,1,1,imageData);
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