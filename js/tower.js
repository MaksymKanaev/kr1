function Tower() {
   const blocks = document.querySelectorAll('.block'); //вибір усіх єлементів блок
   //Функція створення башні використовуючи значення івент 
   function createTower(event) {
      if (selected === 1) { //перевірка на обраний єлемент для будівництва
         const tower = document.createElement('div');
         tower.className = 'tower ' + towerSkin;
         event.target.appendChild(tower);
         buyTower(); //Функція віднімання монет
         storeCheck(); //Функція вимикання активного класу при зменшенні монет
         //функція пострілу башні з інтервалом 3с.
         if (tower.classList.contains("skin2")) {
            shoot(tower);
            setInterval(function () {
               shoot(tower);
            }, 20000);
         } else if (tower.classList.contains("skin1")) {
            shoot(tower);
            setInterval(function () {
               shoot(tower);
            }, 3500);
         } else { shoot(tower); };
         towerDestruction(tower, enemy);
         removeSkin(); //видалення скинів після будівницва
      }
   }
   // прослуховання який саме блок клікнуто та передача як івент для створення башні
   blocks.forEach(block => {
      block.addEventListener('click', (event) => {
         createTower(event);
      });
   });

}

