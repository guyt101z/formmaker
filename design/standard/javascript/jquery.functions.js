
/**
 * Set of general functions used in Form Maker
 */

jQuery(document).ready(function(){

    // Required for checkbox processing
    jQuery('.form_label_checkbox input[type=checkbox]').click(function(){
        var value = $(this).is(':checked') ? 'on' : '';
        $('#' + $(this).attr('connected')).val(value);
    });       
    
    // Security variable
    jQuery('input[name=form-send], input[name=form-back], input[name=form-next]').click(function(){
        $('#mwezform input[name=validation]').val('False');
    });
    
    // Required for radio-buttons processing
    jQuery('.form_label_radio input[type=radio]').click(function(){
        var input_id = $(this).attr('name').replace('connected_', '');
        $(this).parents('.form_attribute_content').find('input[name=' + input_id + ']').val($(this).val());
    });   

    jQuery('input[type=hidden][class=validation-type]').each(function(){
        if ($.inArray($('#date-validator').val(), $(this).val().split(',')) != -1) {
            var input = $(this).parent().find('input[type=text]');
            input.attr('autocomplete', 'off');
            input.datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: $('#form-datepicker-format').val(),
                onClose: function(){
                    $(this).blur();
                },
                yearRange: '-150:nnnn'
            });            
        }
    });
    
    jQuery('select.date-year-validation').select2();

    /* File attribute */
    jQuery('a.upload-new-file').click(function() {
        jQuery(this).prev().remove(); /* remove hidden input with previously uploaded image */
        jQuery(this).prev().remove();  /* hide previously uploaded image */
        jQuery(this).next().show(); /* show input for new upload */
    });

});