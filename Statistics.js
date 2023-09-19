function statistics(x, y, w, h, arr, arr2)
{
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.arr = arr;
  this.arr2 = arr2;
  this.currAngle = 0;
  this.l = arr.length;
  this.currColor = [255, 0, 0];
  this.spacing = this.h/this.l;
  
  fill(255);
  rect(this.x, this.y, this.w, this.h, 5);
  
  angleMode(DEGREES);
  
  for(let i = 0; i < this.l; i++)
  {
    if(i == 1)
    {
       this.currColor = [255, 255, 0];
    }
    else if(i == 2)
    {
       this.currColor = [0, 255, 0];
    }
    else if(i == 3)
    {
       this.currColor = [0, 255, 255];
    }
    else if(i == 4)
    {
       this.currColor = [0, 0, 255];
    }
    else if(i == 5)
    {
       this.currColor = [255, 0, 255];
    }
    fill(this.currColor[0], this.currColor[1], this.currColor[2]);
    noStroke();
    arc(this.x + this.w *3/2 + 5, this.y + this.h/2, this.w, this.h, this.currAngle, this.currAngle + arr[i] * 360, PIE);
    this.currAngle += arr[i] * 360;
    
    rect(this.x + 5, 7.5 + this.y + i * this.spacing, 30, 30, 5);
    textAlign(LEFT, TOP);
    noFill();
    stroke(51);
    strokeWeight(1);
    textSize(12);
    text(round(this.arr[i] * 100) + '%', this.x + 8, 18 + this.y + i * this.spacing);
    
    text(this.arr2[i], this.x + 40, 18.5 + this.y + i * this.spacing);
  }
  
}
