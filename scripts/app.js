const inputCPU = document.getElementById("inputCPU")
const cpuSingle = document.getElementById("cpuSingle")
const cpuThreeOfFive = document.getElementById("cpuThreeOfFive")
const cpuFourOfSeven = document.getElementById("cpuFourOfSeven")
const cpuWinner = document.getElementById("cpuWinner")
const playerScore = document.getElementById("playerScore")
const cpuScore = document.getElementById("cpuScore")
const cpuMatch = document.getElementById("cpuMatch") 


const playerWins="Player 1 wins"
const cpuWins="CPU wins"
const tie="tie"
let cpuNum=0
let playerNum=0
let match="single"

async function cpuFetchAPI(){
const response = await fetch(`https://rpslsgonzaban-gpgjc6gheahtedfb.westus3-01.azurewebsites.net/api/Game/OnePlayer/${inputCPU.value}`);
data = await response.text();
console.log(data); 
cpuWinner.innerText=data
if(data.includes(cpuWins)){
    cpuNum+=1
    cpuScore.innerText=`CPU:${cpuNum}`
    if(match==="single"){
        cpuMatch.innerText="CPU has won the match, click one of the buttons below to reset the score"
    } else if(match==="five" && cpuNum>=3){
        cpuMatch.innerText="CPU has won the match, click one of the buttons below to reset the score"
    }else if(cpuNum>=4){
        cpuMatch.innerText="CPU has won the match, click one of the buttons below to reset the score"
    }

}else if(data.includes(playerWins)){
    playerNum+=1
    playerScore.innerText=`Player:${playerNum}`
    if(match==="single"){
        cpuMatch.innerText="Player 1 has won the match, click one of the buttons below to reset the score"
    }else if(match==="five" && playerNum>=3){
        cpuMatch.innerText="Player 1 has won the match, click one of the buttons below to reset the score"
    }else if(playerNum>=4){
        cpuMatch.innerText="Player 1 has won the match, click one of the buttons below to reset the score"
    }
}

}

inputCPU.addEventListener('keydown', () => {
  if (event.key === 'Enter') {
    let checkCPU=inputCPU.value;
    if(checkCPU.toLowerCase()!=="rock"&&checkCPU.toLowerCase()!=="paper"&&checkCPU.toLowerCase()!=="scissors"&&checkCPU.toLowerCase()!=="lizard"&&checkCPU.toLowerCase()!=="spock"){
        cpuWinner.innerText="Please enter 'rock', 'paper', 'scissors', 'lizard', or 'spock'"
        console.log(checkCPU.toLowerCase()())
        return;
    }
    cpuFetchAPI();
  }})

cpuSingle.addEventListener('click',()=>{
    cpuNum=0
    playerNum=0
    cpuMatch.innerText=""
    playerScore.innerText=`Player:${playerNum}`
    cpuScore.innerText=`CPU:${cpuNum}`
    
    if(match==="five"){
       cpuThreeOfFive.classList.remove('btn-success')    
       cpuThreeOfFive.classList.add('btn-warning')
       cpuSingle.classList.remove('btn-warning')
       cpuSingle.classList.add('btn-success')
    } else if(match==="seven"){
        cpuFourOfSeven.classList.remove('btn-success')    
       cpuFourOfSeven.classList.add('btn-warning')
       cpuSingle.classList.remove('btn-warning')
       cpuSingle.classList.add('btn-success')
    }
    match="single"
})


cpuThreeOfFive.addEventListener('click',()=>{
    cpuNum=0
    playerNum=0
    cpuMatch.innerText=""
    playerScore.innerText=`Player:${playerNum}`
    cpuScore.innerText=`CPU:${cpuNum}`
    
    if(match==="single"){
       cpuThreeOfFive.classList.add('btn-success')    
       cpuThreeOfFive.classList.remove('btn-warning')
       cpuSingle.classList.add('btn-warning')
       cpuSingle.classList.remove('btn-success')
    } else if(match==="seven"){
        cpuFourOfSeven.classList.remove('btn-success')    
       cpuFourOfSeven.classList.add('btn-warning')
       cpuThreeOfFive.classList.remove('btn-warning')
       cpuThreeOfFive.classList.add('btn-success')
    }
    match="five"
})
cpuFourOfSeven.addEventListener('click',()=>{
    cpuNum=0
    playerNum=0
    cpuMatch.innerText=""
    playerScore.innerText=`Player:${playerNum}`
    cpuScore.innerText=`CPU:${cpuNum}`
    
    if(match==="five"){
       cpuThreeOfFive.classList.remove('btn-success')    
       cpuThreeOfFive.classList.add('btn-warning')
       cpuFourOfSeven.classList.remove('btn-warning')
       cpuFourOfSeven.classList.add('btn-success')
    } else if(match==="single"){
        cpuFourOfSeven.classList.add('btn-success')    
       cpuFourOfSeven.classList.remove('btn-warning')
       cpuSingle.classList.add('btn-warning')
       cpuSingle.classList.remove('btn-success')
    }
    match="seven"
})







