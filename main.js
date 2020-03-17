function putPixel(x,y,r,g,b,a) {
  
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  var id = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  var pixels = id.data;

  var x = 0;
  var y = 0;
  var r = 255;
  var g = 0;
  var b = 0;
  var a = 255;

  debugger;

  for(i = 0; i < canvasHeight; i++){
    for(j = 0; j < canvasWidth; j++){
      var z = (y * id.width + x) * 4;
  
      pixels[z] = r;
      pixels[z + 1] = g;
      pixels[z + 2] = b;
      pixels[z + 3] = a;
        
      ctx.putImageData(id, 0, 0);
      
      x+=1;
    };
    x=0;
    y+=1;
  };
};