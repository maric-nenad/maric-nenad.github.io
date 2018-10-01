$(document).ready(function(){

    console.log('Welcome');

    // Calculate experience
    function calculateExperience(startDate, endDate){
        if ( typeof endDate == 'undefined') {
            endDate = new Date();
        }

        var diff = Math.abs(endDate - startDate);
        var _months = Math.floor( convertMS(diff).d / 30);
        var _years = Math.floor( _months / 12 );
  
        console.log(_months);
  
        if ( _months < 12 ) {
            return ( _months + " " + 
                     (_months == 1 ? "month" : "months" ));
        } else {
            return ( _years + " " + 
                    (_years == 1 ? "year" : "years")  + " and " +
                     _months % 12 + " " +
                    (_months % 12 == 1 ? "month" : "months" ));
        }
    }
    
    // Convert milliseconds
    function convertMS(ms) {
        var d, h, m, s;
        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        return { d: d, h: h, m: m, s: s }
    };
      
    //DevOps
    var replaceText = "";
    var devOpsStart = new Date(2018, 2, 19);
    var devOpsExp = calculateExperience(devOpsStart);

    replaceText = document.getElementById("devops-exp");
    replaceText.innerHTML = devOpsExp;

    //DBA/DBD
    var dbaStart = new Date(2009, 9, 1);
    var dbaEnd = new Date(2018, 2, 19);
    var dbaExp = calculateExperience(dbaStart, dbaEnd);

    replaceText = document.getElementById("dba-exp");
    replaceText.innerHTML = dbaExp;

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
        print();
    })

    // Long version
    $('.dropdown-menu a:last-child').click(function(){   
        $('.more-details-content').toggle();
        $('.more-details-link').css("visibility", "hidden");
        $('.page-break-long').css("page-break-before", "always");
        print();
    })
});