const element = document.querySelector('.select');
const choices = new Choices(element,{searchEnabled: false,itemSelectText: '',shouldSort: false});


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [48.87219657376512,2.354223999999991],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 12
    });
    // Создание геообъекта с типом точка (метка).
    var myPlacemark = new ymaps.Placemark([48.87219657376512,2.354223999999991], {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/Map.svg',
      iconImageSize: [28, 40],
      iconImageOffset: [-14, -40]
  });

// Размещение геообъекта на карте.
myMap.geoObjects.add(myPlacemark);
}

