/*
POWER BY Johu 2018/11/19 21:09:35.
*/

$(function () {
    //编写jQuery代码
    $(".left-plus").click(function () {
        $(".left-content,.left-content-2").toggle(function () {});
        $(".left-plus").toggleClass("glyphicon-remove");

    });
    $(".talk-card-scroll-right").click(function () {
        $(".talk-card-scroll-right,.talk-card-scroll-left").toggle(function () {
            
        });
        $(".talk-card").animate({
            marginLeft:"-150px"
        }, 1000 );

    });
    $(".talk-card-scroll-left").click(function () {
        $(".talk-card-scroll-right,.talk-card-scroll-left").toggle(function () {

        });
        $(".talk-card").animate({
            marginLeft:"0px"
        }, 1000 );

    });
    //登录界面js
    $(".inp-username").focus(function(){
        $(".username").animate({
            marginTop:"-40px",
            fontSize:"14px",
            color:"#000"
        },500)
    });
    $(".inp-username").focusout(function(){
        $(".username").animate({
            marginTop:"-15px",
            fontSize:"16px",
            color:"#000"
        },500)
    });
    $(".inp-pwd").focus(function(){
        $(".pwd").animate({
            marginTop:"15px",
            fontSize:"14px",
            color:"#000"
        },500)
    });
    $(".inp-pwd").focusout(function(){
        $(".pwd").animate({
            marginTop:"45px",
            fontSize:"16px",
            color:"#000"
        },500)
    });

});