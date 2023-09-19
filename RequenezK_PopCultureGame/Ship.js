class Ship
{
  constructor()
  {
    this.x = width/2;
    this.y = height - 300;
    this.wid = 60;
    this.hgt = 10;
    this.xdir = 0;
    this.space = false;
    this.bullets = 4;
    this.reload = false;
    this.s = -1;
  }
  
  show()
  {
    if(!this.reload && this.bullets == 0)
    {
      this.reload = true;
    }
    fill(255, 0, 0);
    noStroke();
    rect(this.x - this.wid/2, this.y, this.wid, this.hgt);
    rect(this.x + 20 - this.wid/2, this.y - 10, 20, 10);
    if(this.reload)
    {
      if(this.bullets == 0)
      {
        fill(255);
        noStroke();
        rect(this.x - this.wid/2, this.y, this.wid, this.hgt);
        rect(this.x + 20 - this.wid/2, this.y - 10, 20, 10);
        if(second() == (this.s + 1)%60 && this.space)
        {
          this.bullets = 1;
          this.s = second();
        }
      }
      else if(this.bullets == 1)
      {
        fill(255);
        noStroke();
        rect(this.x + 20 - this.wid/2, this.y, this.wid - 20, this.hgt);
        rect(this.x + 20 - this.wid/2, this.y - 10, 20, 10);
        if(second() == (this.s + 1)%60 && this.space)
        {
          this.bullets = 2;
          this.s = second();
        }
      }
      else if(this.bullets == 2)
      {
        fill(255);
        noStroke();
        rect(this.x + 30 - this.wid/2, this.y, this.wid - 30, this.hgt);
        rect(this.x + 30 - this.wid/2, this.y - 10, 10, 10);
        if(second() == (this.s + 1)%60 && this.space)
        {
          this.bullets = 3;
          this.s = second();
        }
      }
      else if(this.bullets == 3)
      {
        fill(255);
        noStroke();
        rect(this.x + 40 - this.wid/2, this.y, this.wid - 40, this.hgt);
        if(second() == (this.s + 1)%60 && this.space)
        {
          this.bullets = 4;
          this.reload = false;
        }
      }
      if(second()%2 == 0)
      {
        this.s = second();
        stroke(51);
        strokeWeight(0.5);
        fill(51);
        textAlign(LEFT, TOP);
        textSize(9);         
        text('Hold Spacebar', this.x - this.wid/2, this.y + 1);
      }
    }
  }
  
  move()
  {
    this.x += this.xdir * 7;
  }
  
  setDir(dir)
  {
    this.xdir = dir;
  } 
  
  reset()
  {
    this.x = width/2;
    this.y = height - 300;
    this.wid = 60;
    this.hgt = 10;
    this.xdir = 0;
    this.space = false;
    this.bullets = 4;
    this.reload = false;
    this.s = -1;
  }
}
