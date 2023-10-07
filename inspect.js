const winsJs = document.getElementById("WinsHTML");
const losessJs = document.getElementById("LosessHTML");
const drawsJs = document.getElementById("DrawsHTML");

const LabelCompJs = document.getElementById("LabelComp")
const LabelYouJs = document.getElementById("LabelYou")

const compResJs = document.getElementById("ResultComp");
const ResultGameJs = document.getElementById("ResultGame");
const ResultPlayerJs = document.getElementById("ResultPlayer");
const score = {
    Win: 0,
    Lose: 0,
    Draw: 0
}
const Moves = {
  Paper: '✋',
  Rock: '👊',
  Scissors: '✌️'
}
function LabelTriggerOn(){
  LabelCompJs.innerHTML = 'Computer'
  LabelYouJs.innerHTML = 'You'
}
function LabelTriggerOff(){
  LabelCompJs.innerHTML = ''
  LabelYouJs.innerHTML = ''
}
function UpdateScore(){
  drawsJs.innerHTML = score.Draw
  losessJs.innerHTML = score.Lose
  winsJs.innerHTML = score.Win
}
function CompMove(){
    const RandNum = Math.random();
    if (RandNum >= 0 && RandNum < 1 / 3){
        return Moves.Rock
    } else if (RandNum >= 1 / 3 && RandNum < 2 / 3){
        return Moves.Scissors
    } else if (RandNum >= 2 / 3 && RandNum < 1){
        return Moves.Paper
    }
}
function Rock(){
    let CumputerMove = CompMove()
    let result = '';
    let PlayerMove = Moves.Rock
    if (CumputerMove === PlayerMove){
      result = 'Tie!'
      score.Draw += 1
    } 
    else if (CumputerMove === Moves.Scissors){
      result = 'You won!'
      score.Win += 1
    } 
    else if (CumputerMove === Moves.Paper){
      result = 'You lost!'
      score.Lose += 1
    }
    UpdateScore()
    LabelTriggerOn()
    compResJs.innerHTML = CumputerMove
    ResultGameJs.innerHTML = result
    ResultPlayerJs.innerHTML = PlayerMove
}
function Paper(){
    let CumputerMove = CompMove()
    let result = '';
    let PlayerMove = Moves.Paper
    if (CumputerMove === Moves.Rock){
      result = 'You win!'
      score.Win += 1
    } 
    else if (CumputerMove === Moves.Scissors){
      result = 'You lost!'
      score.Lose += 1
    } 
    else if (CumputerMove === PlayerMove){
      result = 'Tie!'
      score.Draw += 1
    }
    UpdateScore()
    LabelTriggerOn()
    compResJs.innerHTML = CumputerMove
    ResultGameJs.innerHTML = result
    ResultPlayerJs.innerHTML = PlayerMove
}
function Scissors(){
    let CumputerMove = CompMove()
    let result = '';
    let PlayerMove = Moves.Scissors
    if (CumputerMove === Moves.Rock){
      result = 'You lost!'
      score.Lose += 1
    } 
    else if (CumputerMove === PlayerMove){
      result = 'Tie!'
      score.Draw += 1
    } 
    else if (CumputerMove === Moves.Paper){
      result = 'You Won!'
      score.Win += 1
    }
    UpdateScore()
    LabelTriggerOn()
    compResJs.innerHTML = CumputerMove
    ResultGameJs.innerHTML = result
    ResultPlayerJs.innerHTML = PlayerMove
}
function Reset(){
    score.Win = 0
    score.Lose = 0
    score.Draw = 0
    UpdateScore()
    LabelTriggerOff()
    compResJs.innerHTML = ''
    ResultGameJs.innerHTML = 'Lets Play!'
    ResultPlayerJs.innerHTML = ''
}