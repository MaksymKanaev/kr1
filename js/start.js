startBtn.onclick = startGame;

//функция старта игры
function startGame() {
   startModal.style.display = "none";
   footer.style.display = "flex";
   field.style.display = "flex";
   createBlock();
   let enemy = createEnemy();
   lifesIconPlayer();
   storeCheck();
   Tower();
}


//Создание блоков полей
function createBlock() {
   for (let i = 0; i < 50; i++) {
      let block = document.createElement("div"); //создание блок div
      block.className = 'block'// присвоение класса
      board.appendChild(block);
   }
   Tower();
}

function EndGame() {
   let appBlock = document.querySelector("#game__field")
   let EndGameBlock = document.querySelector(".end_game");
   EndGameBlock.classList.remove("visually-hidden");
   footer.classList.add("visually-hidden")
   appBlock.innerHTML = "";
   let scoreElement = document.querySelector('.end_game span');
   scoreElement.textContent = score.textContent;
   footer.style.display = "none";
   field.style.display = "none";
}


let btnRestartGame = document.querySelector(".restartGame");
btnRestartGame.onclick = function () {
   location.reload();
}
