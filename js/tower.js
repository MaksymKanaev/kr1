function Tower() {
   const blocks = document.querySelectorAll('.block');

   if (!blocks.length) {
      console.error('No blocks found');
   }
   if (!board) {
      console.error('Board not found');
   }

   function createTower(event) {
      const tower = document.createElement('div');
      tower.className = 'tower ' + towerSkin;
      event.target.appendChild(tower);
      shoot()
   }

   blocks.forEach(block => {
      block.addEventListener('click', (event) => {
         createTower(event);
      });
   });
}
