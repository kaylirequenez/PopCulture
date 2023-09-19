class Alien
{
  constructor()
  {
    this.x = x;
    this.y = y;
    this.w = 38;
    this.h = 26;
    this.alive = true;
    this.imgA = imgA;
    this.imgB = imgB;
    this.currentImg = 'A';
    this.pts = pointValue;
    this.radius = 20;
    this.xdir = 1;
  }
  
  show()
  {
    if(this.alive)
    {
      image(this.imgA, this.x, this.y, this.w, this.h);
      //if(this.currentImg === 'A')
      //{
      //  image(this.imgA, this.x, this.y, this.w, this.h);
      //}
      
    }
  }
  
  move()
  {
    
  }
}
