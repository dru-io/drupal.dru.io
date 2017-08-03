/* eslint-disable no-console */
/**
 * @file
 * Menu behaviors.
 */

(function ($, window, Drupal) {

  'use strict';

  /**
   * Fix menu during scroll to the top of the page and deattach when is scrolled
   * to the upper position.
   */
  Drupal.behaviors.promo_menu_fixating = {
    attach: function (context, settings) {

      /**
       * Toggle class according to current scroll position.
       */
      const toggleMenuFixation = function () {
        const scrollPosition = $(window).scrollTop();
        if (scrollPosition) {
          $('header').addClass('animated-menu');
        }
        else {
          $('header').removeClass('animated-menu');
        }
      };

      // Call it first time during page load, because page can be loaded not
      // at the top of window.
      toggleMenuFixation();

      // Bind on scroll.
      $(window).on('scroll', function () {
        toggleMenuFixation();
      });

    }
  };

  /**
   * Mobile menu.
   */
  Drupal.behaviors.promo_menu_mobile = {
    attach: function (context, settings) {

      // Create and add markup for mobile menu button to the header.
      let $mobileButtonHtml = $('<div id="csmenu"><span>button</span></div>');
      $('.region-upper-header .region-inner', context).append($mobileButtonHtml);

      // Add event listened for this button.
      $mobileButtonHtml.once('mobile-button').on('click', function () {
        $('body, .region-menu').toggleClass('menu--open');
      });

      // Add click listener for closing menu on parent elements click.
      $(document).once('mobile-scroll').on('click', function (event) {
        if (!$mobileButtonHtml.is(event.target) && $mobileButtonHtml.has(event.target).length === 0) {
          $('body, .region-menu').removeClass('menu--open');
        }
      });

    }
  };

  /**
   * Smooth scrolling page to needed anchor.
   */
  Drupal.behaviors.promo_menu_smooth_scroll = {
    attach: function (context, settings) {

      const menuHeight = $('header').height();
      // Smooth scroll.
      const smoothScroll = function (element) {
        const destinationElement = $(element).attr('href');
        const destinationPosition = $(destinationElement).offset().top - menuHeight;
        $('body').animate({scrollTop: destinationPosition}, 500);
      };

      $('#block-classier-main-menu .menu-item a,' +
        '.field--name-field-button a[href^="#"],' +
        'a[href^="#"]').once('smooth-click').on('click', function (event) {
        smoothScroll(event.target);
      });

    }
  };

  /**
   * Smooth scrolling page to needed anchor.
   *
   * @todo maybe do it better.
   */
  Drupal.behaviors.promo_menu_active_item = {
    attach: function (context, settings) {

      // Storage for all available anchors in menu.
      let anchorList = [];
      const menuItemSelector = '#block-classier-main-menu .menu-item';
      // Function to set class for active menu item.
      const setActiveMenuItem = function () {
        const windowScroll = $(window).scrollTop();
        $(anchorList).each(function (i) {
          if ($(this).offset().top <= windowScroll + 150) {
            if ($(menuItemSelector).hasClass('current')) {
              $(menuItemSelector).removeClass('current');
            }
            $(menuItemSelector).eq(i).addClass('current');
          }
        });
      };

      $(menuItemSelector).each(function (i, element) {
        anchorList.push($('a', element).attr('href'));
      });

      $(window).once('active-menu-item').on('scroll', function () {
        setActiveMenuItem();
      });

      // On page load.
      setActiveMenuItem();

    }
  };

})(jQuery, window, Drupal);
