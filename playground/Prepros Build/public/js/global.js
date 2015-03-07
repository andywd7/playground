jQuery(document).ready(function() {
    // Modernizr SVG / PNG fallback
    if (!Modernizr.svg) {
        jQuery('#js-logo').attr('src', function () {
            return jQuery(this).attr('src').replace('.svg', '.gif');
        });
    }

    jQuery(function () {
        //@prepros-append navbar.js
            new uiSearch(document.getElementById('js-navbarSearch'));

        //@prepros-append jquery-accessibleMegaMenu.js
            // initialize a selector as an accessibleMegaMenu
            // jQuery('#navbar-nav').accessibleMegaMenu();
    });
});