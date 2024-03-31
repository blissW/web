var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var gridSize = 20;
var cellSize = canvas.width / gridSize;

var snake;
var dx;
var dy;
var apple;

function initializeGame() {
    snake = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 }
    ];

    dx = 1;
    dy = 0;

    apple = { x: 15, y: 15 };
}

function drawSnake() {
    ctx.fillStyle = "green";
    snake.forEach(function (segment) {
        ctx.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize);
    });
}

function drawApple() {
    ctx.fillStyle = "red";
    ctx.fillRect(apple.x * cellSize, apple.y * cellSize, cellSize, cellSize);
}

function moveSnake() {
    var head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === apple.x && head.y === apple.y) {
        generateApple();
    } else {
        snake.pop();
    }
}

function generateApple() {
    apple.x = Math.floor(Math.random() * gridSize);
    apple.y = Math.floor(Math.random() * gridSize);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    moveSnake();
    drawSnake();
    drawApple();

    if (snake[0].x < 0 || snake[0].x >= gridSize || snake[0].y < 0 || snake[0].y >= gridSize) {
        alert("Game Over! Has chocado con la pared.");
        initializeGame();
    }
}

function main() {
    setInterval(draw, 100);
}

document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "ArrowLeft":
        case "a":
            if (dx !== 1) {
                dx = -1;
                dy = 0;
            }
            break;
        case "ArrowRight":
        case "d":
            if (dx !== -1) {
                dx = 1;
                dy = 0;
            }
            break;
        case "ArrowUp":
        case "w":
            if (dy !== 1) {
                dx = 0;
                dy = -1;
            }
            break;
        case "ArrowDown":
        case "s":
            if (dy !== -1) {
                dx = 0;
                dy = 1;
            }
            break;
    }
});

initializeGame();
main();
