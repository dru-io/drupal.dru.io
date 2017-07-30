/*Этот скрипт переносит фоновое изображение из блока blazy в родительский блок*/

(function ($, Drupal, drupalSettings) {

  'use strict';

	$(document).ready(function() {
		$(".media--blazy").each(function(){ // Перебираем все blazy блоки
		    var bg = $(this).attr("data-src"); // Извлекаем путь к изображению.
		    $(this).closest(".block").css('background-image', 'url(' + bg + ')'); // Задаем фоновое изображение родительскому блоку.
		    $(this).closest(".blazy").remove(); // Удаляем из html блок с blazy
		});
	}); 	  
	  
})(jQuery, Drupal, drupalSettings);
