class Player
{
  constructor(coin, tree, person1, person2, electricCar, gasCar, cupPlastic, cupMetal, beforeSnapping, afterSnapping)
  {
    this.s = -1;
    this.coin = coin;
    this.tree = tree;
    this.person1 = person1;
    this.person2 = person2;
    this.electricCar = electricCar;
    this.gasCar = gasCar;
    this.cupPlastic = cupPlastic;
    this.cupMetal = cupMetal;
    this.beforeSnapping = beforeSnapping;
    this.afterSnapping = afterSnapping;
    this.strings = [
    'Remove plastic straws.',
    'Remove all kinds of plastic.',
    'Transition to electric vehicles.',
    'Plant a tree',
    'Wipe out half of the human population.'
    ];
    
    this.coins = 50;
    this.trees = [];
    let k = 0;
    for(let i = 0; i < 10; i++)
    {
      if(i < 5)
      {
        this.trees[i] = new Tree(width/2 - width/2.95 + i * 55, this.tree, this.coin, 1);
      }
      else if(i < 9)
      {
        this.trees[i] = new Tree(width/2 - width/2.95 + k * 55, this.tree, this.coin, 2);
        k++;
      }
      else
      {
        this.trees[i] = new Tree(width/2 - width/2.95 + 2 * 55, this.tree, this.coin, 3);
      }
    }
    this.buttons = [];
    this.finished = false;
    this.totButtons = 5;
    this.totShown = 5;
    this.buttonCoins = [10, 20, 30, 40, 50];
    this.noCoins = false;
    for(let i = 0; i < this.totButtons; i++)
    {
      this.buttons[i] = new Button(this.buttonCoins[i], 28, 63 + i * 35, this.strings[i]);
      this.buttons[i].hide();
      this.buttons[i].button.mouseClicked(function()
      {
        if(player.coins >= player.buttonCoins[i])
        {
          player.noCoins = false;
          if(i == 0)
          {
            player.removeStraw = true;
          }
          if(i == 1)
          {
            player.removePlastic = true;
          }
          if(i == 2)
          {
            player.removeGas = true;
          }
          if(i == 4)
          {
            player.removePopulation = true;
          }
          if(i <= 3)
          {
            let rows = i + 1;
            for(let j = 0; j < aliens.length; j++)
            {
              if(rows >= aliens[j].rows)
              {
                aliens[j].rowUp(aliens[j].rows);
                aliens[j].setRows(0);
              }
              else
              {
                aliens[j].rowUp(rows);
                aliens[j].setRows(aliens[j].rows - rows);
              }
            }
          }
          if(i >= 3)
          {
            if(i == 4)
            {
              player.buttons[i].remove(i);
            }
            else 
            {
              player.addTree();
              if(player.totShown == 10)
              {
                player.buttons[i].remove(i);
              }
            }
          }
          player.coins -= player.buttonCoins[i];
        }
        else
        {
          player.noCoins = true;
        }
      });
    }
    
    this.buttonsShowing = false;
    this.button = createButton("Use Coins");
    this.button.position(20, 35);
    this.resume = createButton("Resume");
    this.resume.position(250, 250);
    this.resume.hide();
    this.clicked = false;
    this.added = false;
    this.removePlastic = false;
    this.removeGas = false;
    this.removePopulation = false;
    this.hidePerson = false;
    this.recorded = false;
    this.slow = false;
  }

