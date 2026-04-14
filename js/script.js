/* $(function() {
  $(".next").click(function() {
    $(this).closest(".step").hide().next(".step").show();
  });

  $(".prev").click(function() {
    $(this).closest(".step").hide().prev(".step").show();
  });
});
*/

$(function() {
  $(".step").click(function() {
    $(this).closest(".step").hide().next(".step").show();
  });
});

