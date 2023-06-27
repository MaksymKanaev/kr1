function Tower() {
   const blocks = document.querySelectorAll('.block');

   function createTower(event) {
      if (selected === 1) {
         const tower = document.createElement('div');
         tower.className = 'tower ' + towerSkin;
         event.target.appendChild(tower);
         removeSkin();
      }
   }

   blocks.forEach(block => {
      block.addEventListener('click', (event) => {
         createTower(event);
      });
   });

}
