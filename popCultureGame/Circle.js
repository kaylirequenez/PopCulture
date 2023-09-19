function Circ(x, y, d, lines)
{
  angleMode(DEGREES);
  
  this.x = x;
  this.y = y;
  this.d = d;
  this.r = this.d/2;
  this.lines = lines;
  this.l = (int)(this.lines/2);
  this.angle = 360/lines;
  this.currAngle = 90;
  
  this.show = function()
  {
    circle(this.x, this.y, this.d);
    if(this.lines % 2 == 0)
    {
      line(this.x, this.y + sin(this.currAngle) * this.r, this.x, this.y - sin(this.currAngle) * this.r);
      this.l -= 1;
    }
    else
    {
      line(this.x, this.y, this.x, this.y - sin(this.currAngle) * this.r);
    }
    this.currAngle -= this.angle;
    for(let i = 0; i < this.l; i++)
    {
      line(this.x, this.y, this.x - cos(this.currAngle) * this.r, this.y - sin(this.currAngle) * this.r);
      line(this.x, this.y, this.x + cos(this.currAngle) * this.r, this.y - sin(this.currAngle) * this.r);
      this.currAngle -= this.angle;
    }
  }
}
 
