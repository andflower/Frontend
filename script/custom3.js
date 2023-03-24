// $(".show-btn").click(function(){
//     $("div").slideDown();
// });

// $(".hide-btn").click(function(){
//     $("div").slideUp();
// });

// $(".toggle-btn").click(function(){
//     $("div").slideToggle();
// });

$(".show-btn").click(function(){
    // fadeIn(unit ms)
    $("div").fadeIn("500");
});

$(".hide-btn").click(function(){
    $("div").fadeOut("1000");
});

$(".toggle-btn").click(function(){
    $("div").fadeToggle();
});