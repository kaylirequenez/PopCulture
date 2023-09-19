let mainDiv;

//Dealing with points
let totP; 
let celebs; 
let others;
let help;
let totService;
let totIssues;
let commService;
let posted;

//Dealing with other response data 
let BOT;
let onlyBOT;
let onlyBOTAndPost;
let straw;
let onlyStraw;
let onlyStrawAndPost;
let onlyPosted;
let onlyPostArr;
let posts;
let commSerReason;

//Dealing with questions typeA
let questions; //array of all questions
let currQ; //index of currentQ in questions array

//Dealing with questions typeB
let questionsB;

//Dealing with display of question
let q; 
let mainQ;
let intro;

//Dealing with buttons
let answr; //yes or no buttons
let mainAnswr; //all choices buttons
let button; //"next" button
let b2; //"SurveyPlay" button

//dealing with arrays of answers
let checkboxes;
let selected;

//Dealing with index
let aIndex;

//local data
let persons;
let avgCeleb;
let avgOther;
let avgIntra;
let avgInter;

let br;
let center;

let userData;
let sd;

let newUser;

let state;

let destroyEarth;

let saveEarth;

let game;

function setup() 
{
  state = 'survey';
  if(state == 'survey')
  {
    noCanvas();
    
    mainDiv = createDiv();
    mainDiv.id("mainDiv");
    
    center = createDiv();
    center.id("center");
    center.parent(mainDiv);
    
    totP = 0;
    celebs = 0;
    others = 0;
    help = 0;
    totService = 0;
    totIssues = 5;
    commService = 0;
    posted = 0;
    
    BOT = false;
    onlyBOT = false;
    onlyBOTAndPost = false;
    straw = true;
    onlyStraw = false;
    onlyStrawAndPost = false;
    onlyPosted = false;
    onlyPostArr = [];
    posts = 0;
    commSerReason = false;
    
    questions = [];
    currQ = 0;
    
    questionsB = [];
    
    q = createP("");
    q.parent(mainDiv);
    q.id("yesno");
    mainQ = createP("");
    mainQ.parent(mainDiv);
    intro = createP("");
    intro.parent(center);
    
    answr = createRadio("yesno"); 
    answr.option("Yes");
    answr.option("No");
    answr.hide();
    mainAnswr = createRadio("question");
    br = createElement("br");
    br.parent(mainAnswr);
    b2 = createButton("Survey");
    b2.parent(center);
    button = createButton("Next");
    button.hide();
    
    
    checkboxes = [];
    selected = [];
    
    aIndex = 0;
    
    userData = {};
    sd = {};
    
    newUser = true;
    
    game = createButton('Play Game', width - 20, this.y + 1555);
    game.hide();
   
    let q0 = new qTypeA("Do you believe in anthropogenic(human-caused) global warming?", 
    "Yes, because I know of others who believe in it(friends, family, those on social media, etc.) and/or believing in it is socially acceptable.",
    "Yes, because celebrities I like believe in it and/or encourage me to follow.", 
    "Yes, because I have done research that proves it to be true.", 
    "Yes, because I believe humans are capable of doing this.",
    "No, because I know of others who don't believe in it(friends, family, those on social media, etc.).",
    "No, because celebrities I like don't believe in it and/or encourage me to follow.",  
    "No, because I have done research that proves it to be false.", 
    "No, because I don't believe humans are capable of doing this.");
    
    let q1 = new qTypeA("Did you ever transition to using metal or paper straws?", 
    "Yes, because using them is trending and/or using them is socially acceptable.", 
    "Yes, because celebrities I like use them and/or encourage me to follow.", 
    "Yes, because I believe this can improve the environment.", 
    "Yes, because I prefer them over plastic straws or I never use straws.", 
    "No, because I know of others who still use plastic straws.", 
    "No, because celebrities I like still use plastic straws and/or encourage me to follow.", 
    "No, because I don't believe this can improve the environment and/or that plastic straws hurt the environment.", 
    "No, because I prefer plastic straws over them or I never use straws.");
    
    let q2 = new qTypeA("Do you own an electric or hybrid vehicle? If you don't own a vehicle, would you purchase an electric or hybrid vehicle rather than one powered by gas?", 
    "Yes, because I know of others who own them and/or doing so is socially acceptable.",  
    "Yes, because celebrities I like own them and/or encourage me to follow.",
    "Yes, because I believe this can improve the environment.", 
    "Yes, because I prefer them over those gas-powered vehicles.", 
    "No, because I know of others who own gas-powered vehicles and/or they are more common.",
    "No, because celebrities I like own gas-powered vehicles.",
    "No, because I don't believe this can improve the environment.",
    "No, because I prefer gas-powered vehicles over them."); 
    
    let q3 = new qTypeA("Do you often use public or non-mechanized transportation(bus, bike, foot, etc.)?", 
    "Yes, because I know of others who use it and/or doing so is socially acceptable.", 
    "Yes, because celebrities I like do so and/or encourage me to follow.", 
    "Yes, because I believe this can improve the environment.", 
    "Yes, because I prefer it over using my own mechanized vehicle or it is my only option.", 
    "No, because I know of others who only drive their own mechanized vehicles(cars, motorcycles, etc.) and/or doing so is socially acceptable.", 
    "No, because I celebrities I like have their own mechanized vehicle and/or encourage me to follow.", 
    "No, because I don't believe this can improve the environment.", 
    "No, because I prefer driving my own mechanized vehicle or it is my only option.");
    
    let q4 = new qTypeA("Do you use paper or reusable bags rather than plastic bags at the grocery store or elsewhere?", 
    "Yes, because I know of others who use them and/or doing so is socially acceptable.", 
    "Yes, because celebrities I like use them and/or encourage me to follow.", 
    "Yes, because I believe this can improve the environment.", 
    "Yes, because I prefer them over plastic bags.", 
    "No, because I know of others who use plastic bags and/or it is socially acceptable.", 
    "No, because celebrities I like use plastic bags and/or encourage me to follow.", 
    "No, because I don't believe this can improve the environment.", 
    "No, because I prefer plastic bags over them.");
    
    let q5 = new qTypeA("Did you post on social media for Blackout Tuesday, on June 2nd?", 
    "Yes, because I know of others who did so and/or it was socially acceptable.", 
    "Yes, because celebrities I like did so and/or encouraged me to follow.", 
    "Yes, because I believed doing so would bring progress for the BLM movement.", 
    "Yes, because I simply wanted to make a post.", 
    "No, because I knew of others who weren't doing so.", 
    "No, because celebrities I like weren't doing so and/or encouraged me to follow.", 
    "No, because I didn't believe that this would help the BLM movement.", 
    "No, because I didn't have an account to post on or I didn't know about Blackout Tuesday.");
    
    let q6 = new qTypeB("Which of the following have you done in support of BLM?", 
    ["I have made posts on social media, other than those I posted on Blackout Tuesday.",
      "I have gone to protests.",
      "I have signed petitions.",
      "I have donated money.",
      "I helped a particular community.",
      "None of the above."], 
      [1, 3, 3, 3, 3, 0]);
      
      let protested = ["Posted.", "Protested (not on social media).", "Signed petition.", "Donated.", "Helped a particular community.", "None of the above."];
      
    let q7 = new qTypeB("Which of the following have you done to minimize inequality?",
    protested,
    [2, 3, 3, 3, 3, 0]);
    
     let q8 = new qTypeB("Which of the following have you done to help the environment?",
    protested,
    [2, 3, 3, 3, 3, 0]);
    
     let q9 = new qTypeB("Which of the following have you done to minimize violence?",
    protested,
    [2, 3, 3, 3, 3, 0]);
    
    let q10 = new qTypeB("Which of the following have you done to help with COVID-19?",
    protested,
    [2, 3, 3, 3, 3, 0]);
    
    let q11 = new qTypeB("Why do you do community service? Choose the main reason.", 
    ["Because people expect me to and/or my friends do.",
      "Because I want to look good for colleges (or schools in general).",
      "Because I want to help out as much as I can through community service.",
      "Because I think it is fun.",
      "I do not."],
      [2, 2, 5, 4, 0]);
    
    append(questions, q0);
    append(questions, q1);
    append(questions, q2);
    append(questions, q3);
    append(questions, q4);
    append(questions, q5);
    append(questionsB, q6);
    append(questionsB, q7);
    append(questionsB, q8);
    append(questionsB, q9);
    append(questionsB, q10);
    append(questionsB, q11);
    
    checkCookie();
    
    intro.html("Will you destroy or save earth? <p> Click to take the survey and then play the game.");
    
    b2.mouseClicked(function()
    {
      intro.hide();
      intro.remove();
      b2.hide();
      b2.remove();
      loadQuestion(questions[currQ]);
    });
  }
  else
  {
    createCanvas(windowWidth - 20, windowHeight);
  }
}

