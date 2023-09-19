class Player
{
  float x, y;
  float angle;
  float hgt;
  float wid;
  float rotationSpeed;
  
  boolean left, right, forward;
  
  Player(float xp, float yp)
  {
    x = xp;
    y = yp;
    angle = 0;
    hgt = 50;
    wid = hgt * 3/4;
    rotationSpeed = 3;
  }

  void draw()
  {
    pushMatrix(); //save current drawing state
    translate(x, y);
    rotate(radians(angle));
    fill(0, 255, 0);
    noStroke();
    triangle(0, -hgt, wid/2, 0, -wid/2, 0);
    popMatrix();
  }
  
  void update()
  {
    if(left)
    {
      angle -= rotationSpeed;
    }
    if(right)
    {
      angle += rotationSpeed;
    }
  }
}
