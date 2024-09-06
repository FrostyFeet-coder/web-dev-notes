console.log($("h1"));
console.log($("#para"));

$("h1").css("color", "red");
$("h1").css("background-color", "green");

$("h1").css({
  color: "pink",
  backgroundColor: "red",
});

console.log($("#new").text("saamrth"));
console.log($("#new").html("<h1> asdad <h1>"));

console.log($("input").attr("type"));
console.log($("input").attr("type","color"));

$("li").first().css("color", "green")
$("html").css("backgroundColor", "black")



$("h1").addClass("red green border");
$("h1").removeClass("red green border");
$("h1").toggleClass("red green border");
console.log($("h1").hasClass("red"));