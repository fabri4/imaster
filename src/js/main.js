
$(document).ready(function() {

    var isMobile;
    if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
        isMobile = false;
        niceScrollInit();
        $('.b-problems-item__link').attr("href", "javascript:void(0)"); // disable calc-problems block scroll for non-mobile users

        //////////     ANIMATION      ////////////

        $('.wp1').waypoint(function() {
            $('.wp1').addClass('animated fadeInRight');
        }, {
            offset: '85%'
        });
        $('.wp2').waypoint(function() {
            $('.wp2').addClass('animated fadeInLeft');
        }, {
            offset: '85%'
        });
        $('.wp3').waypoint(function() {
            $('.wp3').addClass('animated zoomIn');
        }, {
            offset: '85%'
        });
    }
    else {
        isMobile = true;
        $('.wp1, .wp2, .wp3').css('visibility', 'visible');
    }

    //////////     MENU       ////////////

    var menu = $('#menu'),
        menulink = $('.menu-link'),
        headerMenu = $('.b-header__menu');

    menulink.click(function() {
        menulink.toggleClass('active');
        menu.toggleClass('active');
        headerMenu.toggleClass('active');
        return false;
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $('.b-page__header').addClass('b-page__header--cut');
        }
        else {
            $('.b-page__header').removeClass('b-page__header--cut');
        }
    });

    //////////    SCROLL    /////////////

    $('body').on('click', '.js-nav__link', function(){
        $('html, body').stop().animate({'scrollTop' : $(this.hash).offset().top - $(".b-header__menu").height() }, 1300);
        menu.removeClass('active');
        return false;
    });
    $('body').on('click', '.js-brand__link', function(){
        $('.b-choose__button').children().removeClass('js-brand__link');
        $('html, body').stop().animate({'scrollTop' : $(this.hash).offset().top - $(".b-header__menu").height() - 50 }, 1300);
        $('.b-choose__button').children().attr("href", "javascript:void(0)");
        return false;
    });
    $('.b-header-logo__link').on('click', function(){
        $('body, html').animate({'scrollTop': 0}, 700);
    });


    // FORM SUBMIT - CLICK
    $('.js-form__submit').on('click', function(){
        $(this).parents('form').submit();
    });

    $('form').submit(function() {
        $(this).isCorrectRequest();
        return false;
    });


    //////////     POPUPS      ////////////


    $('.close-popup').on('click', function(){
        $('.popup').fadeOut(200);
    });

    $('.popup').on('click', function(e){
        if (!$(e.target).closest('.popup-content').length) {
            $('.popup').fadeOut(200);
        }
    });

    $('.js-popup-call').on('click', function(){
        $('.popup-call').fadeIn(200);
    });

    ///////////      CALC       ///////////


    $('.js-brand__button').on('click', function(){
        $('.b-calc__wrapper').slideDown();

        $('.js-brand__button').removeClass('active');
        $(this).addClass('active');
        var id = $(this).data('parent');
        $('.js-calc__item').removeClass('active animated fadeIn');
        $('#' + id).addClass('active animated fadeIn');
    });

    $('.js-model__button').on('click', function(){
        $(this).parents('.js-calc__item').find('.js-model__button').removeClass('active');
        $(this).addClass('active');
        var id = $(this).data('parent');
        $(this).parents('.js-calc__item').find('.js-model__content').removeClass('active animated fadeIn');
        $('#' + id).addClass('active animated fadeIn');
    });



    ////////      CALC - PROBLEMS       /////////

    var problems = [

        iPhone = [
            {
                "works": "замена дисплея",
                "modelsPrices": ["650", "750", "1150", "1250", "1250", "2500", "6500"],
                "timeWork": "60 мин",
                "discount": "Только сегодня скидка 20% на замену дисплея"
            },
            {
                "works": "замена фронтального стекла",
                "modelsPrices": ["500", "550", "650", "750", "750", "2000", "3000"],
                "timeWork": "60 мин",
                "discount": ""
            },
            {
                "works": "замена аккумулятора",
                "modelsPrices": ["300", "300", "450", "450", "450", "850", "950"],
                "timeWork": "15 - 30 мин",
                "discount": ""
            },
            {
                "works": "замена кнопки вкл. /выкл.",
                "modelsPrices": ["200", "250", "350", "450", "500", "500", "650"],
                "timeWork": "45 - 60 мин",
                "discount": ""
            },
            {
                "works": "замена разъема зарядки",
                "modelsPrices": ["300", "350", "400", "450", "450", "500", "1000"],
                "timeWork": "30 - 60 мин",
                "discount": ""
            },
            {
                "works": "замена кнопки HOME",
                "modelsPrices": ["200", "250", "300", "550", "350", "650", "1000"],
                "timeWork": "30 - 45 мин",
                "discount": ""
            },
            {
                "works": "замена разъема наушников",
                "modelsPrices": ["250", "250", "350", "400", "450", "550", "650"],
                "timeWork": "45 - 60 мин",
                "discount": ""
            },
            {
                "works": "замена вибро мотора",
                "modelsPrices": ["200", "200", "200", "250", "300", "450", "500"],
                "timeWork": "30 - 45 мин",
                "discount": ""
            },
            {
                "works": "замена микрофона",
                "modelsPrices": ["300", "350", "400", "450", "450", "500", "650"],
                "timeWork": "45 - 60 мин",
                "discount": ""
            },
            {
                "works": "замена динамика",
                "modelsPrices": ["200", "200", "300", "350", "350", "500", "550"],
                "timeWork": "60 мин",
                "discount": ""
            },
            {
                "works": "замена корпуса",
                "modelsPrices": ["150", "150", "1100", "1400", "1500", "2000", "3200"],
                "timeWork": "от 60 мин",
                "discount": ""
            },
            {
                "works": "замена музыкального динамика",
                "modelsPrices": ["250", "300", "350", "400", "400", "450", "500"],
                "timeWork": "60 мин",
                "discount": ""
            },
            {
                "works": "чистка телефона от влаги",
                "modelsPrices": ["от 100", "от 100", "от 100", "от 200", "от 100", "от 250", "от 250"],
                "timeWork": "от 30 мин",
                "discount": ""
            },
            {
                "works": "бесплатная диагностика",
                "modelsPrices": ["0", "0", "0", "0", "0", "0", "0"],
                "timeWork": "30 мин",
                "discount": ""
            },
            {
                "works": "перепрошивка",
                "modelsPrices": ["100", "100", "100", "100", "100", "200", "200"],
                "timeWork": "60 мин",
                "discount": ""
            },
            {
                "works": "замена Wi-Fi модуля",
                "modelsPrices": ["от 500", "от 600", "от 700", "от 800", "от 800", "от 1000", "от 1250"],
                "timeWork": "от 60 мин",
                "discount": ""
            },
            {
                "works": "пайка системной платы",
                "modelsPrices": ["от 200", "от 200", "от 200", "от 200", "от 200", "от 500", "от 500"],
                "timeWork": "от 30 мин",
                "discount": ""
            },
            {
                "works": "замена камеры",
                "modelsPrices": ["300", "350", "400", "450", "450", "1000", "1500"],
                "timeWork": "30 - 60 мин",
                "discount": ""
            }
        ],
        iPad = [
            {
                "works": "замена дисплея",
                "modelsPrices": ["1650", "1850", "1850", "3200", "8000", "1800", "2000"],
                "timeWork": "60 мин",
                "discount": "Только сегодня скидка 20% на замену дисплея"
            },
            {
                "works": "замена сенсорного стекла",
                "modelsPrices": ["750", "850", "950", "1450", "8000", "1100", "1150"],
                "timeWork": "от 60 - 120 мин",
                "discount": ""
            },
            {
                "works": "замена аккумулятора",
                "modelsPrices": ["850", "1000", "1150", "от 950", "1300", "800", "900"],
                "timeWork": "от 90 мин",
                "discount": ""
            },
            {
                "works": "замена разъема зарядки",
                "modelsPrices": ["350", "450", "500", "600", "650", "600", "650"],
                "timeWork": "60 - 120 мин",
                "discount": ""
            },
            {
                "works": "замена кнопки HOME",
                "modelsPrices": ["350", "400", "500", "500", "600", "550", "650"],
                "timeWork": "от 90 мин",
                "discount": ""
            },
            {
                "works": "замена Wi-Fi модуля",
                "modelsPrices": ["от 300", "от 400", "от 450", "от 600", "от 800", "от 550", "от 600"],
                "timeWork": "от 90 мин",
                "discount": ""
            },
            {
                "works": "замена шлейфа кнопки вкл/выкл",
                "modelsPrices": ["от 250", "450", "500", "650", "650", "500", "600"],
                "timeWork": "от 60 мин",
                "discount": ""
            },
            {
                "works": "замена разъема наушников",
                "modelsPrices": ["450", "450", "500", "650", "650", "500", "550"],
                "timeWork": "60 - 90 мин",
                "discount": ""
            },
            {
                "works": "замена вибро мотора",
                "modelsPrices": ["400", "400", "450", "550", "800", "500", "650"],
                "timeWork": "от 60 мин",
                "discount": ""
            },
            {
                "works": "замена корпуса",
                "modelsPrices": ["1350", "1450", "1500", "2000", "3000", "1500", "1500"],
                "timeWork": "от 90 мин",
                "discount": ""
            },
            {
                "works": "замена музыкального динамика",
                "modelsPrices": ["450", "450", "450", "600", "600", "450", "550"],
                "timeWork": "60 - 120 мин",
                "discount": ""
            },
            {
                "works": "чистка iPad от влаги",
                "modelsPrices": ["от 250", "от 400", "от 400", "от 450", "от 500", "от 500", "от 550"],
                "timeWork": "от 60 мин",
                "discount": ""
            },
            {
                "works": "предварительная диагностика",
                "modelsPrices": ["0", "0", "0", "0", "0", "0", "0"],
                "timeWork": "30 мин",
                "discount": ""
            },
            {
                "works": "перепрошивка",
                "modelsPrices": ["150", "150", "150", "150", "200", "150", "150"],
                "timeWork": "60 мин",
                "discount": ""
            },
            {
                "works": "пайка системной платы",
                "modelsPrices": ["от 250", "от 300", "от 400", "от 500", "от 850", "от 500", "от 550"],
                "timeWork": "от 60 мин",
                "discount": ""
            },
            {
                "works": "замена камеры",
                "modelsPrices": ["350", "450", "550", "600", "700", "650", "850"],
                "timeWork": "60 - 120 мин",
                "discount": ""
            }
        ]
    ];

    var brands = ["iPhone", "iPad"];

    var models = [
        iPhone = ["4", "4s", "5", "5s", "5c", "6", "6+"],
        iPad = ["2", "3", "4", "Air", "Air 2", "Mini", "Mini 2"]
    ];
    
    

    $('.b-problems__item').on('click', function(){
        $('.b-problems__item').removeClass('active');
        $(this).addClass('active');
        var brandId = $('.js-calc__item.active').attr('id');
        brandId = brandId.charAt(brandId.length - 1) - 1;
        var modelId = $('.js-calc__item.active .js-model__content.active').attr('id');
        modelId = modelId.charAt(modelId.length - 1) - 1;
        var problemId = $(this).data('problem') - 1;


        var problemText = $(this).children().text();
        var solveText = problems[brandId][problemId]['works'];
        var timeText = problems[brandId][problemId]['timeWork'];
        var costText = problems[brandId][problemId]['modelsPrices'][modelId];
        var discountText = problems[brandId][problemId]['discount'];

        $('.b-calc-form__problem').text(problemText);
        $('.b-calc-form__solve').text(solveText);
        $('.b-calc-info__time').text(timeText);
        $('.b-calc-info__cost').text(costText + ' грн');
        $('.b-calc-info__parts').text('в наличии');
        $('.b-calc-form__footer').text(discountText);

        $('.b-calc-form input[name = model]').val(brands[brandId] + " " + models[brandId][modelId]);
        $('.b-calc-form input[name = problem]').val(problemText);
        $('.b-calc-form input[name = time]').val(timeText);
        $('.b-calc-form input[name = cost]').val(costText + ' грн');
    });
});



