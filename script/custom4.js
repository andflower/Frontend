$(".add-btn").click(function(){
    // fadeIn(unit ms)
    $(".container div").addClass("active");
});

$(".remove-btn").click(function(){
    $(".container div").removeClass("active");
});

$(".toggle-btn").click(function(){
    $(".container div").toggleClass("active");
});