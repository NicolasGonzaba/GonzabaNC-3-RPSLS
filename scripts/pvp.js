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

async function pvpFetchAPI(){
const response = await fetch(`http://localhost:5041/api/Game/TwoPlayer/${inputP1.value}/${inputP2.value}`);
data = await response.text();
console.log(data); 
pvpWinner.innerText=data
if(data.includes(player2Wins)){
    player2Num+=1
    player2Score.innerText=`Player 2:${player2Num}`
    if(match==="single"){
        pvpMatch.innerText="Player 2 has won the match, click one of the buttons below to reset the score"
    } else if(match==="five" && player2Num>=3){
        pvpMatch.innerText="Player 2 has won the match, click one of the buttons below to reset the score"
    }else if(player2Num>=4){
        pvpMatch.innerText="Player 2 has won the match, click one of the buttons below to reset the score"
    }

}else if(data.includes(player1Wins)){
    player1Num+=1
    player1Score.innerText=`Player 1:${player1Num}`
    if(match==="single"){
        pvpMatch.innerText="Player 1 has won the match, click one of the buttons below to reset the score"
    }else if(match==="five" && player1Num>=3){
        pvpMatch.innerText="Player 1 has won the match, click one of the buttons below to reset the score"
    }else if(player1Num>=4){
        pvpMatch.innerText="Player 1 has won the match, click one of the buttons below to reset the score"
    }
}

}


pvpSingle.addEventListener('click',()=>{
    player2Num=0
    player1Num=0
    pvpMatch.innerText=""
    player1Score.innerText=`Player 1:${player1Num}`
    player2Score.innerText=`Player 2:${player2Num}`
    
    if(match==="five"){
       pvpThreeOfFive.classList.remove('btn-success')    
       pvpThreeOfFive.classList.add('btn-warning')
       pvpSingle.classList.remove('btn-warning')
       pvpSingle.classList.add('btn-success')
    } else if(match==="seven"){
        pvpFourOfSeven.classList.remove('btn-success')    
       pvpFourOfSeven.classList.add('btn-warning')
       pvpSingle.classList.remove('btn-warning')
       pvpSingle.classList.add('btn-success')
    }
    match="single"
})


pvpThreeOfFive.addEventListener('click',()=>{
    player2Num=0
    player1Num=0
    pvpMatch.innerText=""
    player1Score.innerText=`Player 1:${player1Num}`
    player2Score.innerText=`Player 2:${player2Num}`
    
    if(match==="single"){
       pvpThreeOfFive.classList.add('btn-success')    
       pvpThreeOfFive.classList.remove('btn-warning')
       pvpSingle.classList.add('btn-warning')
       pvpSingle.classList.remove('btn-success')
    } else if(match==="seven"){
        pvpFourOfSeven.classList.remove('btn-success')    
       pvpFourOfSeven.classList.add('btn-warning')
       pvpThreeOfFive.classList.remove('btn-warning')
       pvpThreeOfFive.classList.add('btn-success')
    }
    match="five"
})
pvpFourOfSeven.addEventListener('click',()=>{
    player2Num=0
    player1Num=0
    pvpMatch.innerText=""
    player1Score.innerText=`Player 1:${player1Num}`
    player2Score.innerText=`Player 2:${player2Num}`
    
    if(match==="five"){
       pvpThreeOfFive.classList.remove('btn-success')    
       pvpThreeOfFive.classList.add('btn-warning')
       pvpFourOfSeven.classList.remove('btn-warning')
       pvpFourOfSeven.classList.add('btn-success')
    } else if(match==="single"){
        pvpFourOfSeven.classList.add('btn-success')    
       pvpFourOfSeven.classList.remove('btn-warning')
       pvpSingle.classList.add('btn-warning')
       pvpSingle.classList.remove('btn-success')
    }
    match="seven"
})








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
    pvpWinner.innerText=""
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
    pvpFetchAPI()
  }})


  



