const appEnemy = document.querySelector("#game__board");

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
        towerDestruction(enemy);
        if (enemy.classList.contains("skin1")) {
            enemy.style.left = enemy.offsetLeft - 20 + "px";
        } else {
            enemy.style.left = enemy.offsetLeft - 10 + "px";
        }

        if (enemy.offsetLeft + enemy.offsetWidth - 90 <= board.offsetLeft && enemy.offsetLeft != 0) {
            removeEnemy(enemy);
            clearInterval(timerId);
            minusLifePlayer();
        }

    }, 150);
    setTimeout(function () {
        createEnemy(enemy);
    }, 7000);
    setTimeout(function () {
        createEnemy(enemy);
    }, 15000);
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

function towerDestruction(enemy) {
    let towers = document.querySelectorAll(".tower");
    towers.forEach(function (tower) {
        if ((enemy.offsetTop + 50) > tower.offsetTop // левый верхний угол
            && (enemy.offsetTop + 50) < tower.offsetTop + tower.offsetHeight //левый нижний угол
            && enemy.offsetLeft > tower.offsetLeft //левый верхний угол
            && enemy.offsetLeft < tower.offsetLeft + tower.clientWidth  //правый верхний угол
        ) {
            createBoomTower(tower.offsetTop, tower.offsetLeft);
            enemy.remove(); // удаление пули при попадании
            tower.remove(); // удаление врага
            // createEnemy();
        }
    })
}

