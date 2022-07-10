$(function(){
    $(".hamburger").on("click", function(){
        // ハンバーガーメニューの位置を設定
        var rightVal = 0;
        if($(this).hasClass("open")) {
            // 位置を移動させメニューを開いた状態にする
            rightVal = -300;
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).removeClass("open");
            $(".hamburger-on").removeClass("open");
            $(".mask-on").removeClass("open");
        } else {
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).addClass("open");
            $(".hamburger-on").addClass("open");
            $(".mask-on").addClass("open");
        }
        $("#global-navi").stop().animate({
            right: rightVal
        }, 200);
    });
});