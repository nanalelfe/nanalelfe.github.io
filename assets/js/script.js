function main() {

    /* -----------------------------------------------------------------------------------
     * Parallax effect
     * -----------------------------------------------------------------------------------*/

    var $documentElement = $(document);
    var $parallaxBg = $('header.parallax-bg');

    $documentElement.on('scroll', function() {
        var currPosition = $documentElement.scrollTop();
        $parallaxBg.css('background-position', '0 ' + -currPosition/4 + 'px');
    });


    /* -----------------------------------------------------------------------------------
     * Animated Progress Bars
     * -----------------------------------------------------------------------------------*/
    $('.skills li').each(function () {
        $(this).appear(function() {
            $(this).animate({opacity:1,left:"0px"},1200);
            var b = $(this).find("span").attr("data-width");
            $(this).find("span").animate({
                width: b + "%"
            }, 1700, "easeOutCirc");
        });
    });

    /* -----------------------------------------------------------------------------------
     * Go back to the contact div after sending message
     * -----------------------------------------------------------------------------------*/
    if (window.location.href.indexOf('/contact') != -1) {
        console.log("been here");
        scrollToSection('footer', 0);
    }

    /* -----------------------------------------------------------------------------------
     * Make the projects collapsable one at a time
     * -----------------------------------------------------------------------------------*/
    $('.thumb-collapse').on('click',function(){
        $('.collapse').collapse('hide');
    });


    /* -----------------------------------------------------------------------------------
     * Enable menu scrolling
     * -----------------------------------------------------------------------------------*/
    $('body').scrollspy({ target: '.navbar', offset: 70 });

    $('.scroll-link').on('click', function(event){
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToSection(sectionID, 700);
    });

    $('#navbar-toggle').on('click', function (event) {
        event.preventDefault();
        $('#main-nav').toggleClass("open");
    });


}

function scrollToSection(id, speed) {
    var section = '#' + id;
    var $nav = $('#main-nav');
    var offset = $(section).offset().top - 50;
    $('html, body').animate({scrollTop: offset}, speed);

    if ($nav.hasClass("open")) {
        $nav.css("height", "1px").removeClass("in").addClass("collapse");
        $nav.removeClass("open");
    }
}
$(document).ready(main);