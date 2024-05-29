const gameField = document.querySelector(".game-field")
console.log(gameField)
gameField.innerHTML += `<div class="snake"></div>`

const snakeModel = {
    x: 2, y: 2
}
function moveSnake() {
    const snakeElement = document.querySelector(".snake")
    snakeElement.style.left = snakeModel.x * 40 + "px"
    snakeElement.style.top = snakeModel.y * 40 + "px"
}
window.addEventListener("keypress", function (e) {
    console.log("kill", e)
    if (e.code == "KeyD" && snakeModel.x<9) snakeModel.x++
    if (e.code == "KeyA" && snakeModel.x>0) snakeModel.x--
    if (e.code == "KeyW" && snakeModel.y>0) snakeModel.y--
    if (e.code == "KeyS" && snakeModel.y<9) snakeModel.y++

    console.log(snakeModel)
    moveSnake()
})