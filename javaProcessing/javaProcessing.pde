int r;
int g;
int b;

int currColor;

int currRadius;

void setup() 
{
  size(800, 800);
  r = 0;
  g = 0;
  b = 0;
  currColor = 0; //red
  currRadius = 50;
}

void draw() 
{
  colorMode(RGB);
  background(r, g, b);
  
  fill(255, 0, 0);
  noStroke();
  colorMode(HSB, 360, 100, 100);
  fill(currColor, 100, 100);
  currColor++;
  currColor %= 361;
  currRadius = (int)map(mouseY, 0, height, 50, 500);
  ellipse(mouseX, mouseY, currRadius, 50);
}

void keyPressed()
{
  if(key == 'r')
  {
    r = (int)random(0, 256);
    g = (int)random(0, 256);
    b = (int)random(0, 256);
  }
}
