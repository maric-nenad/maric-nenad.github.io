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

    $('.dropdown-menu a:first-child').click(function(){   
        $('.more-details-link').css("visibility", "hidden");
    })

    $('.dropdown-menu a:last-child').click(function(){   
        $('.more-details-link').click();
        $('.more-details-link').css("visibility", "hidden");
        $('.page-break-long').css("page-break-before", "always");
    })
});