function qTypeA(question, y1, y2, y3, y4, n1, n2, n3, n4)
{
  var q =
  {
    ask1: question,
    
    ask2: "Why or why not? Choose the main reason.",
    
    answrs: [
    [y1, n1],
    [y2, n2], 
    [y3, n3],
    [y4, n4],
    ],
    
    points: [2, 2, 5, 4],
  };
  return q;
}
  
function qTypeB(question, answers, points)
{
  var q = 
  {
    question: question,
    answers: answers,
    points: points,
  };
  
  return q;
}

function loadQuestion(question)
{
  q.html(question.ask1);
  answr.hide();
  answr.remove();
  answr = createRadio("yesno");
  answr.parent(mainDiv);
  answr.option("Yes");
  answr.option("No");
  answr.show();
  button.hide();
  answr.changed(function (){
    mainQ.remove();
    mainQ = createP(question.ask2);
    mainQ.parent(mainDiv);
    mainQ.show();
    
    mainAnswr.hide();
    mainAnswr.remove();
    mainAnswr = createRadio("question");
    mainAnswr.parent(mainDiv);
    br.parent(mainAnswr);
    mainAnswr.hide();
    
    button.hide();
    button.remove();
    
    checkYes(question);
  });
}

function loadQuestionB(question)
{
  q.html(question.question);
  mainQ.remove();
  button.hide();
  if(currQ < 11)
  {
    mainAnswr.remove("question");
    for(let i = 0; i < question.answers.length; i++)
    {
      let chk = createCheckbox(question.answers[i]);
      chk.parent(mainDiv);
      append(checkboxes, chk, i);
      checkboxes[i].show();
      checkboxes[i].changed(function()
      {
        console.log(question);
        if(checkboxes[i].checked())
        {
          button.remove();
          button = createButton("Next");
          button.parent(mainDiv);
          if(i == checkboxes.length - 1)
          {
            for(let i = 0; i < checkboxes.length - 1; i++)
              {
                checkboxes[i].checked(false);
              }
          }
          else
          {
            checkboxes[checkboxes.length - 1].checked(false);
          }
          button.mouseClicked(function()
          {
            if(currQ == 6 || currQ == 8)
            {
               if(!checkboxes[checkboxes.length - 1].checked())
               {
                 if(onlyBOT && currQ == 6)
                 {
                   onlyBOT = false;
                 }
                 if(onlyStraw && currQ == 8)
                 {
                   onlyStraw = false;
                 }
               }
               if(checkboxes[0].checked())
               {
                 let i = 1;
                 while(i < checkboxes.length - 1)
                 {
                   if(checkboxes[i].checked())
                   {
                     if(onlyBOTAndPost && currQ == 6)
                     {
                       onlyBOTAndPost = false;
                     }
                     if(onlyStrawAndPost && currQ == 8)
                     {
                       onlyStrawAndPost = false;
                     }
                   }
                   i++;
                 }
               }
               else
               {
                 onlyBOTAndPost = false;
               }
            }
            if(currQ >= 6 && question.points.length > 1 && currQ != 11)
            {
              if(checkboxes[checkboxes.length - 1].checked())
              {
                totIssues--;
              }
              if(checkboxes[0].checked())
              {
                posted++;
                let i = 1;
                onlyPosted = true;
                while(i < checkboxes.length - 1 && onlyPosted)
                {
                  if(checkboxes[i].checked())
                  {
                    onlyPosted = false;
                  }
                  i++;
                }
              }
              else
              {
                onlyPosted = false;
              }
              append(onlyPostArr, onlyPosted);
            }
            for(let i = 0; i < checkboxes.length - 1; i++)
              {
                if(checkboxes[i].checked())
                {
                  if(question.points.length > 1)
                  {
                    totP += question.points[i];
                    if(currQ > 6)
                    {
                      totService++;
                    }
                  }
                  else
                  {
                    if(currQ > 6)
                    {
                      commService++;
                      totP -= 1;
                    }
                  }
                }  
              }
            if(question.points.length == 1 || currQ == 6 || checkboxes[checkboxes.length - 1].checked())
            {
              for(let i = checkboxes.length - 1; i >=0; i--)
              {
                checkboxes[i].hide();
                checkboxes[i].remove();
              }
              checkboxes = [];
              next(question);
            }
            else
            {
              selected = [];
              for(let i = checkboxes.length - 1; i >=0; i--)
              {
                if(checkboxes[i].checked())
                {
                  append(selected, question.answers[i]);
                }
                checkboxes[i].remove();
              }
              checkboxes = [];
              reverse(selected);
              append(selected, "None of the above.");
              let p2 = new qTypeB("Which of the those did you do for community service hours?", selected, [0]);
              loadQuestionB(p2);
            }
          });
        }
        let k = 0;
        while(!checkboxes[k].checked())
        {
          if(k == checkboxes.length - 1)
          {
            button.remove();
            break;
          }
          k++;
        }
      });
    }
  }
  //11
  else
  {
    q.html(question.question);
    for(let i = 0; i < question.answers.length; i++)
    {
      mainAnswr.option(question.answers[i]);
      br = createElement("br");
      br.parent(mainAnswr);
      mainAnswr.parent(mainDiv);
    }
    mainAnswr.show();
    mainAnswr.changed(function()
    {
      button.hide();
      button.remove();
      button = createButton("Submit");
      button.parent(mainDiv);
      button.show();
      button.mouseClicked(function()
      {
        for(let i = 0; i < question.answers.length; i++)
        {
          if(mainAnswr.value() == question.answers[i])
          {
            totP += question.points[i];
          }
        }
        if(currQ == 11)
        {
          if(mainAnswr.value() == question.answers[0] || mainAnswr.value() == question.answers[1])
          {
            others++;
            commSerReason = true;
          }
          if(mainAnswr.value() == question.answers[2])
          {
            help++;
          }
        }
        mainAnswr.hide();
        mainAnswr.remove();
        q.hide();
        q.html("SEE RESULTS BELOW");
        button.remove();
        saveData();
      });
    });
  }
  console.log("total points: " + totP);
  console.log("celebs: " + celebs);
  console.log("others: " + others);
  console.log("help: " + help);
  console.log("totService: " + totService);
  console.log("commService: " + commService);
  console.log("posted: " + posted);
  console.log("onlyBOT: " + onlyBOT);
  console.log("onlyBOTAndPost: " + onlyBOTAndPost);
  console.log("onlyStraw: " + onlyStraw);
  console.log("onlyStrawAndPost: " + onlyStrawAndPost);
  console.log("onlyPosted: " + onlyPosted);
  console.log("onlyPostArr: " + onlyPostArr);
  console.log("commSerReason: " + commSerReason);
}

