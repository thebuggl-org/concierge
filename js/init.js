(function ($) {
    $(function () {
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
    }); // end of document ready
    $(window).scroll(function () {
        var altura=$("#barra").height();
        var alpha=$(window).scrollTop()/altura;
        if ($(window).scrollTop() <=altura) {
            $("#barra").css("background-color", 'rgba(253,79,120,' + alpha/4+  ')');
            $("#barra").html(color);
        }else{
            $("#barra").css({"background-color": "rgba(253,79,120," + 0.6 + ")"});
        }
    })
})(jQuery); // end of jQuery name space