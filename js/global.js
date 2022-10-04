lastScroll = 0;
jQuery(window).on('scroll',function() {    
    var scroll = jQuery(window).scrollTop();
    if(lastScroll - scroll > 0) {
        jQuery("header").removeClass("hideup");
    } else {
        jQuery("header").addClass("hideup");
    }
    lastScroll = scroll;
});

/* header mobile menu */
$( ".hamburger" ).on( "click", function() {
    $(this).toggleClass('open');
    $(this).next().toggleClass('open');
});

/* Current year */
document.getElementById("current_year").innerHTML = new Date().getFullYear();

/* banner slider */
$(".bannerslider").slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});
