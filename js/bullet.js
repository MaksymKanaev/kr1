function shoot(tower) {
    let bullet = document.createElement("div");
    bullet.className = "bullet";
    bullet.style.top = tower.offsetTop + 50 + "px";
    bullet.style.left = tower.offsetLeft + (tower.offsetWidth / 2) + "px";
    board.appendChild(bullet);
    moveShot(bullet);
}

//функция движения пули
function moveShot(bullet) {
    let idTimer = setInterval(function () {
        isHit(bullet); // Попадание по врагам
        bullet.style.left = bullet.offsetLeft + 10 + 'px';
        // удаление пули если вышла за поля экрана
        if (bullet.offsetLeft > document.querySelector("#game__board").clientWidth) {
            bullet.remove();
            clearInterval(idTimer);
        }
    }, 100);
}

// Функция попадания пули по врагу
function isHit(bullet) {
    //по врагу
    //Выбор всех элементов 
    let enemies = document.querySelectorAll(".enemy");
    //Проверка на совпадение границы для каждого элемента
    enemies.forEach(function (enemy) {
        if (bullet.offsetTop > enemy.offsetTop // левый верхний угол
            && bullet.offsetTop < enemy.offsetTop + enemy.offsetHeight //левый нижний угол
            && bullet.offsetLeft > enemy.offsetLeft //левый верхний угол
            && bullet.offsetLeft < enemy.offsetLeft + enemy.clientWidth  //правый верхний угол
        ) {
            // createBoom(bullet.offsetTop, bullet.offsetLeft);
            // score.innerText++;
            bullet.remove(); // удаление пули при попадании
            enemy.remove(); // удаление врага
            createEnemy();
        }
    })
}