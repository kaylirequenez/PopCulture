function results()
{
  this.x = 0;
  this.y = 0;
  stroke(251, 255, 0);
  strokeWeight(10);
  fill(0, 255, 0);
  textSize(80);
  textAlign(CENTER, CENTER);
  if(destroyEarth >= saveEarth)
  {
    text('YOU WILL DESTROY THE EARTH', width/2, 10);
  }
  else
  {
    text('YOU WILL SAVE THE EARTH', width/2, 10);
  }
  
  //users
  textAlign(LEFT, TOP);
  textSize(15);
  stroke(255);
  strokeWeight(1);
  if(sd.users == 1)
  {
    text('You are the 1st person to take this survey.', 10, this.y + 85);
  }
  else if(sd.users == 2)
  {
    text('You are the 2nd person to take this survey.', 10, this.y + 85);
  }
  else if(sd.users == 3)
  {
    text('You are the 3rd person to take this survey.', 10, this.y + 85);
  }
  else
  {
    text('You are the ' + sd.users + 'th person to take this survey.', 10, this.y + 85);
  }
  
  //Actions influenced by...
  let why = sd.celebs + sd.others + sd.help;
  let arr1 = [sd.celebs/why, sd.others/why, sd.help/why];
  let arr2 = ['celebrities', 'others', 'logic'];
  statistics(10, this.y + 140, 200, 200, arr1, arr2);
  textAlign(LEFT, TOP);
  textSize(30);
  stroke(251, 255, 0);
  strokeWeight(2);
  fill(0, 255, 0);
  text('Actions influenced by... ', 105);
  textAlign(LEFT, TOP);
  textSize(15);
  stroke(255);
  strokeWeight(1);
  if(celebs + others > userData.help)
  {
    text('Most of your actions are influenced by others instead of logic.', 10, this.y + 345);
    destroyEarth++;
  }
  else
  {
    text('Most of your actions are influenced by logic instead of others.', 10, this.y + 345);
    saveEarth++;
  }
  
  //People who do ______ of their service for hours
  let avgComm = round(sd.commService/sd.totService * 100);
  let userComm = round(commService/totService * 100);
  arr1 = [sd.comm1/sd.users, (sd.comm50 + sd.comm75)/sd.users, (sd.comm25 + sd.comml25 - sd.comm0)/sd.users, sd.comm0/sd.users];
  arr2 = ['all', 'at least half', 'less than half', 'none'];
  statistics(10, this.y + 400, 200, 200, arr1, arr2);
  textAlign(LEFT, TOP);
  textSize(30);
  stroke(251, 255, 0);
  strokeWeight(2);
  fill(0, 255, 0);
  text('People who do ______ of their service for hours', 10, this.y + 365);
  textAlign(LEFT, TOP);
  textSize(15);
  stroke(255);
  strokeWeight(1);
  text('The average person does ' + avgComm + '% of their service for hours, and you do ' + userComm + '%.', 10, this.y + 605);
  if(commService >= totService/2)
  {
    destroyEarth++;
  }
  else
  {
    saveEarth++;
  }
  if(avgComm <= userComm)
  {
    destroyEarth++;
  }
  else
  {
    saveEarth++;
  }
  
  //People who do community service because it's... 
  arr1 = [sd.forHours/sd.users, sd.forGood/sd.users];
  arr2 = ['socially acceptable', 'helpful'];
  statistics(10, this.y + 660, 200, 200, arr1, arr2);
  textAlign(LEFT, TOP);
  textSize(30);
  stroke(251, 255, 0);
  strokeWeight(2);
  fill(0, 255, 0);
  text('People who do community service because it\'s... ', 10, this.y + 625);
  textAlign(LEFT, TOP);
  textSize(15);
  stroke(255);
  strokeWeight(1);
  if(userData.forGood == 1)
  {
    text('You are part of the ' + round(arr1[1] * 100) + '% of individuals who do community service because it\'s helpful.', 10, this.y + 865);
    saveEarth++;
  }
  else
  {
    text('You are part of the ' + round(arr1[0] * 100) + '% of individuals who do community service because it\'s socially acceptable.', 10, this.y + 865);
    destroyEarth++;
  }
  
  //People who do nothing but post for ______ of the issues they address
  arr1 = [sd.onlyPostedAll/sd.users, sd.onlyPostedHalf/sd.users, (sd.users - sd.onlyPostedAll - sd.onlyPostedHalf)/sd.users];
  arr2 = ['all', 'at least half', 'less than half'];
  statistics(10, this.y + 915, 200, 200, arr1, arr2);
  textAlign(LEFT, TOP);
  textSize(30);
  stroke(251, 255, 0);
  strokeWeight(2);
  fill(0, 255, 0);
  text('People who do nothing but post for ______ of the issues they address', 10, this.y + 885);
  textAlign(LEFT, TOP);
  textSize(15);
  stroke(255);
  strokeWeight(1);
  text('The average person only posts for ' + round(sd.onlyPosted/sd.totIssues * 100) + '% of the issues they address, and you post for' + round(posts/totIssues * 100) + '%.', 10, this.y + 1115);
  if(round(posts/totIssues * 100) >= round(sd.onlyPosted/sd.totIssues * 100))
  {
    destroyEarth++;
  }
  else
  {
    saveEarth++;
  }
  if(round(posts/totIssues * 100) >= totIssues/2)
  {
    destroyEarth++;
  }
  else
  {
    saveEarth++;
  }
  
  //People who _____ to help the Black Lives Matter Movement
  arr1 = [sd.jBOT/sd.users, sd.postBOT/sd.users, sd.moreBOT/sd.users];
  arr2 = ['only posted on Blackout Tuesday', 'made additional posts', 'did more than posting'];
  statistics(10, this.y + 1170, 200, 200, arr1, arr2);
  textAlign(LEFT, TOP);
  textSize(30);
  stroke(251, 255, 0);
  strokeWeight(2);
  fill(0, 255, 0);
  text('People who _____ to help the Black Lives Matter Movement', 10, this.y + 1135);
  textAlign(LEFT, TOP);
  textSize(15);
  stroke(255);
  strokeWeight(1);
  if(userData.jBOT == 1)
  {
    text('You are part of the ' + round(arr1[0] * 100) + '% of individuals who only posted on Blackout Tuesday to help the Black Lives Matter Movement.', 10, this.y + 1375);
    destroyEarth += 2;
  }
  else if(userData.postBOT == 1)
  {
    text('You are part of the ' + round(arr1[1] * 100) + '% of individuals who made additional posts to help the Black Lives Matter Movement.', 10, this.y + 1375);
    destroyEarth++;
  }
  else
  {
    text('You are part of the ' + round(arr1[2] * 100) + '% of individuals who did more than posting to help the Black Lives Matter Movement.', 10, this.y + 1375);
    saveEarth++;
  }
  
  //People who _____ to help the environment
  arr1 = [sd.jStraw/sd.users, sd.postStraw/sd.users, sd.moreStraw/sd.users];
  arr2 = ['only transitioned to using a metal/paper straws', 'also made posts', 'did more than posting'];
  statistics(10, this.y + 1330, 200, 200, arr1, arr2);
  textAlign(LEFT, TOP);
  textSize(30);
  stroke(251, 255, 0);
  strokeWeight(2);
  fill(0, 255, 0);
  text('People who _____ to help the environment', 10, this.y + 1395);
  textAlign(LEFT, TOP);
  textSize(15);
  stroke(255);
  strokeWeight(1);
  if(userData.jStraw == 1)
  {
    text('You are part of the ' + round(arr1[0] * 100) + '% of individuals who only posted on Blackout Tuesday to help the Black Lives Matter Movement.', 10, this.y + 1535);
    destroyEarth += 2;
  }
  else if(userData.postStraw == 1)
  {
    text('You are part of the ' + round(arr1[1] * 100) + '% of individuals who made additional posts to help the Black Lives Matter Movement.', 10, this.y + 1535);
    destroyEarth++;
  }
  else
  {
    text('You are part of the ' + round(arr1[2] * 100) + '% of individuals who did more than posting to help the Black Lives Matter Movement.', 10, this.y + 1535);
    saveEarth++;
  }
  
  game.show();
  
  game.mouseClicked(function()
  {
    state = 'start';
  });
}
