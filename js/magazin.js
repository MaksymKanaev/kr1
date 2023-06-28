mgz1.onclick = function () {
   removeSkin();
   selected = 1;
   console.dir(selected);
   mgz1.classList.add('selected');
   towerSkin = "skin1";
}
mgz2.onclick = function () {
   removeSkin();
   selected = 1;
   mgz2.classList.add('selected');
   towerSkin = "skin2";
}
mgz3.onclick = function () {
   removeSkin();
   selected = 1;
   mgz3.classList.add('selected');
   towerSkin = "skin3";
}

function removeSkin() {
   selected = 0;
   mgz1.classList.remove('selected');
   mgz2.classList.remove('selected');
   mgz3.classList.remove('selected');
}


