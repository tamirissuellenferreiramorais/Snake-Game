let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] ={
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect( 0, 0, 16 * box, 16 * box);

}
function criarcobrinha() {
    for(i=0; i< snake.length; i++) {
        context.fillStyle= "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
    
}
function iniciarjogo() {
    criarBG();
    criarcobrinha();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    if(direction == "right") snakex += box;
    if(direction == "left") snakex -= box;
    if(direction == "up") snakey -= box;
    if(direction == "down") snakey += box;

    snake.pop();
    let newhead ={
        x: snakex,
        y: snakey
    }
    snake.unshift(newhead);




}
let jogo = setInterval(iniciarjogo, 100);