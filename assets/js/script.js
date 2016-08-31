function main() {

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