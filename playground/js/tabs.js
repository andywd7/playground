var Tabs = {

    init: function () {
      this.bindUIfunctions();
      this.scrollTabs();
      ////this.pageLoadCorrectTab();
    },

    bindUIfunctions: function () {

        // Delegation
        jQuery(document)
          .on("click", ".nav--tabs li:not('.is-active') a[href^='#']", function (e) {
              Tabs.changeTab(this.hash);
              e.preventDefault();
          })
          .on("click", ".nav--tabs .is-active a", function (e) {
              e.preventDefault();
          });

        jQuery('.tabs .toggle_chkbx').on('change', function (e) {
            jQuery(this).attr('aria-pressed',
                jQuery(this).attr('aria-pressed') == 'true' ? 'false' : 'true'
            );
        });

    },

    changeTab: function (hash) {

        var anchor = jQuery("[href=" + hash + "]");
        var content = jQuery(hash);

        // activate correct anchor (visually)
        anchor.parent().addClass("is-active").siblings().removeClass("is-active");

        // activate correct div (visually)
        content.addClass("is-active").siblings().removeClass("is-active");

        // close menu
        jQuery('.tabs .toggle_chkbx').prop('checked', '');

        // update URL, no history addition
        // You'd have this active in a real situation, but it causes issues in an <iframe> (like in PatternLab) in Firefox. So commented out.
        //window.history.replaceState("", "", hash);

        // Close menu, in case mobile
        //anchor.closest(".nav--tabs").removeClass("is-open");

    },
 
    // If the page has a hash on load, go to that tab
    //pageLoadCorrectTab: function () {
    //    this.changeTab(document.location.hash);
    //}

  scrollTabs: function() {
    
    var widthOfList = function() {
      var itemsWidth = 0;
      jQuery('.nav--tabs > li').each(function() {
        var itemWidth = jQuery(this).outerWidth() + 4; // 4 is to account for the white-space between tabs due to inline-block
        itemsWidth += itemWidth;
      });
      return itemsWidth;
    }

    var addScroll = function() {
      if (jQuery('.nav--tabs').outerWidth() < widthOfList()) {
        jQuery('.nav--tabs').wrap('<div class="tabs_wrapper toggle_target"></div>');
        jQuery('.tabs').prepend('<button type="button" class="btn tabs-btn_left i i-triangle-down" disabled></button><button type="button" class="btn tabs-btn_right i i-triangle-down"></button>');
      }
    }

    jQuery(document).ready(function () {

      if (!jQuery('.tabs--vertical').length && document.documentElement.clientWidth > 815) {

        addScroll();

        jQuery('.nav--tabs > li').each(function() {
          var ulWidth = jQuery('.nav--tabs').outerWidth();
          if ((jQuery(this).position().left + jQuery(this).outerWidth()) > ulWidth) {
            jQuery(this).prev().addClass('js-hidden');
            return false;
          }
        });

        // Scroll right button
        jQuery('.tabs').on('click', '.tabs-btn_right', function() {
          var nextWidth = jQuery('.nav--tabs > .js-hidden + li').outerWidth();

          jQuery('.nav--tabs').animate({left : "-=" + nextWidth + "px"}, 700, function() {
            jQuery('.js-hidden').removeClass('js-hidden').next().addClass('js-hidden');

            if (jQuery('.nav--tabs').position().left < 0) {
              jQuery('.tabs-btn_left').prop('disabled', false);
            }
            if (jQuery('.nav--tabs > li:last-child').hasClass('js-hidden')) {
              jQuery('.tabs-btn_right').prop('disabled', true);
            }
          });
        });

        // Scroll left button
        jQuery('.tabs').on('click', '.tabs-btn_left', function() {
          var prevWidth = jQuery('.nav--tabs > .js-hidden').outerWidth();

          jQuery('.nav--tabs').animate({left : "+=" + prevWidth + "px"}, 700, function() {
            jQuery('.js-hidden').removeClass('js-hidden').prev().addClass('js-hidden');

            if (jQuery('.nav--tabs').position().left >= 0) {
              jQuery('.tabs-btn_left').prop('disabled', true);
            }
            if (!jQuery('.nav--tabs > li:last-child').hasClass('js-hidden')) {
              jQuery('.tabs-btn_right').prop('disabled', false);
            }
          });
        });

      }

    });
  }

}

Tabs.init();
