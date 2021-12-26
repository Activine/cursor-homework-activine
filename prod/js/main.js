
'use strict';

console.log('test');
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('video', {
            height: '390',
            width: '640',
            videoId: 'M7lc1UVf-VE',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
        // if (event.data == YT.PlayerState.PLAYING && !done) {
        //     setTimeout(stopVideo, 6000);
        //     done = true;
        // }
    }
    function stopVideo() {
        player.stopVideo();
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