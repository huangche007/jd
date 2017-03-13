/**
 * Created by hc on 2017/3/9.
 */
/***
 * 京东首页
 */
"use strict";
//关闭广告条
$(function () {
    $(".jd_close_card").click(function () {
        $(".header_card").hide();
    });

    $(".top_shortcut .fl").mouseenter(function () {
       $(".top_shortcut .dt").addClass("current_bg");
        $(".top_shortcut .dd").show(100);
    }).mouseleave(function () {
        $(".top_shortcut  .dt").removeClass("current_bg");
        $(".top_shortcut .dd").hide(100);
    });
    $(".my_jd_box").mouseenter(function () {
        $(".my_jd_box .my_jd").addClass("current_bg");
        $(".my_jd_box .my_jd_info").show(100);
    }).mouseleave(function () {
        $(".my_jd_box .my_jd").removeClass("current_bg");
        $(".my_jd_box .my_jd_info").hide(100);
    });

    $(".web_nav_box").mouseenter(function () {
        $(".web_nav_box .web_nav").addClass("current_bg");
        $(".web_nav_box .web_nav_info").show(100);
    }).mouseleave(function () {
        $(".web_nav_box .web_nav").removeClass("current_bg");
        $(".web_nav_box .web_nav_info").hide(100);
    });

    $(".nav_dd li").each(function (index,ele) {
        $(ele).mouseenter(function () {
            $(".nav_dd li").removeClass("nav_menu_bg");
            $(this).addClass("nav_menu_bg");
        }).mouseleave(function () {
            $(this).removeClass("nav_menu_bg");
        });
    });
    //动态创建轮播小圆点
    var $lis = $(".jd_main_slider").children("ul").children();
    var ul =$(".jd_main_slider ul").get(0);
    var length = $lis.length;
    $(".clcles").append("<ol></ol>");
    $("ol").addClass("ol_circles");
    for(var i=0;i<length - 1;i++){
        $(".ol_circles").append("<li></li>");
    }
    var olLis = $("#my_clcles .ol_circles li");

    for(var i=0; i<olLis.length;i++)
    {
        $("#my_clcles .ol_circles li").get(i).index = i;  // 获得当前第几个小li 的索引号
        $("#my_clcles .ol_circles li").get(i).onmouseover = function() {
            for(var j=0;j<olLis.length;j++)
            {
                $("#my_clcles .ol_circles li").get(i).className = "";  // 所有的都要清空
            }
            this.className = "clcles_current";

        }
    }

    $(".jd_main_slider").mouseenter(function () {
       $("#arrow").show();
    }).mouseleave(function () {
        $("#arrow").hide();
    });

    $(".adv_items li").each(function (index,ele) {
        var $index=0;
        $(ele).mouseenter(function () {
            $(".adv_items li").removeClass("tab_current");
            if(index%2==0){
                $index = index;
                $(ele).addClass("tab_current");
                $(".tab_items div").each(function (index,mele) {
                    if($index === index){
                       $(this).show();
                    }else {
                        $(this).hide();
                    }
                });
            }


        });

    });
    $(".left_nav_item").each(function (index,ele) {
       $(ele).mouseenter(function () {
           $(".left_nav_item").removeClass("current_left_bg");
           $(ele).addClass("current_left_bg");
       })
    });
    //
    //$(".not_eng_item").each(function (index,ele) {
    //   $(ele).mouseenter(function () {
    //       $(".not_eng_item").removeClass("not_eng_bg");
    //       $(ele).addClass("not_eng_bg");
    //   })
    //});
    //固定导航滚动自动切换
    var quality_top = $("#quality").offset().top-500;
    var love_top = $("#love").offset().top-500;
    var phone_top = $("#phone").offset().top-500;
    var computer_top = $("#computer").offset().top-500;
    var player_top = $("#player").offset().top-500;
    var loveeat_top = $("#loveeat").offset().top-500;
    var mon_baby_top = $("#mon_baby").offset().top-500;
    var car_book_top = $("#car_book").offset().top-500;
    var virtual_top = $("#virtual").offset().top-500;
    var not_eng_top = $("#not_eng").offset().top-500;
    //根据位置计算左边固定导航栏什么时候出现和消失
    $(window).scroll(function(){
        var scroH = $(this).scrollTop();
        scroH>=1500 ?  $(".left_nav_fix").show(): $(".left_nav_fix").hide();
        if(scroH>=quality_top){
            set_cur(".quality");//设置状态
        }
        if(scroH>=love_top){
            set_cur(".love");
        }
        if(scroH>=phone_top){
            set_cur(".phone");
        }
        if(scroH>=computer_top){
            set_cur(".computer");
        }
        if(scroH>=player_top){
            set_cur(".player");
        }
        if(scroH>=loveeat_top){
            set_cur(".loveeat");
        }
        if(scroH>=mon_baby_top){
            set_cur(".mon_baby");
        }
        if(scroH>=car_book_top){
            set_cur(".car_book");
        }
        if(scroH>=virtual_top){
            set_cur(".virtual");
        }
        if(scroH>=not_eng_top){
                set_cur(".not_eng");
        }

    });

    $(".left_nav_item a").click(function() {
        var el = $(this).attr('class');
       var arr= el.split(" ");
        var idName = null;
        for (var i=0;i<arr.length;i++){
            idName = arr[0];
        }

        $('html, body').animate({
            scrollTop: $("#"+idName).offset().top
        }, 300);
        //切换菜单样式
        $(this).addClass("current_left_bg").parent().siblings().find("a").removeClass("current_left_bg");
    });

    function set_cur(n){
        if($(".left_nav_item a").hasClass("current_left_bg")){
            $(".left_nav_item a").removeClass("current_left_bg");
            //console.log("1");
        }
        $(".left_nav_item a"+n).addClass("current_left_bg");
        //console.log("2");
    }
    
    $(".bang_item").each(function (index,ele) {
        var $index = index;
        $(ele).mouseenter(function () {
            $(".bang_item").removeClass("current_tab_bg");
            $(this).addClass("current_tab_bg");
            $(".tab_all div").hide();
            $(".tab_all div").get($index).style.display = "block";

        });
    });

    $(".skill_goods_items").mouseenter(function () {
        $("#arr").show();
    }).mouseleave(function () {
        $("#arr").hide();
    });

    $("#right").click(function () {
        target -= 1000;
    });


    $("#left").click(function () {
        target += 1000;
    });

    //缓动动画
    var leader = 0,target = 0;
    setInterval(function() {
        if(target >= 0)
        {
            target = 0;
        }
        else if(target <= -1000)
        {
            target = -1000;
        }
        leader = leader + (target - leader) / 10;
        $(".skill_box_ul").get(0).style.left = leader + "px";
    },30)
    $(".back_top").click(function(){
        goTop($(this));
    });
    function goTop(className){
            var sc=$(window).scrollTop();
            $('body,html').animate({scrollTop:0},300);
    }
});