function checkYes(question)
{
  for(let i = 0; i < question.answrs.length; i++)
  {
    if(answr.value() == "Yes") 
   {
     mainAnswr.option(question.answrs[i][0]);
     br = createElement("br");
     br.parent(mainAnswr);
   }
   else
   {
     mainAnswr.option(question.answrs[i][1]);
     br = createElement("br");
     br.parent(mainAnswr);
   } 
  }
  
  mainAnswr.show();
  mainAnswr.changed(function()
  {
    button.hide();
    button.remove();
    button = createButton("Next");
    button.parent(mainDiv);
    button.show();
    button.mouseClicked(function()
    {
      next(question);
    });
  });
}

function next(question)
{
  if(currQ < 6)
  {
  for(let r = 0; r < question.answrs.length; r++)
    {
      for(let c = 0; c < question.answrs[0].length; c++)
      {
        if(question.answrs[r][c] == mainAnswr.value())
        {
          aIndex = r;
        } 
      }
    }
  
    if(answr.value() == "Yes")
    {
      totP += question.points[aIndex];
      if(currQ == 1)
      {
        straw = true;
        onlyStraw = true;
        onlyStrawAndPost = true;
      }
      if(currQ == 5)
      {
        BOT = true;
        onlyBOT = true;
        onlyBOTAndPost = true;
      }
    }
    if(aIndex == 0)
    {
      others++;
    }
    if(aIndex == 1)
    {
      celebs++;
    }
    if(aIndex == 2)
    {
      help++;
    }
  } 

  button.hide();
  button.remove();
  
  mainQ.remove();
  mainAnswr.hide(); //hide main answer buttons
  mainAnswr.remove();
  mainAnswr = createRadio("question"); 
  mainAnswr.parent(mainDiv);
  br.parent(mainAnswr);
  mainAnswr.hide();
  
  currQ++;
  if(currQ < 6)
  {
    loadQuestion(questions[currQ]);
  }
  else if(currQ < 13)
  {
    answr.hide();
    answr.remove("yesno");
    
    loadQuestionB(questionsB[currQ - 6]);  
  }
}

