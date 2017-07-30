(function ($, Drupal, drupalSettings) {

  'use strict';

    
    //Animated menu
    var height = $('header').offset().top;
    $(window).scroll(function(){
        if ($(document).height() > $(window).height()+$('header').height()) {
            var scroll = $(this).scrollTop();
            if (scroll >= 1) {
                $('header').addClass('animated-menu');
            }
            else {
                $('header').removeClass('animated-menu');
            }
        }
    });
    $(window).load(function(){
        if ($(document).height() > $(window).height()+$('header').height()) {
            var scroll = $(this).scrollTop();
            if (scroll >= 1) {
                $('header').addClass('animated-menu');
            }
            else {
                $('header').removeClass('animated-menu');
            }
        }
    });
    //Мобильное меню
    $('.region-upper-header .region-inner').append('<div id="csmenu"><span>button</span></div>');
    $('#csmenu').click(function () {
        $('body').toggleClass('menu--open');
        $('.region-menu').toggleClass('menu--open');
    });
    $(document).click(function (e){ // событие клика по веб-документу
        var div = $("#csmenu"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.region-menu').removeClass('menu--open'); // скрываем его
            $('body').removeClass('menu--open'); // скрываем его
        }
    });

    var menuheight = $('header').height() - 15; // Высота меню на desktop.
    /* Плавный скролл */
    $('#block-classier-main-menu .menu-item a').click(function () { 
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - menuheight;
        $("html, body").animate( { scrollTop: destination }, 500);
        $('body').removeClass('menu--open');
        $('.region-menu').removeClass('menu--open');
        return false;
    });
    $('.field--name-field-button a[href^="#"]').click(function () { 
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - menuheight;
        $("html, body").animate( { scrollTop: destination }, 500);
        return false;
    });
    $('a[href^="#"]').click(function () { 
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - menuheight;
        $("html, body").animate( { scrollTop: destination }, 500);
        return false;
    });


    /* КОНЕЦ */
    
    $(window).load(function () {
        //Добавляем значение высоты блоков по каждому пункту меню
        $('#block-classier-main-menu .menu-item').each(function () {
            var ids = $('a', this).attr('href');
            var height = $(ids).offset().top - 70;
            $(this).attr('height', height);
        });        
        menu($(this).scrollTop());
    });      
    $(window).scroll(function () {
        menu($(this).scrollTop());
    });
        
    function menu(scroll) {
        //Присваиваем класс активному пункту меню
        for (var i = 0; i <= $('#block-classier-main-menu .menu-item').length; i++) {
            var height_1 = $('#block-classier-main-menu .menu-item').eq(i).attr('height');
            var height_2 = $('#block-classier-main-menu .menu-item').eq(i+1).attr('height');
            if (height_2 !== undefined) {
                if (scroll >= height_1 && scroll < height_2) { //Не первый и не последний
                    $('#block-classier-main-menu .menu-item').removeClass('current');
                    $('.animated-menu #block-classier-main-menu .menu-item').removeClass('current');
                    $('#block-classier-main-menu .menu-item').eq(i).addClass('current');
                    $('.animated-menu #block-classier-main-menu .menu-item').eq(i).addClass('current');
                    break;
                } else if (scroll < height_1) { //Первый пункт
                    $('#block-classier-main-menu .menu-item').removeClass('current');
                    $('.animated-menu #block-classier-main-menu .menu-item').removeClass('current');
                    $('#block-classier-main-menu .menu-item:first').addClass('current');
                    $('.animated-menu #block-classier-main-menu .menu-item:first').addClass('current');
                    break;                    
                }              
            } else {
                if (scroll >= height_1) { //Последний
                    $('#block-classier-main-menu .menu-item').removeClass('current');
                    $('.animated-menu #block-classier-main-menu .menu-item').removeClass('current');
                    $('#block-classier-main-menu .menu-item:last').addClass('current');
                    $('.animated-menu #block-classier-main-menu .menu-item:last').addClass('current');
                    break;
                }                
            }
        }
    }     
      
})(jQuery, Drupal, drupalSettings);
