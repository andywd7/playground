jQuery(document).ready(function () {
  // Modernizr SVG / PNG fallback
  if (!Modernizr.svg) {
    jQuery('#js-logo').attr('src', function () {
      return jQuery(this).attr('src').replace('.svg', '.gif');
    });
  }

  // Modernizr jQueryUI datepicker fallback
  if (!Modernizr.inputtypes.date) {
    jQuery('input[type=date]').addClass('js-datepicker');
  }

  // Modernizr addTest for pointerevents detection
  Modernizr.addTest("pointerevents", function () {
    var a = document.createElement("x");
    a.style.cssText = "pointer-events:auto";
    return a.style.pointerEvents === "auto";
  });
  // Modernizr no-pointerevents input[type=submit] with icon
  if (!Modernizr.pointerevents) {
    jQuery('.has-icon .i').on('mouseover mouseleave click', function (e) {
      var $btn = jQuery(this).siblings('.btn:not(:disabled)');
      if (e.type == 'mouseover') {
        $btn.addClass('is-hover');
      } else if (e.type == 'mouseleave') {
        $btn.removeClass('is-hover');
      } else {
        $btn.click();
      }
    });
    //jQuery('.has-icon input[type=submit]').on('click', function () {
    //  console.log('clicked');
    //});
  }

  // 'Disable' any link with class .is-disabled
  jQuery('a.is-disabled').on('click', function (e) {
    e.preventDefault();
  });

  jQuery(function () {
    //@prepros-append navbar.js
    //new uiSearch(document.getElementById('js-navbarSearch'));

    //@prepros-append jquery-accessibleMegaMenu.js
    // initialize a selector as an accessibleMegaMenu
    // jQuery('#navbar-nav').accessibleMegaMenu();

    //@prepros-append jquery-ui.js
  });
});