// FORM SUBMIT
(function($) {
    $.fn.isCorrectRequest = function() {
        this.find('input[type=text]').removeClass('correct incorrect');

        var nameInput = $(this).find('[name = name]');
        var telephoneInput = $(this).find('[name = tel]');
        var emailInput = $(this).find('[name = email]');

        nameInput.val($.trim(nameInput.val()));
        telephoneInput.val($.trim(telephoneInput.val()));
        emailInput.val($.trim(emailInput.val()));

        if(nameInput.val() != undefined){
            if(nameInput.val().length === 0)
            {
                nameInput.addClass('incorrect');
                nameInput.focus();
                return false;
            }
        }

        if(emailInput.val() != undefined){
            if(emailInput.val().length === 0)
            {
                emailInput.addClass('incorrect');
                emailInput.focus();
                return false;
            }
        }

        if(telephoneInput.val() != undefined){
            if(telephoneInput.val().length === 0)
            {
                telephoneInput.addClass('incorrect');
                telephoneInput.focus();
                return false;
            }
        }

        var form = $(this);
        var formData = form.serialize();
        var url = form.attr('action');

        $.ajax({
            type: 'POST',
            url: url,
            data: formData,
            processData: false,
            dataType: 'text',
            context: this,
            async: false,
            success: function(data)
            {
                window.location.href = 'thanks.html';
                if (data === 'OK') {
                    //Сюда код вставляйте счетчика яндекс на цели

                }
            },
            error: function(answer)
            {
                //alert('Ошибка отправки данных. Попробуйте еще раз.');
            }
        });


    };
})(jQuery);


