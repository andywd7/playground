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

  // 'Disable' any link with class .disabled
  jQuery('a.is-disabled').on('click', function (e) {
    e.preventDefault();
  });

  jQuery('.lt-ie9 .i').each(function () {
    var $this = jQuery(this);
    if ($this.text() == "") {
      $this.addClass('i--only');
    }
  });

  jQuery('lt-ie10 .has-icon .i, lt-ie10 .has-icon--right .i').on('mouseover mouseleave click', function (e) {
      var $btn = jQuery(this).siblings('.btn:not(:disabled)');
      if (e.type == 'mouseover') {
          $btn.addClass('is-hover');
      } else if (e.type == 'mouseleave') {
          $btn.removeClass('is-hover');
      } else {
          $btn.click();
          console.log('clicked');
      }
      //e.stopPropagation();
  });
  jQuery('.lt-ie10 .has-icon input[type=submit],lt-ie10 .has-icon--right input[type=submit]').on('click', function () {
      console.log('clicked');
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