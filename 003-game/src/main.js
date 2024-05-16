let bollPosition = 2;
let attempts = 10;
let score = 0;

function cup(n) {
    attempts--;
    const attemptsNode = document.querySelector("#attempts")
    console.log(attemptsNode)
    attemptsNode.innerHTML = attempts;
    console.log("cup", n, attempts);
    if (bollPosition == n) {
        score++
        const scoreNode = document.querySelector("#score")
        console.log(attemptsNode)
        scoreNode.innerHTML = score;    
        alert("cool u find it")
     } else alert("No man not your day");
    bollPosition = Math.round(Math.random()) + 1;
    console.log(bollPosition);
    if (attempts==0){
        alert("Game over")
        location.reload()
    }
}
