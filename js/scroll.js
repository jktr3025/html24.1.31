$(function(){




})//jquery



$(window).scroll(function(){
    var top = $(window).scrollTop();
    console.log(top);
    $(".scroll").text(top);
    $(".world").css({"background-position":top * -1})

    if(top > 500){
        $(".title").addClass("show", 500, "easeInBack");
    }else{
        $(".title").removeClass("show", 500, "easeInBack");
    }//if





})//window