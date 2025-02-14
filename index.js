$(document).ready(function () {
    $(".container .arrow i").click(function (){
        $(".container .container-fluid").toggle("slow");
    })
    let count = $(".notification.unread").length;
    $("#count").text(count);
    $(".notification.unread").click(function () {
        if ($(this).hasClass("unread")) {
            $(this).find(".unread-span").remove(); 

            count--; 
            $("#count").text(count); 
        }
    });
    $(".main-btn").click(function () {
        $(".unread-span").remove();
        count = 0;
        $("#count").text(count);
    });
});
