/**
 * @file
 * Message in pop-up behaviors.
 */

(function ($, window, Drupal) {

  'use strict';

  Drupal.behaviors.status_message_popup = {
    attach: function (context, settings) {

      if ($('.messages').length) {
        $('.messages').addClass('active');

        setTimeout(function () {
          $('.messages').removeClass('active');
        }, 6000);
      }

    }
  };

})(jQuery, window, Drupal);
