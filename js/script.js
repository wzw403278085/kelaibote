/**
 * Created by Administrator on 2017/9/20 0020.
 */

$(document).ready(function(){
    $(".form ul li").click(function(e){
        e.stopPropagation();
        var n=$(this).index();
        $(this).addClass("cur").siblings("").removeClass("cur");
        $(this).parent().siblings(".form_con").children(".form_box").eq(n).css("display","block").siblings().css("display","none");
    });

    $(".sub ul li").click(function(e){
        e.stopPropagation();
        var n=$(this).index();
        $(this).addClass("cur").siblings("").removeClass("cur");
        $(this).parent().siblings(".sub_box").children(".subject_con").eq(n).css("display","block").siblings().css("display","none");
    });

    $(".new .btn li").click(function(e){
        e.stopPropagation();
        var n=$(this).index();
        $(this).addClass("cur").siblings("").removeClass("cur");
        $(this).parent().siblings(".new_con").children(".new_box").eq(n).css("display","block").siblings().css("display","none");
    });


    //食谱轮播
    var n=0;
    var TuImg=$(".con ul li");
    for(var i=0;i<TuImg.length;i++){
        if(i==0){
            $(".pagNav").append("<a class='cur'></a>");
        }else{
            $(".pagNav").append("<a></a>");
        }
    }

    $(".right").click(function(){
        n++;
        if(n>TuImg.length-1){
            n=0;
        }
        $(this).siblings("#ul").children("li").eq(n).fadeIn(400).siblings().fadeOut(400);
        $(this).siblings(".pagNav").children("a").eq(n).addClass("cur").siblings().removeClass("cur");
    });

    var c=setInterval(function(){
        $(".right").click();
    },3000);
    $(".banner").hover(function(){
        clearInterval(c);
    },function(){
        c=setInterval(lunbo,3000);
    });

    //手机端导航


    var screeW=$(window).width();
    if(screeW<=760){
        $("nav .navBtn").click(function(e){
            e.stopPropagation();
            $(this).siblings(".navUl").stop().slideDown();
        });
        $(document).click(function(e){
            e.defaultPrevented();
            e.stopPropagation();
            $("nav .navUl").stop().slideUp();
        });
    }


});


//banner轮播
window.onload = function(){
    var mySwiper = new Swiper('.swiper-container',{
        pagination: '.pagination',
        loop:true,
        autoplay:3000,
        paginationClickable: true,
        onSlideChangeStart: function(){
            //回调函数
        }
    });
};

