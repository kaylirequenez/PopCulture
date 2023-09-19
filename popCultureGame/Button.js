class Button
{
  constructor(coins)
  {
    this.button = createButton(coins + "coins");
    this.coins = coins;
  }
  
  show()
  {
    this.button.show();
  }
  
  hide()
  {
    this.button.hide();
  }
  
  coins()
  {
    return this.coins;
  }
}
