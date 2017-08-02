/**
 * @file
 * Blazy fix behaviors.
 */
(function ($, window, Drupal) {

  'use strict';

  /**
   * Move background image to parent .block element.
   */
  Drupal.behaviors.blazy_fix_image = {
    attach: function (context, settings) {

      $('.media--blazy').once().each(function () {
        const background = $(this).attr('data-src');
        $(this).closest('.block').css('background-image', 'url(' + background + ')');
        $(this).closest('.blazy').remove();
      });

    }
  };

})(jQuery, window, Drupal);
