$(function(){
    if($(".hamburger").hasClass("open")) {
        $('.mask').fadeIn(300);
    } else {
        $('.mask').hide();
    }
    $(".hamburger").on("click", function(){
        $(this).toggleClass("open");
        if($(this).hasClass("open")) {
            $('.mask').fadeIn(300);
        } else {
            $('.mask').fadeOut(300);
        }
    });
});