//this code maintains score.
let score = JSON.parse(localStorage.getItem('score')) || {
  //JSON.parse will convert the string which is stored into the int.
  wins: 0,
  losses: 0,
  ties: 0
};

//This function will display Result.
function RS(Result){
  const Resu=Result || 'Nothing.';
  document.querySelector('.js-Result').innerHTML=Resu;
}

RS();

//this function helps you to show what you choose and computer choose.
function MD(playerMove, computerMove) {
  const playerChoice = playerMove || 'Nothing';
  const ComputerChoice = computerMove || 'Nothing';

  let playerChoiceImg = '';
  let computerChoiceImg = '';

  if (playerChoice === 'Rock') {
    playerChoiceImg = "<img src='Images/rock-emoji.png' class='move-icon player-move-icon'>";
  } else if (playerChoice === 'Scissor') {
    playerChoiceImg = "<img src='Images/scissors-emoji.png' class='move-icon player-move-icon'>";
  } else if (playerChoice === 'Paper') {
    playerChoiceImg = "<img src='Images/paper-emoji.png' class='move-icon player-move-icon'>";
  }

  if (ComputerChoice === 'Rock') {
    computerChoiceImg = "<img src='Images/rock-emoji.png' class='move-icon computer-move-icon'>";
  } else if (ComputerChoice === 'Scissor') {
    computerChoiceImg = "<img src='Images/scissors-emoji.png' class='move-icon computer-move-icon'>";
  } else if (ComputerChoice === 'Paper') {
    computerChoiceImg = "<img src='Images/paper-emoji.png' class='move-icon computer-move-icon'>";
  }

  document.querySelector('.js-MoveDisplay').innerHTML = `You chose ${playerChoiceImg}. Computer chose ${computerChoiceImg}.`;
}

MD();


//This function will give you in screen display of win, lose and Tie ,Like score.
function UpdateScore(){
  document.querySelector('.js-score').innerHTML=`Wins: ${score.Win} , Lose: ${score.Lose} , Tie: ${score.Tie}.`;
}

UpdateScore();

//adding The scores.
function ans(Result){
  if(Result=='Tie.'){
    score.Tie++;
  }
  else if(Result=='You Win.'){
    score.Win++;
  }
  else{
    score.Lose++;
  }
}

//Reset code score.
function Reset(){
  score.Win=0;
  score.Lose=0;
  score.Tie=0;
  UpdateScore();
}

let Comp='';

//Computer move
function PicComp(){
  const  RandomNum=Math.random();

  if(RandomNum>=0 && RandomNum<1/3){
    Comp='Rock';
  }
  else if(RandomNum>=1/3 && RandomNum<2/3){
    Comp='Paper';
  }
  else if(RandomNum>=2/3 && RandomNum<=1){
    Comp='Scissor';
  }
}

//Rock code:-
function Rock(){
  const playerMove='Rock';
  PicComp();
  console.log(Comp);

  let Result='';
  
  if(Comp==='Rock'){
    Result='Tie.';
  }
  else if(Comp==='Paper'){
    Result='You Lose.';
  }
  else{
    Result='You Win.';
  }
  ans(Result);
  localStorage.setItem('score',JSON.stringify(score));
  //stringify is used to convert them into strings because local storage only stores in strings.
  RS(Result);
  MD(playerMove, Comp);
  UpdateScore();
}

//Paper code:-
function Paper(){
  const playerMove='Paper';
  PicComp();

  console.log(Comp);

  let Result='';
  
  if(Comp==='Rock'){
    Result='You Win.';
  }
  else if(Comp==='Paper'){
    Result='Tie.';
  }
  else{
    Result='You Lose.';
  }
  ans(Result);
  localStorage.setItem('score',JSON.stringify(score));
  RS(Result);
  MD(playerMove, Comp);
  UpdateScore();
}

//Scissor code:-
function Scissor(){
  const playerMove='Scissor';
  PicComp();
  console.log(Comp);

  let Result='';
  
  if(Comp==='Rock'){
    Result='You Lose.';
  }
  else if(Comp==='Paper'){
    Result='You Win.';
  }
  else{
    Result='Tie.';
  }
  ans(Result);
  localStorage.setItem('score',JSON.stringify(score));
  RS(Result);
  MD(playerMove, Comp);
  UpdateScore();
  }