  showImages()
  {
    image(this.person1, width/2 + width/4.6, height - 110, 200, 200);
    if(!this.removeStraw)
    {
      image(this.cupPlastic, width/2 + width/4, height - 100, 100, 100);
    }
    else if(!this.removePlastic)
    {
      image(this.cupMetal, width/2 + width/4, height - 100, 100, 100);
    }
    if(!this.removeGas)
    {
      image(this.gasCar, width/2 - width/19, height - 90, 180, 180);
    }
    else
    {
      image(this.electricCar, width/2 - width/19, height - 80, 160, 180);
    }
    if(!this.hidePerson)
    {
      image(this.person2, width/2 + width/7, height - 170, 150, 150);
    }
    if(this.removePopulation) 
    {
      //image(this.beforeSnapping, width/2 + 80, height/2 - 150, 500, 500);
      if(!this.recorded)
      {
        this.s = second();
        this.recorded = true;
      }
      else if(this.s >= 58)
      {
        if(second() >= 58 || second() <= 59)
        {
          image(this.beforeSnapping, width/2 + 80, height/2 - 150, 500, 500);
        }
        else if(second() >= 59 || second() <= 2)
        {
          image(this.afterSnapping, width/2 + 80, height/2 - 150, 500, 500);
        }
        if(second() == 2)
        {
          this.removePopulation = false;
          this.hidePerson = true;
          this.slow = true;
        }
      }
      else if(this.s >= 57)
      {
        if(second() >= 57 && second() <= 58)
        {
          image(this.beforeSnapping, width/2 + 80, height/2 - 150, 500, 500);
        }
        else if(second() >= 58 || second() <= 1)
        {
          image(this.afterSnapping, width/2 + 80, height/2 - 150, 500, 500);
        }
        if(second() == 1)
        {
          this.removePopulation = false;
          this.hidePerson = true;
          this.slow = true;
        }
      }
      else
      {
        if(second() >= this.s && second() <= this.s + 1)
        {
          image(this.beforeSnapping, width/2 + 80, height/2 - 150, 500, 500);
        }
        else if(second() >= this.s + 1 && second() <= this.s + 3)
        {
          image(this.afterSnapping, width/2 + 80, height/2 - 150, 500, 500);
        }
        if(second() == this.s + 3)
        {
          this.removePopulation = false;
          this.hidePerson = true;
          this.slow = true;
        }
      }
    }
  }
  addd(coins)
  {
    this.coins += coins;
  }
  
  setSlow()
  {
    this.slow = false;
  }
  
  substract(coins)
  {
    this.coins -= coins;
  }
  
  addTree()
  {
    this.totShown++;
  }
  
  showTrees()
  {
    for(let i = 0; i < this.totShown; i++)
    {
      this.trees[i].show();
      this.trees[i].showCoin();
    }
    
    if((second() == 4 || second() == 34) && !this.added)
    {
        this.addCoins();
    }
    if(second() == 5 || second() == 35)
    {
      this.added = false;
    }
  }
  
  addCoins()
  {
    for(let i = 0; i < this.totShown; i++)
    {
      this.coins+=2;
    }
    this.added = true;
  }
  
  showButtons()
  {
    if(this.clicked)
    {
      this.button.hide();
      fill(255);
      rect(10, 10, 310, 270, 5);
      fill(51);
      stroke(51);
      strokeWeight(0.5);
      textAlign(LEFT, TOP);
      textSize(15);
      text(this.coins, 48, 25);
      image(this.coin, 30, 32, 30, 30);
      for(let i = this.totButtons - 1; i >= 0; i--)
      {
        if(!this.buttons[i].rem)
        {
          this.buttons[i].show();
        }
      }
      this.resume.show();
      if(this.noCoins)
      {
        stroke(255, 0, 0);
        strokeWeight(5);
        noFill();
        circle(30, 32, 30, 30);
      }
    }
    else
    {
      fill(255);
      stroke(255);
      strokeWeight(0.5);
      textAlign(LEFT, TOP);
      textSize(15);
      text(this.coins, 40, 13);
      this.button.show();
      image(this.coin, 23, 17, 30, 30);
      for(let i = 0; i < this.totButtons; i++)
      {
        this.buttons[i].hide();
      }
      this.resume.hide();
    }
  }
  
  hideButtons()
  {
    for(let i = 0; i < this.totButtons; i++)
    {
      this.buttons[i].hide();
    }
    this.resume.hide();
    this.button.hide();
  }
  
  hideButton()
  {
    this.button.hide();
  }
  
  setClicked(clicked)
  {
    this.clicked = clicked;
  }
  
  reset()
  {
    this.s = -1;
    this.coins = 50;
    this.finished = false;
    this.totShown = 5;
    this.noCoins = false;
    this.buttonsShowing = false;
    this.clicked = false;
    this.added = false;
    this.removePlastic = false;
    this.removeGas = false;
    this.removePopulation = false;
    this.hidePerson = false;
    this.recorded = false;
    this.slow = false;
    this.resume.hide();
    this.button.hide();
    for(let i = 0; i < this.totButtons; i++)
    {
      this.buttons[i].reset();
      this.buttons[i].hide();
    }
  }
}
