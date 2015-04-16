//if (document.documentElement.clientWidth < 769) {

jQuery('.toggle_chkbx').on('change', function () {
  var $this = jQuery(this),
      $labelFor = $this.attr('id');

  $this.attr('aria-pressed',
    $this.attr('aria-pressed') == 'true' ? 'false' : 'true'
  );

  //
  if ($this.next('[for=' + $labelFor + ']').next('.flyout,.navbar_flyout').length > 0) {
    if (jQuery('.toggle_chkbx').is(':checked')) {
      jQuery('.flyout_overlay').addClass('is-active');
      jQuery('.toggle_chkbx').not($this).prop('checked', false);
    } else {
      jQuery('.flyout_overlay').removeClass('is-active');
    }
  }
  //setTimeout(function() {
  //    jQuery('.navbar_dd.is-active').not('.flyout_overlay').toggleClass('is-active');
  //}, 400);
});

jQuery('.navbar_flyout .btn--link').on('click', function () {
  var $this = jQuery(this),
      ddItem = $this.innerHeight();
  $this.parent().toggleClass('is-active');
  jQuery('.navbar_flyout .btn--link').not(this).parent().removeClass('is-active');
  if ($this.parent().hasClass('is-active')) {
    jQuery('.flyout_inner').animate({ scrollTop: $this.parent().prevAll().length * ddItem }, 600);
  } else {
    jQuery('.flyout_inner').animate({ scrollTop: 0 }, 800);
  }
});

jQuery('body').on('click', '.flyout_overlay.is-active', function () {
  jQuery(this).removeClass('is-active');
  setTimeout(function () {
    jQuery('.flyout_overlay, .navbar_dd').removeClass('is-active');
    jQuery('.flyout_inner').animate({ scrollTop: 0 });
  }, 400);

  var $chkbx = jQuery('.flyout,.navbar_flyout').prev('.toggle_btn').prev('.toggle_chkbx');
  if ($chkbx.is(':checked')) {
    $chkbx.removeAttr('checked').attr('aria-pressed', 'false');
  }
});
//}

//jQuery('#js-basket').on('click', function() {
//    //var $body = jQuery('#page');
//    jQuery('#js-flyout').toggleClass('is-active');
//    $body.toggleClass('navbar__push--right');
//    jQuery('.flyout__overlay').addClass('is-active');

//    jQuery('.flyout__overlay.is-active,#js-btnClose').on('click', function() {
//        jQuery('.is-active').removeClass('is-active');
//        $body.removeClass('navbar__push--right');
//    });
//});

// jQuery('#toggle-nav > li > a').on('click mouseenter mouseout focus', function() {
//     var $mega = jQuery('.dropdown--mega');
//     $mega.attr('aria-expanded',
//         $mega.attr('aria-expanded') == 'true' ? 'false' : 'true'
//     );
//     $mega.attr('aria-hidden',
//         $mega.attr('aria-hidden') == 'false' ? 'true' : 'false'
//     );
// });

jQuery('.list-collapsable_header a').on('click', function (e) {
  e.preventDefault();
  jQuery(this).parent().toggleClass('is-active');
});



//( function( window ) {
//    'use strict';

//    // http://stackoverflow.com/a/11381730/989439
//    function mobilecheck() {
//        var check = false;
//        (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
//        return check;
//    }

//    // http://www.jonathantneal.com/blog/polyfills-and-prototypes/
//    // !String.prototype.trim && (String.prototype.trim = function() {
//    //     return this.replace(/^\s+|\s+$/g, '');
//    // });

//    function uiSearch(el, options) {  
//        this.el = el;
//        this.inputEl = el.querySelector('#search');
//        this._initEvents();
//    }

//    uiSearch.prototype = {
//        _initEvents : function() {
//            var self = this,
//                initSearchFn = function(ev) {
//                    ev.stopPropagation();
//                    // trim its value
//                    self.inputEl.value = self.inputEl.value.trim();

//                    if( !jQuery(this.el).hasClass('is-open')) { // open it
//                        ev.preventDefault();
//                        self.open();
//                    }
//                    else if(jQuery(this.el).hasClass('is-open') && /^\s*$/.test(self.inputEl.value)) { // close it
//                        ev.preventDefault();
//                        self.close();
//                    }
//                }

//            jQuery(this.el).on('click', initSearchFn);
//            jQuery(this.el).on('touchstart', initSearchFn);
//            jQuery(this.inputEl).on('click', function(ev) { ev.stopPropagation(); });
//            jQuery(this.inputEl).on('touchstart', function(ev) { ev.stopPropagation(); } );
//        },
//        open : function() {
//            var self = this;
//            jQuery(this.el).addClass('is-open');
//            // focus the input
//            if(!mobilecheck()) {
//                this.inputEl.focus();
//            }
//            // close the search input if body is clicked
//            var bodyFn = function(ev) {
//                self.close();
//                //this.removeEventListener( 'click', bodyFn );
//                //this.removeEventListener( 'touchstart', bodyFn );
//            };
//            jQuery(document).on('click', bodyFn);
//            jQuery(document).on('touchstart', bodyFn);
//        },
//        close : function() {
//            this.inputEl.blur();
//            jQuery(this.el).removeClass('is-open');
//        }
//    }

//    // add to global namespace
//    window.uiSearch = uiSearch;

//} )( window );
