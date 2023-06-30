function startGame() {
   startModal.style.display = "none";
   footer.style.display = "flex";
   field.style.display = "flex";
   createBlock();
   createEnemy();
   lifesIconPlayer();
   storeCheck();
   Tower();
   let enemy = createEnemy();
   towerDestruction(enemy);
}
function createBlock() {
   for (let i = 0; i < 50; i++) {
      let block = document.createElement("div"); //создание блок div
      block.className = 'block'// присвоение класса
      board.appendChild(block);
   }
}
function Tower() {
   const blocks = document.querySelectorAll('.block'); //вибір усіх єлементів блок
   function createTower(event) {
      if (selected === 1) {
         const tower = document.createElement('div');
         tower.className = 'tower ' + towerSkin;
         event.target.appendChild(tower);
         buyTower();
         storeCheck();
         setInterval(function () {
            shoot(tower);
         }, 3000);
         removeSkin();
      }
   }
   blocks.forEach(block => {
      block.addEventListener('click', (event) => {
         createTower(event);
      });
   });
}

function MoveEnemy(enemy) {
   let timerId = setInterval(function () {
      towerDestruction(enemy);
      enemy.style.left = enemy.offsetLeft - 10 + "px";
   }, 10);
}
function towerDestruction(enemy) {
   let towers = document.querySelectorAll(".tower");
   towers.forEach(function (tower) {
      if (enemy.offsetTop > tower.offsetTop // левый верхний угол
         && enemy.offsetTop < tower.offsetTop + tower.offsetHeight //левый нижний угол
         && enemy.offsetLeft > tower.offsetLeft //левый верхний угол
         && enemy.offsetLeft < tower.offsetLeft + tower.clientWidth  //правый верхний угол
      ) {
         createBoomTower(enemy.offsetTop, enemy.offsetLeft);
         enemy.remove(); // удаление пули при попадании
         tower.remove(); // удаление врага
         createEnemy();
      }
   })
}