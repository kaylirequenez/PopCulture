function setup()
{
  
}

function draw()
{
  createCanvas(windowWidth, windowHeight);
  background(51);
  let arr = [0.3, 0.3, 0.4];
  let arr2 = ['celebrities', 'others', 'logic'];
  statistics(width/2, height/2, 200, 200, arr, arr2);
}
