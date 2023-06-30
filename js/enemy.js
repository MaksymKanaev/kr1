const appEnemy = document.querySelector("#game__board");
let enemy; // Глобальная переменная enemy

function createEnemy() {
    enemy = document.createElement("div");
    enemy.className = "enemy skin" + random(1, 3);
    enemy.style.top = appEnemy.offsetTop + calculateTopPosition() + "px";
    enemy.style.left = appEnemy.offsetLeft + appEnemy.offsetWidth - 50 + "px";
    appEnemy.appendChild(enemy);
    MoveEnemy(enemy);
}

function calculateTopPosition() {
    let top = random(1, 5);
    if (top == 1) {
        return 6;
    }
    if (top == 2) {
        return 127;
    }
    if (top == 3) {
        return 250;
    }
    if (top == 4) {
        return 373;
    }
    if (top == 5) {
        return 496;
    }
}

function random(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


function MoveEnemy(enemy) {
    let timerId = setInterval(function () {
        enemy.style.left = enemy.offsetLeft - 10 + "px";
        if (enemy.offsetLeft < document.querySelector("#game__board").offsetLeft) {
            removeEnemy(enemy);
            clearInterval(timerId);
            // !!!
        }

    }, 10);
    setTimeout(function () {
        createEnemy(enemy);
    }, 8000);
}


function removeEnemy(enemy) {
    setTimeout(function () {
        enemy.remove();
        setTimeout(function () {
            for (let i = 0; i < 1; i++) {
                createEnemy();
            }
        }, 1000);
    }, 800);
}

function EndGame () {
    let appBlock = document.querySelector("#game__field")
    let EndGameBlock = document.querySelector(".end_game");
    EndGameBlock.classList.remove("visually-hidden");
    footer.classList.add("visually-hidden")
    appBlock.innerHTML = "";
    let scoreElement = document.querySelector('.end_game span');
    scoreElement.textContent = score.textContent;
}


let btnRestartGame = document.querySelector(".restartGame");
btnRestartGame.onclick = function () {
    location.reload();
}