function saveData()
{
  userData.users = 1; 
  userData.celebs = celebs;
  userData.others = others;
  userData.help = 7 - celebs - others;
  let percentComm = 0;
  if(commService != 0 && totService != 0)
  {
    percentComm = commService/totService;
  }
  userData.totService = totService;
  userData.commService = commService;
  
  userData.comm1 = 0;
  userData.comm75 = 0;
  userData.comm50 = 0;
  userData.comm25 = 0;
  userData.comml25 = 0;
  userData.comm0 = 0;
  
  if(percentComm == 1)
  {
    userData.comm1 = 1;
  }
  else if(percentComm >= 0.75)
  {
    userData.comm75 = 1;
  }
  else if(percentComm >= 0.5)
  {
    userData.comm50 = 1;
  }
  else if(percentComm >= 0.25)
  {
    userData.comm25 = 1;
  }
  else
  {
    userData.comml25 = 1;
    if(percentComm == 0)
    {
      userData.comm0 = 1;
    }
  }
  
  if(commService)
  {
    userData.forHours = 1;
    userData.forGood = 0;
  }
  else
  {
    userData.forHours = 0;
    userData.forGood = 1;
  }
  
  userData.onlyPosted = posts;
  userData.totIssues = totIssues;
  let ratio = posts/totIssues;
  userData.postedHalf = 0;
  userData.onlyPostedAll = 1;
  if(ratio == 1)
  {
    userData.onlyPostedAll = 1;
  }
  else if(ratio >= 0.5)
  {
    userData.onlyPostedHalf = 1;
  }
  
  if(onlyBOT)
  {
    userData.jBOT = 1;
    userData.postBOT = 0;
    userData.moreBOT = 0;
  }
  else if(onlyBOTAndPost)
  {
    userData.jBOT = 0;
    userData.postBOT = 1;
    userData.moreBOT = 0;
  }
  else
  {
    userData.jBOT = 0;
    userData.postBOT = 0;
    userData.moreBOT = 1; 
  }
  
  if(onlyStraw)
  {
    userData.jStraw = 1;
    userData.postStraw = 0;
    userData.moreStraw = 0;
  }
  else if(onlyStrawAndPost)
  {
    userData.jStraw = 0;
    userData.postStraw = 1;
    userData.moreStraw = 0;
  }
  else
  {
    userData.jStraw = 0;
    userData.postStraw = 0;
    userData.moreStraw = 1;
  }
  
  let text = JSON.stringify(userData);
  httpPost("http://gamesforfood.org/save_survey_content", 'text', text, function(result)
  {
    receiveData();
  });
  
  function receiveData()
  {
    let surveyData;
    httpGet("http://gamesforfood.org/get_survey_content", 'json', false, function(response)
    {
      sd = response;
      //sd = JSON.parse(surveyData);
    });
    state = 'statistics';
    createCanvas(windowWidth - 20, windowHeight);
  }
}

function draw()
{
  if(state == 'statistics')
  {
    //createCanvas(windowWidth - 20, windowHeight);
    frameRate(40);
    background(51);
    results();
  }
}

//Cookie Functions
function setCookie(name, value)
  {
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  
  function getCookie(name)
  {
    var n = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) 
    {
      var c = ca[i];
      while (c.charAt(0) == ' ') 
      {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) 
      {
      return c.substring(name.length, c.length);
      }
    }
    return "_nocookie_";
  }
  
  function checkCookie() 
  {
    var user = getCookie("username");
    if (user != "_nocookie_") 
    {
      alert("Welcome again " + user.substring(1));
      newUser = false;
    } 
    else 
    {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) 
      {
        setCookie("username", user);
      }
    }
  }
