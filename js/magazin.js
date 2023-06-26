
// получаем список элементов с классом skin
const skins = document.querySelectorAll('.skin');

// проходимся циклом по всем элементам и добавляем обработчик событий на клик
skins.forEach(skin => {
   skin.addEventListener('click', () => {
      // получаем значение атрибута data-skin кликнутого элемента
      const skinValue = skin.dataset.skin;
      // устанавливаем значение towerSkin равным выбранному значению
      towerSkin = skinValue;
      // проходимся по всем элементам и удаляем класс selected
      skins.forEach(s => s.classList.remove('selected'));
      // добавляем класс selected выбранному элементу
      skin.classList.add('selected');
   });
});