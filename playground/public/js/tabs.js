var Tabs = {

  init: function () {
    this.bindUIfunctions();
    this.scrollTabs();
    //this.pageLoadCorrectTab();
  },

  bindUIfunctions: function () {

    // Delegation
    jQuery('.c-tabs')
      .on("click", ".nav--tabs li:not('.is-active') a[href^='#']", function (e) {
        e.preventDefault();
        Tabs.changeTab(this, this.hash);
      })
      .on("click", ".nav--tabs .is-active a", function (e) {
        e.preventDefault();
      });

    jQuery('.c-tabs .toggle_chkbx').on('change', function () {
      jQuery(this).attr('aria-pressed',
        jQuery(this).attr('aria-pressed') == 'true' ? 'false' : 'true'
      );
    });

  },

  changeTab: function (el, hash) {
    var anchor = jQuery(el).attr('href', hash);
    var content = jQuery(el).closest('.c-tabs').next('.c-tabs_content').find(hash);

    // activate correct anchor (visually)
    anchor.parent().addClass("is-active").siblings().removeClass("is-active");

    // activate correct div (visually)
    content.addClass("is-active").siblings().removeClass("is-active");
    // close menu
    jQuery('.c-tabs .toggle_chkbx').prop('checked', '');

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

  scrollTabs: function () {

    var widthOfList = function (el) {
      var itemsWidth = 0;
      jQuery(el).find('li').each(function () {
        var itemWidth = jQuery(this).outerWidth() + 4; // 4 is to account for the white-space between tabs due to inline-block
        itemsWidth += itemWidth;
      });
      return itemsWidth;
    }

    var addScroll = function (el) {

      if (jQuery(el).width() < widthOfList(el)) {
        jQuery(el).wrap('<div class="c-tabs_wrapper toggle_target"></div>');
        jQuery('.c-tabs').prepend('<button type="button" class="btn btn--lg btn--i-only c-tabs-btn_left" disabled><span class="i i-triangle-left"></span></button><button type="button" class="btn btn--lg btn--i-only c-tabs-btn_right"><span class="i i-triangle-right"></span></button>');
      }
    }

    jQuery(document).ready(function () {

      if (!jQuery('.c-tabs--vertical').length && document.documentElement.clientWidth > 815) {

        jQuery('.nav--tabs').each(function() {
          addScroll(this);
        });

        jQuery('.nav--tabs > li').each(function () {
          var ulWidth = jQuery('.nav--tabs').outerWidth();
          if ((jQuery(this).position().left + jQuery(this).outerWidth()) > ulWidth) {
            jQuery(this).prev().addClass('js-hidden');
            return false;
          }
        });

        // Scroll right button
        jQuery('.c-tabs').on('click', '.c-tabs-btn_right', function () {
          var $this = jQuery(this);
          $wrapper = $this.siblings('.c-tabs_wrapper'),
          $tabs = $wrapper.find('.nav--tabs'),
          $nextWidth = $wrapper.find('.nav--tabs > .js-hidden + li').outerWidth();

          $tabs.animate({ left: "-=" + $nextWidth + "px" }, 700, function () {
            jQuery('.js-hidden').removeClass('js-hidden').next().addClass('js-hidden');

            if (jQuery('.nav--tabs').position().left < 0) {
              $this.prev('.c-tabs-btn_left').prop('disabled', false);
            }
            if (jQuery('.nav--tabs > li:last-child').hasClass('js-hidden')) {
              $this.prop('disabled', true);
            }
          });
        });

        // Scroll left button
        jQuery('.c-tabs').on('click', '.c-tabs-btn_left', function () {
          var $this = jQuery(this);
          $wrapper = $this.siblings('.c-tabs_wrapper'),
          $tabs = $wrapper.find('.nav--tabs'),
          $prevWidth = $wrapper.find('.nav--tabs > .js-hidden').outerWidth();

          $tabs.animate({ left: "+=" + $prevWidth + "px" }, 700, function () {
            jQuery('.js-hidden').removeClass('js-hidden').prev().addClass('js-hidden');

            if (jQuery('.nav--tabs').position().left >= 0) {
              $this.prop('disabled', true);
            }
            if (!jQuery('.nav--tabs > li:last-child').hasClass('js-hidden')) {
              $this.next('.c-tabs-btn_right').prop('disabled', false);
            }
          });
        });

      }

    });
  }

}

Tabs.init();
