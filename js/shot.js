//Функция под createBoom(bullet.offsetTop, bullet.offsetLeft);
function createBoom(top, left) {
  let boom = document.createElement("img");
  boom.className = "boom";
  boom.src = "images/blood.gif"; 
  boom.style.top = top - 80 + "px"; /*top + "px";*/
  boom.style.left = left - 100 + "px"; /*left + "px";*/
  board.appendChild(boom);

  setTimeout(function() {
    boom.remove();
  }, 1000); // время взрыва
}
//Когда прописывается в bullet.js то зомби разрывает с кровью




//Столкновение зомби с магазином

function createBoom(top, left) {
  let boom = document.createElement("img");
  boom.className = "boom";
  boom.src = "images/boom.gif"; 
  boom.style.top = top - 80 + "px";
  boom.style.left = left - 100 + "px";
  board.appendChild(boom);

  setTimeout(function() {
      boom.remove();
  }, 1000);
}





//ДЛЯ СТОЛКНОВЕНИЯ ЗОМБИ С МАГАЗИНОМ
function checkCollision(enemy, magazin) {
   
  magazin.forEach(magazin => {
      if (enemy.offsetTop === magazin.offsetTop && enemy.offsetLeft === magazin.offsetLeft) {
          magazin.remove(); // Удаляем магазин
      }
  });
}
