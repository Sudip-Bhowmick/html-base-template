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
// document.getElementById("current_year").innerHTML = new Date().getFullYear();

/* banner slider */
// $(".bannerslider").slick({
//     dots: true,
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
// });

// copy text
for (let i = 0; i < 10; i++) {
    $( ".getcoderesult" ).each(function( index ) {
        $(this).attr('id', i)
        $('.copyimg').attr('onclick', 'CopyToClipboard(' + i + ')')
    });
}

function CopyToClipboard(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Text has been copied, now paste in the text-area")
  }
}