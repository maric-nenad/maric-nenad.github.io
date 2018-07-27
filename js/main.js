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

    // Short version
    $('.dropdown-menu a:first-child').click(function(){   
        if ($('.more-details-content').is(':visible')) {
            $('.more-details-content').toggle();
        }
        $('.more-details-link').css("visibility", "hidden");
        $('.page-break-long').css("page-break-before", "auto");
    })

    // Long version
    $('.dropdown-menu a:last-child').click(function(){   
        $('.more-details-content').toggle();
        $('.more-details-link').css("visibility", "hidden");
        $('.page-break-long').css("page-break-before", "always");
    })
});