(function ($, Drupal, drupalSettings) {

    $(document).ready(function() {



    	/*Блок - Что такое Drupal?*/
    	// Блок с текстом
       	$('#block-1 .left-side').addClass("hidden-anim").viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            classToRemove: 'hidden-anim',
            offset: 100,
        });
        // Блок с видео
       	$('#block-1 .right-side').addClass("hidden-anim").viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            classToRemove: 'hidden-anim',
            offset: 300
        });
    	/*End of Блок - Что такое Drupal?*/



    	/*D R U P A L*/
        $('#block-13 .field--name-field-paragraph > .field__item').eq(0).addClass("hidden-anim").viewportChecker({
            classToAdd: 'visible animated fadeInUp-01',
            classToRemove: 'hidden-anim',
            offset: 100,
        });
        $('#block-13 .field--name-field-paragraph > .field__item').eq(1).addClass("hidden-anim").viewportChecker({
            classToAdd: 'visible animated fadeInUp-02',
            classToRemove: 'hidden-anim',
            offset: 100,
        });
        $('#block-13 .field--name-field-paragraph > .field__item').eq(2).addClass("hidden-anim").viewportChecker({
            classToAdd: 'visible animated fadeInUp-03',
            classToRemove: 'hidden-anim',
            offset: 100,
        });
        $('#block-13 .field--name-field-paragraph > .field__item').eq(3).addClass("hidden-anim").viewportChecker({
            classToAdd: 'visible animated fadeInUp-04',
            classToRemove: 'hidden-anim',
            offset: 100,
        });
        $('#block-13 .field--name-field-paragraph > .field__item').eq(4).addClass("hidden-anim").viewportChecker({
            classToAdd: 'visible animated fadeInUp-05',
            classToRemove: 'hidden-anim',
            offset: 100,
        });
        $('#block-13 .field--name-field-paragraph > .field__item').eq(5).addClass("hidden-anim").viewportChecker({
            classToAdd: 'visible animated fadeInUp-06',
            classToRemove: 'hidden-anim',
            offset: 100,
        });
    	/*End of D R U P A L*/
    	

    	/*Drupal - проверенное временем надежное решение для ГОСУДАРСТВА И КРУПНОГО БИЗНЕСА*/
    	$('#block-8 .field--name-field-title').addClass("hidden-anim").viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            classToRemove: 'hidden-anim',
            offset: 100,
        });
    	$('#block-8 .field--name-body').addClass("hidden-anim").viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            classToRemove: 'hidden-anim',
            offset: 300,
        });
    	/*End of Drupal - проверенное временем надежное решение для ГОСУДАРСТВА И КРУПНОГО БИЗНЕСА*/
    	
    	
    	/*Drupal - оптимальный выбор для МАЛОГО БИЗНЕСА И ПЕРСОНАЛЬНОГО ИСПОЛЬЗОВАНИЯ*/
    	$('#block-9 .field--name-field-title').addClass("hidden-anim").viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            classToRemove: 'hidden-anim',
            offset: 100,
        });
        $('#block-9 .field--name-body').addClass("hidden-anim").viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            classToRemove: 'hidden-anim',
            offset: 300,
        });
    	/*End of Drupal - оптимальный выбор для МАЛОГО БИЗНЕСА И ПЕРСОНАЛЬНОГО ИСПОЛЬЗОВАНИЯ*/

    	
    	/*Drupal разрабатывается и поддерживается огромным сообществом по всему миру*/
    	$('#block-10 .field--name-field-title').addClass("hidden-anim").viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            classToRemove: 'hidden-anim',
            offset: 100,
        });
        $('#block-10 .field--name-body').addClass("hidden-anim").viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            classToRemove: 'hidden-anim',
            offset: 300,
        });
    	/*End of Drupal разрабатывается и поддерживается огромным сообществом по всему миру*/
    	
        
    	/*Информационные ресурсы Drupal*/
        // $('#block-information-resource .view-content').addClass("hidden-anim").viewportChecker({
        //     classToAdd: 'visible animated fadeInUp',
        //     classToRemove: 'hidden-anim',
        //     offset: 300,
        // });
        $('#block-information-resource .views-row').addClass("hidden-anim").viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            classToRemove: 'hidden-anim',
            removeClassAfterAnimation: true,
            offset: 100
        });

    	/*End of Информационные ресурсы Drupal*/
    	
    	/*Блок с вебформой*/
        $('#block-3 .rightside').addClass("hidden-anim").viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            classToRemove: 'hidden-anim',
            offset: 300,
        });
    	/*End of Блок с вебформой*/
    	

    }); 

	  
})(jQuery, Drupal, drupalSettings);

	  