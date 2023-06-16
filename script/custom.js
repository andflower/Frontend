// $(document).ready(function(){
//     $("p").click(function(){
//         alert("p태그 클릭 후의 경고창")
//     });
// });

$("p").css({
    "display" : "none"
})

// $('.show-btn').click(function(){
//     $("p").css({
//         "display" : "block"
//     });
// });

// $('.hide-btn').click(function(){
//     $("p").css({
//         "display" : "none"
//     });
// });

$('.show-btn').click(function(){
    $("p").show({});
});

$('.hide-btn').click(function(){
    $("p").hide({});
});