towerPrice1 = 5; //стоимость 1 башни
towerPrice2 = 10; //стоимость 2 башни
towerPrice3 = 30; //стоимость 3 башни
// Функція вибору 1 товару з магазину
mgz1.onclick = function () {
   if (money.innerText >= towerPrice1) { //перевірка на достатність коштів
      removeSkin(); //видалення попередніх активних товарів
      selected = 1; //встановлення параметру для будівництва башні
      mgz1.classList.add('selected'); //додавання класу обраного товару
      towerSkin = "skin1"; //вибір скіна для будівництва башні
   } else { return }; //якщо не достатньо коштів повернення без виконання
}
// Функція вибору 2 товару з магазину
mgz2.onclick = function () {
   if (money.innerText >= towerPrice2) {//перевірка на достатність коштів
      removeSkin();//видалення попередніх активних товарів
      selected = 1;//встановлення параметру для будівництва башні
      mgz2.classList.add('selected');//додавання класу обраного товару
      towerSkin = "skin2";//вибір скіна для будівництва башні
   } else { return };//якщо не достатньо коштів повернення без виконання
}
// Функція вибору 3 товару з магазину
mgz3.onclick = function () {
   if (money.innerText >= towerPrice3) {//перевірка на достатність коштів
      removeSkin();//видалення попередніх активних товарів
      selected = 1;//встановлення параметру для будівництва башні
      mgz3.classList.add('selected');//додавання класу обраного товару
      towerSkin = "skin3";//вибір скіна для будівництва башні
   } else { return };//якщо не достатньо коштів повернення без виконання
}
// Функція видалення попередніх активних товарів
function removeSkin() {
   selected = 0;//парамерт унеможливлює будівництво башні
   mgz1.classList.remove('selected');
   mgz2.classList.remove('selected');
   mgz3.classList.remove('selected');
}

//Функція нарахування очок та монет за вбивтво ворогів
function givMoneyScore() {
   score.innerText++;
   money.innerText++;
   storeCheck(); //перевірка монет для відкриття товару в магазині
}

//Функція присвоєння класу активного товару за умови наявності монет
function storeCheck() {
   mgz1.classList.toggle('active', money.innerText >= towerPrice1);
   mgz2.classList.toggle('active', money.innerText >= towerPrice2);
   mgz3.classList.toggle('active', money.innerText >= towerPrice3);
}
//Функція віднімання монет у випадку будівницта банші. 
//перевіряє яка самє башня побудована та мінусує її вартість
function buyTower() {
   switch (towerSkin) {
      case "skin1":
         money.innerText -= towerPrice1;
         break;
      case "skin2":
         money.innerText -= towerPrice2;
         break;
      case "skin3":
         money.innerText -= towerPrice3;
         break;
   }
}
