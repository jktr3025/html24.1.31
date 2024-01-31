$(function(){
    var check = false;
    setInterval(function(){
        if(check == true){
            $(".world").css({"background-position":"-=10"})
        }//if
    }, 30)//setInterval

    $(".start").click(function(){
        if(check == true){
            check=false;
            $(".button").removeClass("active");
            $(".button").removeClass("speed");
        }else{
            check=true;
            $(".button").addClass("active");
            $(".button").addClass("speed");
        }//if
    })//start").click

    $(window).keydown(function(e){
        console.log(e);
        if(e.keyCode == 13){
            // keyCode == 13은 엔터
            $(".start").click();
        }
    })//window).keydown


})//jquery