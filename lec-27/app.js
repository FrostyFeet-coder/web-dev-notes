// $("li").css({
//   color: "red",
// });

// // .on()-> addEventListener

// $("button").on("click", function () {
//   console.log("mai hu event listner ");
// });

// $("li").on("click", function () {
//   $(this).css("color", "green");
// });

// $("input").keyup(function () {
//   console.log("key upar aagyi ");
// });

// $("input").keyup(function () {
//     console.log("key upar aagyi ");
//     console.log($(this).val("bhaukal"));
// });

$("#fade-out").on("click", function () {
  // $("#container").fadeOut();
  $("#container").slideUp();
});

$("#fade-in").on("click", function () {
  $("#container").fadeIn();
});
