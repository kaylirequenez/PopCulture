class Tree
{
  constructor(x, tree, coin, type)
  {
    this.x = x;
    this.wid = 55;
    this.hgt = 60;
    this.len = 25;
    this.add = false;
    this.tree = tree;
    this.coin = coin;
    this.type = type;
  }
  
  show()
  {
    if(this.type == 1)
    {
      image(this.tree, this.x, height - 30, this.wid, this.hgt);
    }
    else if(this.type == 2)
    {
      image(this.tree, this.x + 28, height - 80, this.wid, this.hgt);
    }
    else
    {
      image(this.tree, this.x + 3, height - 130, this.wid, this.hgt);
    }
    //fill(0, 255, 0);
    //rect(this.x, height - 40, this.wid, this.hgt);
  }
  
  showCoin()
  {
    if(second() > 0 && second() < 4 || second() > 30 && second() < 34)
    {
      imageMode(LEFT, CENTER);
      if(this.type == 1)
      {
        image(this.coin, this.x, height - this.hgt/1.5, this.len, this.len);
      }
      else if(this.type == 2)
      {
        image(this.coin, this.x + 26, height - this.hgt/1.5 - 50, this.len, this.len);
      }
      else
      {
        image(this.coin, this.x + 1, height - this.hgt/1.5 - 100, this.len, this.len);
      }
      this.add = true;
    }
  }
  
  setAdd()
  {
    this.add = false;
  }
}
