class Player
{
  constructor()
  {
    this.s = second();
    this.coins = 50;
    this.trees = 5;
    this.straw = true;
    this.car = true;
    this.cup = true;
    this.solar = false;
    this.friend = true;
    this.objects = [];
    append(objects, this.straw);
    append(objects, this.car);
    append(objects, this.cup);
    append(objects, this.solar);
    append(objects, this.friend);
    //this.water
  }
  
  addCoins()
  {
    if(this.s == 59)
    {
      coins += this.trees * 2;
    }
  }
  
  addd(coins)
  {
    this.coins += coins;
  }
  
  substract(coins, num)
  {
    this.coins -= coins;
    if(objects[num])
    {
      objects[num] = false;
    }
    else
    {
      objects[num] = true;
    }
    
  }
}
