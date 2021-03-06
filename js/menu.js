$(document).ready(function(){
	$('#nav-icon3').click(function(){
        $(this).toggleClass('open');
        $(".mobile__nav").toggleClass("mobile__nav-show");
    });
    $(".mobile__nav ul li").click(function(){
        $("#nav-icon3").toggleClass('open');
        $(".mobile__nav").toggleClass("mobile__nav-show");
    });
});

function show() {
    var food = ["appetizers", "ramen", "rice", "drinks", "desserts", "alcohol"];
    var category = event.target.innerHTML.toLowerCase();
    for(var i = 0; i < 6; i++) {
        if(category == food[i]){
            document.querySelector("." + category + "__row .menu__content").classList.toggle("no-height");
        }
    }
}

function home() {
    var goTo = $(".contain");
        var top = goTo.offset().top;
        top-=0;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
}

$(document).on('scroll', function() {
    if($(this).scrollTop()+100>=$("#aboutus").position().top){
        $(".backtotop").addClass("opacity");
        $("nav").css({
            backgroundColor: "black"
        });
    }
    else {
        $(".backtotop").removeClass("opacity");
        $("nav").css({
            backgroundColor: "unset"
        });
    }
});

function backToTop() {
    $('html,body').animate({scrollTop: 0}, 'slow');
    return false;
}

$(window).on("load",function(){
    $("body").css({
        overflow: "unset"
    });
    $(".loader").fadeOut("slow");
});