$(document).ready(function(){
    $("p#dateB").click(function(){
        $("button#dateB").fadeToggle(300)
    });
    $( "div.tool" ).draggable();
    $( "div.ico" ).draggable();
});
