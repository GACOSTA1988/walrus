// $(document).ready(function() {
//   $(".clickable").click(function() {
//     $(".initially-showing").toggle();
//     $(".initially-hidden").toggle();
//     $(".lamprey").toggle();
//   });
// });
$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
