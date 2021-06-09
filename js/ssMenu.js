$(document).ready(function () {
    $(".ss-menu").ssMenu();
});
$(function () {
    var ssMenu = $(".ss-menu");
    var theme = $(".theme-picker").find("span");
    $(theme).click(function (y) {
        y = $(this).attr("class");
        $(ssMenu).removeClass().addClass("ss-menu " + y);
    });
    $(".set-default").click(function () {
        $(ssMenu).removeClass().addClass("ss-menu default");
    });
});