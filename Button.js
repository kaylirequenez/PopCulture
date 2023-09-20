class Button
{
  constructor(coins, x, y, string)
  {
    this.coins = coins;
    this.x = x;
    this.y = y;
    this.button = createButton(this.coins);
    this.rem = false;
    this.string = string;
  }
  
  show()
  {
    if(!this.rem)
    {
      this.button.position(this.x, this.y);
      this.button.show();
      fill(51);
      stroke(51);
      strokeWeight(0.5);
      textSize(12);
      textAlign(LEFT, TOP);
      textFont('Helvetica');
      text(this.string, this.x + 25, this.y + 7);
    }
  }
  
  remove(index)
  {
    this.button.hide();
    this.string = "";
    this.rem = true;
  }
  
  hide()
  {
    this.button.hide();
  }
  
  reset()
  {
    this.rem = false;
    this.hide();
  }
}
