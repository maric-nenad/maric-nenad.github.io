$(document).ready(function(){

    console.log('Welcome');

    $('[data-toggle="tooltip"]').tooltip(); 

    $('.more-details-link').click(function() {
        $(this).next('.more-details-content').toggle();

        if ($(this).next('.more-details-content').is(':visible')) {
            $(this).text('Less..')
        } else {
            $(this).text('More..')
        }
    });
});