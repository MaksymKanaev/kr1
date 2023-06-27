const appEnemy = document.querySelector("#game__field");
let enemy; // Глобальная переменная enemy

function createEnemy() {
    enemy = document.createElement("div"); 
    enemy.className = "enemy skin" + random(1, 3);
    enemy.style.top = calculateTopPosition()  + "px";
    enemy.style.left = 1227 + "px";
    appEnemy.appendChild(enemy);
    MoveEnemy(enemy);
}

function calculateTopPosition() {
   let top = random(1,5);
   if(top == 1) {
    return 137;
   };
   if (top == 2) {
  return 259;
   }
   if(top == 3) {
    return 384;
   }
   if(top == 4) {
    return 505;
   }
   if(top == 5) {
    return 628;
   }
}



function random(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


function MoveEnemy(enemy) {
    let timerId = setInterval(function() {
      enemy.style.left = enemy.offsetLeft - 10 + "px";
    }, 150); 
    setTimeout(function() {
        createEnemy(enemy);
      }, 6000);
  }
  


