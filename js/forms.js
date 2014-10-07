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
        } else {
            jQuery('.f-address-control').removeClass('is-uk, is-row');
            jQuery('.' + findPostcode + ' input, .' + findPostcode + ' .btn, .f-find_address select').prop('disabled', true);
        }
        jQuery('.js-country').text(selected.text());
    });

    jQuery('.f-find_postcode .btn').on('click', function() {
        jQuery('.f-find_address').addClass('u-show');
        jQuery('.f-find_address select').prop('disabled', false);
    });
});