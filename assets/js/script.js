function main() {

    /* -----------------------------------------------------------------------------------
     * Toggle chevrons on the Coursework section
     * -----------------------------------------------------------------------------------*/

    $('.course div.collapse').on('shown.bs.collapse', function(e) {
        var $clicked = $(e.target);
        var id = $clicked.attr('id');
        $("a[href*=" + id + "] i").addClass('fa-chevron-up').removeClass('fa-chevron-down');
    });

    $('.course div.collapse').on('hidden.bs.collapse', function(e) {
        var $clicked = $(e.target);
        var id = $clicked.attr('id');
        $("a[href*=" + id + "] i").addClass('fa-chevron-down').removeClass('fa-chevron-up');
    });

    /* -----------------------------------------------------------------------------------
     * Turn off carousel auto sliding
     * -----------------------------------------------------------------------------------*/
    $('.carousel').carousel({
        interval: false
    });

    /* -----------------------------------------------------------------------------------
     * Responsive for the Skills section
     * -----------------------------------------------------------------------------------*/
    if ($(window).width() < 990) {
        var $genSkills = $('div.resume-item.skills .gen-skills');
        $genSkills.html('');

        $genSkills.first().append('<h4>General</h4> <p>Python, Java, C, Javascript, Android, Bash, Verilog, Assembly MIPS</p>');
        $genSkills.first().append('<h4>Databases</h4> <p>PostgreSQL, MongoDB</p>');
        $genSkills.first().append('<h4>Methodologies</h4> <p>UML, Design Patterns</p>');
        $genSkills.first().append('<h4>Web</h4> <p>HTML5/CSS3, jQuery, Node.js, Handlebars.js, Bootstrap</p>');
        $genSkills.first().append('<h4>Tools</h4> <p>Vim, Eclipse, Webstorm, Wing</p>');
        $genSkills.first().append('<h4>Version Control</h4> <p>Git, Subversion</p>');
    }

    /* -----------------------------------------------------------------------------------
     * Parallax effect
     * -----------------------------------------------------------------------------------*/
    /*$(window).load(function(){
        $('#header').parallax("50%", 0.1);
        /*$('aside.languages').parallax("40%", 0.1);
        $('aside.prog-lang').parallax("10%", 0.1);
        $('aside.hobbies').parallax("40%", 0.1);
    });*/



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
    $('body').scrollspy({ target: '.navbar', offset: 300 });

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