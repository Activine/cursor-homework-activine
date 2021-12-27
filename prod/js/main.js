
'use strict';

console.log('test');
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

    $(document).ready(function(){
        $('.slider').slick({
            // отображение стрелок 
            arrows:true,
            // отображение точек 
            dots:false,
            // адаптивное изменение высоты слайдера 
            adaptiveHeigh:true,
            // количество отображаемых слайдеров в окне (по умолчанию один)
            slidesToShow:1,
            // количество прослистуемых слайдеров при нажатии стрелки
            slidesToScroll:1,
            // скорость пролистывания слайдера (по умолчанию 300 млсек)
            speed:1000,
            // рисунок смены слайдов
            easing:'ease',
            // oтвечает за бесконечность слайдера
            infinite:true,
            // показывает с какого слайда будет стартовать слайдер (по умолчанию 0)
            initialSlide:1,
            // автоматическое проигрывание слайдов
            autoplay:true,
            // время автопроигрывания (по умолчанию 3 сек)
            autoplaySpeed:4500,
            // пауза автопроигрывания при различных действиях
            pauseOnFocus:true,
            pauseOnHover:true,
            pauseOnDotsHover:true,
            // переключение слайдов мышкой на ПК
            draggable:true,
            // переключение слайдов touchscreen
            swipe:true,
            // расстояние которое нужно просвайпить (по умолчанию 5(при увеличении значения расстояние уменьшается и наоборот))
            touchThreshold:10,
            // включат возможности touchscreenа
            touchMove:true,
            // отключить медленное прокручивание слайдов (по умолчанию true)
            waitForAnimate:false,
            // добавляет центральному слайду класс slick-center (можно сделать прозрачность неактивным слайдам, добавить transition)
            centreMOde:false,
            // дает возможность контенту внутри слайда определять ширинуслайдера (автоадаптив слайдера)
            variableWidth:false,
            // ряди в слайдере 
            rows:1,
            // количество слайдов в ряду (по умолчанию 1)
            slidesPerRow:2,
            // делает слайдер вертикальным (для работы в таком виде неодходимо задать .slider .slider-track{display:block}) для корректной работы такого слайдера необходимо завадать высоту в slider__item {heigh:500px(пример высоты большой картинки)}
            vertical:false,
            // свайпить вертикально
            verticalSwiping:false,
        });
    });

    $(function(){
        $('.popup__link').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });