var blob;
var blobs = [];
var zoom = 1;
var gameStarted = false;

function startMenu()
{
  background(22);
  textAlign(CENTER);
  textSize(32);
  fill(255,225);
  text("Q U A N T U M  -  n e x u s ", 
       width/2, height/2)
  noFill()
  stroke(225,225)
  strokeWeight(1)

  rect(width/2-50, height/2+20, 100, 40,);
  textSize(16)
  fill(225,225)
  text("START", width/2, height/2 + 45)
  
  if (mouseIsPressed && mouseX > width/2-50 && mouseX < width/2+50 && mouseY > height/2+20 && mouseY < height/2+60)
  {
    gameStarted = true;
  }
}

function setup()
{
  createCanvas(1000, 500);

  startMenu()
 
  blob = new Blob(0, 0, 64);
  for (var i = 0; i < 500; i++) {
    var x = random(-width*2, width*2);
    var y = random(-height*2, height*2);
    blobs[i] = new Blob(x, y, 16);
  }
  
}

function draw()
{
  if (gameStarted)
  {
    
    background(0);

    translate(width / 2, height / 2);
    var newzoom = 64 / blob.r;
    zoom = lerp(zoom, newzoom, 0.1);
    scale(zoom);
    translate(-blob.pos.x, -blob.pos.y);
  
    for (var i = blobs.length - 1; i >= 0; i--) {
      blobs[i].show();
      if (blob.eats(blobs[i])) {
        blobs.splice(i, 1);
      }
    }
  
    blob.show();
    blob.update();
  }
  else
  {
    startMenu()
  }
}


