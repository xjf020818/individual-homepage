function showTime() {
    var myDate= new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth();
    var date =myDate.getDate();
    var hour = myDate.getHours();
    var minutes = myDate.getMinutes();
    var seconds = myDate.getSeconds();
    if (hour<10)
        hour="0" +hour;
    if (minutes<10)
        minutes ="0"+minutes;
    if (seconds<10)
        seconds="0"+seconds;
    document.getElementById("time").innerHTML=year+"年"+month+"月"+date+"日"+hour+":"+minutes+":"+seconds;
    setTimeout("showTime()",1000);
}
window.onload = showTime;
