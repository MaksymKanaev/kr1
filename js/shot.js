//Функция под createBoom(bullet.offsetTop, bullet.offsetLeft);
function createBoomEnemy(top, left) {
  let boom = document.createElement("div");
  boom.className = "enemyboom";
  boom.style.top = top - 40 + "px"; /*top + "px";*/
  boom.style.left = left + "px"; /*left + "px";*/
  board.appendChild(boom);

  setTimeout(function () {
    boom.remove();
  }, 1000); // время взрыва
}
//Когда прописывается в bullet.js то зомби разрывает с кровью



//Столкновение зомби с магазином

function createBoomTower(top, left) {
  let boom = document.createElement("div");
  boom.className = "towerboom";
  boom.style.top = top + 100 + "px";
  boom.style.left = left + 10 + "px";
  board.appendChild(boom);

  setTimeout(function () {
    boom.remove();
  }, 1000);
}


