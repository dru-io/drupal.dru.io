/**
 * @file
 * Animations behaviors.
 */
(function ($, window, Drupal) {

  'use strict';

  Drupal.behaviors.block_animations = {
    attach: function (context, settings) {

      /**
       * What us Drupal?
       */
      $('#block-what-is-drupal .left-side').
        addClass('hidden-anim').
        viewportChecker({
          classToAdd: 'visible animated fadeInUp',
          classToRemove: 'hidden-anim',
          offset: 100
        });
      $('#block-what-is-drupal .right-side').
        addClass('hidden-anim').
        viewportChecker({
          classToAdd: 'visible animated fadeInUp',
          classToRemove: 'hidden-anim',
          offset: 300
        });

      /**
       * Drupal achievements and statistics.
       */
      $('#block-achievements .field--name-field-paragraph > .field__item').
        eq(0).
        addClass('hidden-anim').
        viewportChecker({
          classToAdd: 'visible animated fadeInUp-01',
          classToRemove: 'hidden-anim',
          offset: 100
        });
      $('#block-achievements .field--name-field-paragraph > .field__item').
        eq(1).
        addClass('hidden-anim').
        viewportChecker({
          classToAdd: 'visible animated fadeInUp-02',
          classToRemove: 'hidden-anim',
          offset: 100
        });
      $('#block-achievements .field--name-field-paragraph > .field__item').
        eq(2).
        addClass('hidden-anim').
        viewportChecker({
          classToAdd: 'visible animated fadeInUp-03',
          classToRemove: 'hidden-anim',
          offset: 100
        });
      $('#block-achievements .field--name-field-paragraph > .field__item').
        eq(3).
        addClass('hidden-anim').
        viewportChecker({
          classToAdd: 'visible animated fadeInUp-04',
          classToRemove: 'hidden-anim',
          offset: 100
        });
      $('#block-achievements .field--name-field-paragraph > .field__item').
        eq(4).
        addClass('hidden-anim').
        viewportChecker({
          classToAdd: 'visible animated fadeInUp-05',
          classToRemove: 'hidden-anim',
          offset: 100
        });
      $('#block-achievements .field--name-field-paragraph > .field__item').
        eq(5).
        addClass('hidden-anim').
        viewportChecker({
          classToAdd: 'visible animated fadeInUp-06',
          classToRemove: 'hidden-anim',
          offset: 100
        });

      /**
       * Proven solutions.
       */
      $('#block-proven-solution .field--name-field-title').
        addClass('hidden-anim').
        viewportChecker({
          classToAdd: 'visible animated fadeInUp',
          classToRemove: 'hidden-anim',
          offset: 100
        });
      $('#block-proven-solution .field--name-body').
        addClass('hidden-anim').
        viewportChecker({
          classToAdd: 'visible animated fadeInUp',
          classToRemove: 'hidden-anim',
          offset: 300
        });

      /**
       * Optimal choice.
       */
      $('#block-optimal-choice .field--name-field-title').
        addClass('hidden-anim').
        viewportChecker({
          classToAdd: 'visible animated fadeInUp',
          classToRemove: 'hidden-anim',
          offset: 100
        });
      $('#block-optimal-choice .field--name-body').
        addClass('hidden-anim').
        viewportChecker({
          classToAdd: 'visible animated fadeInUp',
          classToRemove: 'hidden-anim',
          offset: 300
        });

      /**
       * Drupal support.
       */
      $('#block-support .field--name-field-title').
        addClass('hidden-anim').
        viewportChecker({
          classToAdd: 'visible animated fadeInUp',
          classToRemove: 'hidden-anim',
          offset: 100
        });
      $('#block-support .field--name-body').
        addClass('hidden-anim').
        viewportChecker({
          classToAdd: 'visible animated fadeInUp',
          classToRemove: 'hidden-anim',
          offset: 300
        });

      /**
       * Drupal resources.
       */
      $('#block-information-resource .views-row').
        addClass('hidden-anim').
        viewportChecker({
          classToAdd: 'visible animated fadeInUp',
          classToRemove: 'hidden-anim',
          removeClassAfterAnimation: true,
          offset: 100
        });

      /**
       * Drupal get help form.
       */
      $('#block-askaquestion .rightside').
        addClass('hidden-anim').
        viewportChecker({
          classToAdd: 'visible animated fadeInUp',
          classToRemove: 'hidden-anim',
          offset: 300
        });

    }
  };

})(jQuery, window, Drupal);
