/* global $ */

$("#btn1").click(function(){
    var input = $("#input1").val();
    if(input === "cold"){
        $("#img1").show();
    }else{
        $("#img2").show();
    }
});

$("#btn2").click(function(){
    var input = $("#input2").val();
    if(input === "soup"){
        $("#img3").show();
    }else{
        $("#img4").show();
    }
});

$("#btn3").click(function(){
    var input = $("#input3").val();
    if(input === "snowboarding"){
        $("#img5").show();
    }else{
        $("#img6").show();
    }
});

$("#btn4").click(function(){
    var input = $("#input4").val();
    if(input === "cabin"){
        $("#img7").show();
    }else{
        $("#img8").show();
    }
});

$("#btn5").click(function(){
    var input = $("#input5").val();
    if(input === "no"){
        $("#img9").show();
    }else{
        $("#img10").show();
    }
});

$("#mountains").click(function(){
   $("body").css("background", "url(https://i.ytimg.com/vi/iEec7OygBe8/maxresdefault.jpg)");
   
});