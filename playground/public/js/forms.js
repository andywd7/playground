jQuery(document).ready(function() {
    jQuery('.js-findCountry').on('change', function() {
        var selected = jQuery('option:selected', this),
            findPostcode = 'f-find_postcode';
        if (selected.parent()[0].id == "js-uk") {
            jQuery('.f-address-control').removeClass('is-row').addClass('is-uk');
            jQuery('.' + findPostcode + ' input, .' + findPostcode + ' .btn').prop('disabled', false);
        } else if (selected.parent()[0].id == "js-restOfWorld") {
            jQuery('.f-address-control').removeClass('is-uk').addClass('is-row');
            jQuery('.' + findPostcode + ' input, .' + findPostcode + ' .btn, .f-find_address select').prop('disabled', true);
            jQuery('.f-find_address').removeClass('u-show');
        } else {
            jQuery('.f-address-control').removeClass('is-uk, is-row');
            jQuery('.' + findPostcode + ' input, .' + findPostcode + ' .btn, .f-find_address select').prop('disabled', true);
            jQuery('.f-find_address').removeClass('u-show');
        }
        jQuery('.js-country').text(selected.text());
    });

    jQuery('.f-find_postcode .btn').on('click', function() {
        jQuery('.f-find_address').addClass('u-show');
        jQuery('.f-find_address select').prop('disabled', false);
    });


    //jQuery('.js-edit').on('click', function() {
    //    jQuery(this).closest('tr').find('input[readonly]').removeProp('readonly');
    //});

    jQuery('.js-datepicker').each(function (){
        jQuery(this).datepicker({
            //changeMonth : true,
            //changeYear: true,
            dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            firstDay: 1,
            dateFormat: 'dd/mm/yy',
            showOtherMonths: true
        });
        jQuery(this).find('.ui-state-highlight').removeClass('ui-state-active ui-state-hover');
    });
    jQuery('body').on('click', '.js-datepicker', function() {
        jQuery('.ui-datepicker').find('.ui-state-highlight').removeClass('ui-state-active ui-state-hover');
    });


    jQuery('.js-button').each(function () {
        jQuery(this).button();
    });

    jQuery('.js-radioset').each(function () {
        jQuery(this).buttonset();
    });

    jQuery('.js-dialog').each(function () {
        jQuery(this).dialog({
            autoOpen: false,
            modal: true,
            width: 400,
            buttons: [
                {
                    text: "OK",
                    click: function () {
                        jQuery(this).dialog("close");
                    }
                },
                {
                    text: "Cancel",
                    click: function () {
                        jQuery(this).dialog("close");
                    }
                }
            ],
            open: function (e, ui) {
                // Get the dialog 
                var dialog = jQuery(e.target).parents(".ui-dialog.ui-widget");

                // Get the buttons 
                var buttons = dialog.find(".ui-dialog-buttonpane").find("button");

                var okButton = buttons[0];
                var whatButton = buttons[1];

                // Add class to the buttons
                jQuery(buttons).removeClass("ui-state-default ui-state-focus");
                jQuery(okButton).addClass("btn btn--primary");
                jQuery(whatButton).addClass("btn");
            }
        });
    });

    // Link to open the dialog
    jQuery("#js-dialog-link").click(function (e) {
        jQuery(".js-dialog").dialog("open");
        e.preventDefault();
    });

    jQuery('.js-selectmenu').each(function () {
        jQuery(this).selectmenu({
            position: {
                collision: 'flip'
            }
        });
    });
    //jQuery("#accordion").accordion();

    //var availableTags = [
    //    "ActionScript",
    //    "AppleScript",
    //    "Asp",
    //    "BASIC",
    //    "C",
    //    "C++",
    //    "Clojure",
    //    "COBOL",
    //    "ColdFusion",
    //    "Erlang",
    //    "Fortran",
    //    "Groovy",
    //    "Haskell",
    //    "Java",
    //    "JavaScript",
    //    "Lisp",
    //    "Perl",
    //    "PHP",
    //    "Python",
    //    "Ruby",
    //    "Scala",
    //    "Scheme"
    //];
    //jQuery("#autocomplete").autocomplete({
    //    source: availableTags
    //});

    //jQuery("#tabs").tabs();

    //jQuery("#datepicker").datepicker({
    //    inline: true
    //});

    //jQuery("#slider").slider({
    //    range: true,
    //    values: [17, 67]
    //});

    //jQuery("#progressbar").progressbar({
    //    value: 20
    //});

    //jQuery("#spinner").spinner();

    //jQuery("#menu").menu();

    //jQuery("#tooltip").tooltip();

    // Hover states on the static widgets
    //jQuery("#dialog-link, #icons li").hover(
    //    function () {
    //        jQuery(this).addClass("ui-state-hover");
    //    },
    //    function () {
    //        jQuery(this).removeClass("ui-state-hover");
    //    }
    //);
});