function putPixel(x,y,r,g,b,a) {
  
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  var id = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  var pixels = id.data;

  var sr = pixels[0];
  var sg = pixels[1];
  var sb = pixels[2];

  var zr = sr*(1-a) + a*r;
  var zg = sg*(1-a) + a*g;
  var zb = sb*(1-a) + a*b;
  
  var z = (x * id.width + y) * 4;
  pixels[z] = Math.round(zr*255);
  pixels[z + 1] = Math.round(zg*255);
  pixels[z + 2] = Math.round(zb*255);
  pixels[z + 3] = Math.round(a*255);
    
  ctx.putImageData(id, 0, 0);
};


function drawLine(x1,y1,x2,y2,r,g,b,a){

  var vx = x2-x1;
  var vy = y2-y1;

  var s = 0;
  var max = 600;

  for(var i = 0; i <= max; i++){
    var s = i/max;
    var xn = x1 + s*vx;
    var yn = y1 + s*vy;
    putPixel(Math.round(xn), Math.round(yn),r,g,b,a);
  };
};

function hexToRgb(){

  var hex = colorPicker.value;
  var hex = hex.substring(1);
  var a = alphaPicker.value;

  var r = hex.slice(0,2);
  var g = hex.slice(2,4);
  var b = hex.slice(4,6);

  var r = parseInt(r,16) /255;
  var g = parseInt(g,16) /255;
  var b = parseInt(b,16) /255;
  var a = parseInt(a,10) /255;

  var rgba = [r,g,b,a];

  return rgba;
};

function draw(){

  var x1 = parseInt(x1Input.value, 10);
  var y1 = parseInt(y1Input.value, 10);
  var x2 = parseInt(x2Input.value, 10);
  var y2 = parseInt(y2Input.value, 10);

  var rgba = hexToRgb();

  var r = rgba[0];
  var g = rgba[1];
  var b = rgba[2];
  var a = rgba[3];

  drawLine(x1,y1,x2,y2,r,g,b,a);
};
