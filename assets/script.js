function getScrollBarWidth(){
    var body = $(body);
    var currentWidth = body.width();

    body.addClass("active");
    var scrollBarWidth = body.width() - currentWidth;
    body.removeClass("active");

    if (scrollBarWidth > 0) {
        body.css("margin-left", scrollBarWidth + "px");
    }

    return scrollBarWidth;
}

function toggleOverlay(scrollBarWidth) {
    var $body = $("body");
    var $overlay = $(".overlay");

    if ($body.hasClass("active")){
        $body.removeClass("active");
        $overlay.removeClass("dropped");
    }
    else{
        $body.addClass("active");
        $overlay.addClass("dropped");
        if (scrollBarWidth > 0) {
            $body.css("margin-left", scrollBarWidth + "px");
        }
    }
}

$(function () {
    setInterval(getScrollBarWidth, 100);

    var scrollBarWidth = getScrollBarWidth();

    $(".dropdown").on('click',function(){
        toggleOverlay(scrollBarWidth);
    });
});


