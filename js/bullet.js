function shoot(tower) {
    let bullet = document.createElement("div");
    bullet.className = "bullet";
    if (tower.classList.contains("skin2")) {
        bullet.style.backgroundImage = "url(../images/bulletskin2.png)";
    } else if (tower.classList.contains("skin1")) {
        bullet.style.backgroundImage = "url(../images/bullet.png)";
    } else {
        bullet.style.backgroundImage = "url(../images/bulletskin3.png)";
    }
    bullet.style.top = tower.offsetTop + 50 + "px";
    bullet.style.left = tower.offsetLeft + (tower.offsetWidth / 2) + "px";
    board.appendChild(bullet);
    moveShot(bullet, tower);
}




//функция движения пули
function moveShot(bullet, tower) {
    let idTimer = setInterval(function () {
        isHit(bullet, tower); // Попадание по врагам
        bullet.style.left = bullet.offsetLeft + 10 + 'px';
        // удаление пули если вышла за поля экрана
        if (bullet.offsetLeft > board.offsetLeft + document.querySelector("#game__board").clientWidth) {
            bullet.remove();
            clearInterval(idTimer);
        }
    }, 100);
}

function isHit(bullet, tower) {
    // Выбор всех элементов врагов
    let enemies = document.querySelectorAll(".enemy");

    // Проверка на попадание пули по каждому врагу
    enemies.forEach(function (enemy) {
        if (tower.classList.contains("skin2")) {
            if (bullet.offsetTop > enemy.offsetTop // левый верхний угол
                && bullet.offsetTop < enemy.offsetTop + enemy.offsetHeight // левый нижний угол
                && bullet.offsetLeft > enemy.offsetLeft // левый верхний угол
                && bullet.offsetLeft < enemy.offsetLeft + enemy.clientWidth // правый верхний угол
            ) {
                createBoomEnemy(bullet.offsetTop, bullet.offsetLeft); // создание взрыва у врага
                givMoneyScore(); // увеличение счета денег
                enemy.remove(); // удаление врага// 
            }
        } else {
            if (bullet.offsetTop > enemy.offsetTop // левый верхний угол
                && bullet.offsetTop < enemy.offsetTop + enemy.offsetHeight // левый нижний угол
                && bullet.offsetLeft > enemy.offsetLeft // левый верхний угол
                && bullet.offsetLeft < enemy.offsetLeft + enemy.clientWidth // правый верхний угол
            ) {
                createBoomEnemy(bullet.offsetTop, bullet.offsetLeft); // создание взрыва у врага
                givMoneyScore(); // увеличение счета денег
                bullet.remove(); // удаление пули при попадании
                enemy.remove(); // удаление врага
                createEnemy();// создание нового врага
            }
        }
    });
}







