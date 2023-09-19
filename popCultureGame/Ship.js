class Ship
{
  constructor()
  {
    this.x = width/2;
    this.y = height - 10;
    this.wid = 60;
    this.hgt = 10;
    this.xdir = 0;
  }
  
  show()
  {
    fill(0, 255, 0);
    noStroke();
    rect(this.x, this.y, this.wid, this.hgt);
    rect(this.x + 20, this.y - 10, 20, 10);
  }
  
  move()
  {
    this.x += this.xdir * 7;
  }
  
  setDir(dir)
  {
    this.xdir = dir;
  }
  
}
