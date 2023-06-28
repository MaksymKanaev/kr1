startBtn.onclick = startGame;

//функция старта игры
function startGame() {
   startModal.style.display = "none";
   footer.style.display = "flex";
   field.style.display = "flex";
   createBlock();
   createEnemy()

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

