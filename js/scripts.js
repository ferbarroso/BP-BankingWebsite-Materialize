var digits = Math.floor(Math.random() * 9000000000) + 1000000000;

$(document).ready(function() {
  $('select').select();
  $(".card-panel.success").hide();
  $(".btn.submit").click(function() {
    $("div.card-panel.data-entry").addClass("hide");
    $(".card-panel.success").css("display", "block");
    $(".confirmationNumber").text(digits);
  });
});
