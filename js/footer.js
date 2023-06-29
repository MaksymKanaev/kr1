let numbersLifes = 3;

function minusLifePlayer() {
   numbersLifes--;
   if (numbersLifes <= 0) {
      diePlayer()
   }
   lifesIconPlayer();
}

function lifesIconPlayer() {
   lifes.innerHTML = "";
   let count = 0;
   while (count < numbersLifes) {
      let span = document.createElement("span");
      lifes.appendChild(span);
      count = count + 1;
   }
}