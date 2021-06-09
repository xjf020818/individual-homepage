$(document).ready(function () {
    $(".bbs header span").click(function () {
        $(".post").css("display","block");
    });


    var img =[
        "images/1.jpeg",
        "images/picture.jpeg"
    ];

    function time(){
        var myDate = new Date();
        var day = myDate.getDate();
        var month = myDate.getMonth()+1;
        var year = myDate.getFullYear();
        var hour = myDate.getHours();
        var min = myDate.getMinutes();
        if (min<10) min="0"+min;
        var sec = myDate.getSeconds();
        if (sec<10) sec="0"+min;
        return year+"-"+month+"-"+day+" "+hour+":"+min+":"+sec;
    }

    $('.btn').click(function (){
        var content = $('.content1').val();
        var msg = "<section style='margin-bottom: auto'><ul><li><div style='float: left'><img src="+img[Math.floor(Math.random()*2)]+
            "></div><h1><ul><span>"+content+"</span></ul> </h1> </li>"+time()+"</ul></section>";
        $(".post").css("display","none");
        $(".bbs").append(msg);
        $(".title").val("");
        $(".content").val("");
    });

});
