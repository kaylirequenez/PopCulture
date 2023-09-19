class Alien
{
  constructor(x, y, img, img2)
  {
    this.x = x;
    this.y = y;
    this.w = 80;
    this.h = 68;
    this.alive = true;
    this.imgA = img;
    this.imgB = img2;
    this.currentImg = 'A';
    this.radius = 20;
    this.xdir = 1;
    this.rows = 0;
  }
  
  show()
  {
    if(this.alive)
    {
      if(second()%2 == 0)
      {
        this.currentImg = 'A';
        image(this.imgA, this.x, this.y, this.w, this.h); 
      }
      else
      {
        this.currentImg = 'B';
        image(this.imgB, this.x, this.y, this.w, this.h); 
      }
    }
  }
  
  slowDown()
  {
    this.xdir -= this.xdir * 0.25;
  }
  
  speedUp(round)
  {
    this.xdir += this.xdir * round * 0.15;
  }
  
  move()
  {
    this.x += this.xdir * 2;
  }
  
  shiftDown()
  {
    this.xdir = -this.xdir;
    this.y += this.h;
    this.rows++;
  }
  
  shiftUp(edge)
  {
    if(edge)
    {
      this.xdir = -this.xdir;
    }
    this.y -= this.h;
  }
  
  rowUp(num)
  {
    this.y -= num * this.h;
    this.rows--;
  }
  
  setRows(num)
  {
    this.rows = num;
  }
}
