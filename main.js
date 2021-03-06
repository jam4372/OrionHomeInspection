$(document).ready(function() {
    $("#nav_services, #btn_services, #footer_services").click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $("#ft_services").offset().top - ($("nav").height() + 30) }, 500);
    })

    $("#nav_overview, #btn_overview, #footer_overview").click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $("#ft_overview").offset().top - ($("nav").height() + 30) }, 500);
    })

    $("#nav_faq, #btn_faq, #footer_faq").click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $("#ft_faq").offset().top - ($("nav").height() + 30) }, 500);
    })

    $("#nav_about, #footer_about").click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $("#ft_about").offset().top - ($("nav").height() + 30) }, 500);
    })

    $("#nav_contact").click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $("#contact").offset().top }, 500);
    })

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    $("#jb_contacts").click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $("#ft_request").offset().top - ($("nav").height() + 30) }, 500);
    })
})