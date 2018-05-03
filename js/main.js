$(document).ready(function(){
    
    $("#btn-scroll").click(function (){
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 1000);
    });
    
    $("#btn-menu").click(function (){
        $('.mobile-navigation-wrap').slideToggle();
    });
    
    /** Navigation **/
    $("#about-nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 1000);
    });
    
    $("#menu-nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#menu").offset().top
        }, 1000);
    });
    
    $("#jobs-nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#jobs").offset().top
        }, 1000);
    });
    
    $("#contact-nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
    
    //mobile nav
    
    $("#about-mobile-nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 1000);
    });
    
    $("#menu-mobile-nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#menu").offset().top
        }, 1000);
    });
    
    $("#jobs-mobile-nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#jobs").offset().top
        }, 1000);
    });
    
    $("#contact-mobile-nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
    
    //menu
    
    $(".starters a").click(function (){
        $(".starters .menu-content").slideToggle();
        return false;
    });
    
    $(".salads a").click(function (){
        $(".salads .menu-content").slideToggle();
        return false;
    });
    
    $(".kids a").click(function (){
        $(".kids .menu-content").slideToggle();
        return false;
    });
    
    $(".fish-and-chips a").click(function (){
        $(".fish-and-chips .menu-content").slideToggle();
        return false;
    });
    
    $(".peri-chicken a").click(function (){
        $(".peri-chicken .menu-content").slideToggle();
        return false;
    });
    
    $(".wraps-pittas a").click(function (){
        $(".wraps-pittas .menu-content").slideToggle();
        return false;
    });
    
    $(".burgers a").click(function (){
        $(".burgers .menu-content").slideToggle();
        return false;
    });
    
    $(".steaks a").click(function (){
        $(".steaks .menu-content").slideToggle();
        return false;
    });
    
    $(".sides a").click(function (){
        $(".sides .menu-content").slideToggle();
        return false;
    });
    
    $(".magicwall").magicWall({
	maxItemWidth: 350,
	maxItemHeight: 250,
	delay:  650,
	animations: "flipX,flipY,rollOutX,-rollOutX,rollOutY,-rollOutY,slideX,-slideX,slideY,-slideY",
	flipXDuration: 1200,
	flipXEasing: "easeInOutBack",
	flipYDuration: 1200,
	flipYEasing: "easeInOutBack",
	rollOutXDuration: 800,
	rollOutXEasing: "easeOutBounce",
	rollOutYDuration: 800,
	rollOutYEasing: "easeOutBounce",
	slideXDuration: 1500,
	slideXEasing: "easeInOutBack",
	slideYDuration: 1500,
	slideYEasing: "easeInOutBack",
	pauseOnHover: "item"
    });
});