//////////     GOOGLE MAPS      ////////////


var map;
function initialize() {
    var isDraggable = $(document).width() > 480 ? true : false;
    var style_array_from_above_here =  [
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 65
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 51
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 30
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.local",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 40
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": -25
                },
                {
                    "saturation": -100
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#ffff00"
                },
                {
                    "lightness": -25
                },
                {
                    "saturation": -97
                }
            ]
        }
    ];

    var myLatlng = new google.maps.LatLng(50.435639, 30.450758);

    var myOptions = {
        scrollwheel: false,
        zoom: 17,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: style_array_from_above_here,
        //panControl: true,
        draggable: isDraggable

    };

    map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    var image = new google.maps.MarkerImage('img/other/map_marker.png',
        new google.maps.Size(45, 51),
        new google.maps.Point(0,0),
        new google.maps.Point(22, 51));


    // MARKER 1
    var markerLatlng1 = new google.maps.LatLng(50.435639, 30.450758);
    var marker1 = new google.maps.Marker({
        position: markerLatlng1,
        map: map,
        icon: image,
        title: "iMaster - Киев, ул. Ушинского 3"
    });

    var infoWindow = new google.maps.InfoWindow;

    var onMarkerClick = function() {
        var marker = this;
        var latLng = marker.getPosition();
        var infoWindowContent = marker.title;
        infoWindow.setContent('<div class="scrollFix">'+infoWindowContent+'</div>');
        infoWindow.open(map, marker);
    };
    google.maps.event.addListener(map, 'click', function() {
        infoWindow.close();
    });

    google.maps.event.addListener(marker1, 'click', onMarkerClick);

}


//////////     NICESCROLL      ////////////

function niceScrollInit(){
    $("html").niceScroll({
        zindex: 10000,
        scrollspeed: 60,
        mousescrollstep: 45,
        cursorwidth: 10,
        cursorborder: 0,
        cursorcolor: '#2D3032',
        cursorborderradius: 2,
        autohidemode: true,
        horizrailenabled: false
    });

    $('html').addClass('no-overflow-y');
}