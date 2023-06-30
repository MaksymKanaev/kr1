function shoot(tower) {
    let bullet = document.createElement("div");
    bullet.className = "bullet";
   
    if (tower.classList.contains("skin2")) {
        bullet.style.backgroundImage = "url(../images/bulletskin2.png)";
    } else if (tower.classList.contains("skin1") {
        bullet.style.backgroundImage = "url(../images/bullet.png)";
    } else {
        
    }
        
    } 
   
   
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
        if (bullet.offsetLeft > board.offsetLeft + document.querySelector("#game__board").clientWidth) {
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
            createBoomEnemy(bullet.offsetTop, bullet.offsetLeft);
            givMoneyScore();
            bullet.remove(); // удаление пули при попадании
            enemy.remove(); // удаление врага
            createEnemy();
        }
    })
}






