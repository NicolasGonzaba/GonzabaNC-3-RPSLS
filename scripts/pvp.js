const inputP1 = document.getElementById("inputP1")
const inputP2 = document.getElementById("inputP2")
const pvpSingle = document.getElementById("pvpSingle")
const pvpThreeOfFive = document.getElementById("pvpThreeOfFive")
const pvpFourOfSeven = document.getElementById("pvpFourOfSeven")
const pvpWinner = document.getElementById("pvpWinner")
const player1Score = document.getElementById("p1Score")
const player2Score = document.getElementById("p2Score")
const displayP1 = document.getElementById("displayP1")
const displayP2 = document.getElementById("displayP2")
const pvpMatch = document.getElementById("pvpMatch") 

const player1Wins="Player 1 wins"
const player2Wins="Player 2 wins"
const tie="tie"
let player2Num=0
let player1Num=0
let match="single"

async function cpuFetchAPI(){
const response = await fetch(`https://rpslsgonzaban-gpgjc6gheahtedfb.westus3-01.azurewebsites.net/api/Game/TwoPlayer/${checkP1.toLowerCase()}/${inputP2.value}`);
data = await response.text();
console.log(data); 
}

inputP1.addEventListener('keydown', () => {
  if (event.key === 'Enter') {
    let checkP1=inputP1.value;
    if(checkP1.toLowerCase()!=="rock"&&checkP1.toLowerCase()!=="paper"&&checkP1.toLowerCase()!=="scissors"&&checkP1.toLowerCase()!=="lizard"&&checkP1.toLowerCase()!=="spock"){
        pvpWinner.innerText="Please enter 'rock', 'paper', 'scissors', 'lizard', or 'spock'"
        console.log(checkP1.toLowerCase()())
        return;
    }

    displayP2.style.display = "block";
    displayP1.style.display = "none"
    console.log("player 1 entered")
    
  }})

inputP2.addEventListener('keydown', () => {
  if (event.key === 'Enter') {
    let checkP2=inputP2.value;
    if(checkP2.toLowerCase()!=="rock"&&checkP2.toLowerCase()!=="paper"&&checkP2.toLowerCase()!=="scissors"&&checkP2.toLowerCase()!=="lizard"&&checkP2.toLowerCase()!=="spock"){
        pvpWinner.innerText="Please enter 'rock', 'paper', 'scissors', 'lizard', or 'spock'"
        console.log(checkP2.toLowerCase()())
        return;
    }

    displayP1.style.display = "block";
    displayP2.style.display = "none"
    console.log("player 2 entered")
  }})

  



