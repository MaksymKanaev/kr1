const appEnemy = document.querySelector("#game__field");
let enemy; // Глобальная переменная enemy

function createEnemy() {
    enemy = document.createElement("div"); // Удалено ключевое слово let
    enemy.className = "enemy skin" + random(1, 3);
    enemy.style.top = calculateTopPosition() + "px";
    enemy.style.left = 1227 + "px";
    appEnemy.appendChild(enemy);
}

// Остальной код остается без изменений
function calculateTopPosition() {
    const gridHeight = 120; // Высота каждой ячейки в сетке
    const characterHeight = 120/* Ваша высота персонажа */; // Высота персонажа
    const gameFieldHeight = document.querySelector("#game__field").offsetHeight;
    const cellHeight = gridHeight + 0.5; // Высота ячейки с учетом промежутка между ними

    // Вычисляем максимальное количество ячеек по вертикали
    const maxCells = Math.floor(gameFieldHeight / cellHeight);

    // Вычисляем максимальное смещение по вертикали, чтобы оставаться в пределах игрового поля
    const maxOffset = (maxCells - 1) * cellHeight - characterHeight;

    // Случайное смещение от 0 до максимального смещения
    const offset = random(0, maxOffset);

    // Выравнивание по центру ячейки с учетом высоты персонажа
    const top = offset + (cellHeight - gridHeight) / 2 + characterHeight / 2;

    return top;
}



function random(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


