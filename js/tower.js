function Tower() {
   const blocks = document.querySelectorAll('.block');

   function createTower(event) {
<<<<<<< HEAD
      const tower = document.createElement('div');
      tower.className = 'tower ' + towerSkin;
      event.target.appendChild(tower);
      shoot()
=======
      if (selected === 1) {
         const tower = document.createElement('div');
         tower.className = 'tower ' + towerSkin;
         event.target.appendChild(tower);
         removeSkin();
      }
>>>>>>> d185cdf8032cb796e1b0d14dbb925edbf585f8f9
   }

   blocks.forEach(block => {
      block.addEventListener('click', (event) => {
         createTower(event);
      });
   });

}
