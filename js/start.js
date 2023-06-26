startBtn.onclick = startGame;

//функция старта игры
function startGame() {
   startModal.style.display = "none";
   footer.style.display = "flex";
   field.style.display = "flex";
   createArea();
}


//Создание блоков полей
function createArea() {
   for (let i = 0; i < 50; i++) {
      let area = document.createElement("div"); //создание блок div
      area.className = 'area'// присвоение класса
      board.appendChild(area);
   }
}

