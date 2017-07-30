(function ($, Drupal, drupalSettings) {

  'use strict';
  
 function remove() {
  $(".messages").removeClass("active");
}
 
$(document).ready(function () {
    if ($(".messages").html() !== "undefined") {
        $(window).load(function () {
            $(".messages").addClass("active");
            setTimeout(remove, 6000);
        });        
    }
});
    
    
})(jQuery, Drupal, drupalSettings);
