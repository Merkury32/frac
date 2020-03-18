function putPixel(x,y,r,g,b,a) {

  debugger;
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  var id = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  var pixels = id.data;

  var z = (y * id.width + x) * 4;

  var sr = pixels[z];
  var sg = pixels[z + 1];
  var sb = pixels[z + 2];

  console.log(sr,sg,sb);

  var zr = sr*(1-a) + a*r;
  var zg = sg*(1-a) + a*g;
  var zb = sb*(1-a) + a*b;

  console.log(zr,zg,zb);

  pixels[z] = Math.round(zr*255);
  pixels[z + 1] = Math.round(zg*255);
  pixels[z + 2] = Math.round(zb*255);
  pixels[z + 3] = Math.round(a*255);
    
  ctx.putImageData(id, 0, 0);
};

function draw(){
  var x = 0;
  var y = 0;
  var r = 1;
  var g = 0;
  var b = 0;
  var a = 1;

  for(i = 0; i <=100; i++){

    for(j = 0; j <=100; j++){
      putPixel(x,y,r,g,b,a);
      x+=1;
    };
    x=0;
    y+=1;
  };
};