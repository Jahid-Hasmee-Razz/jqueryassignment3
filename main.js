$(document).ready(function () {
  let div = $(".box");
  $("#start").click(function () {
    div.slideDown(2000)
      .animate({
        width: '300px',
        opacity: '0.5'
      }, "slow")
      .animate({
        height: '300px',
        opacity: '0.4'
      }, "slow")
      .animate({
        fontSize: '4em'
      }, "slow")
      .animate({
        height: '100px',
        opacity: '0.4'
      }, "slow")
      .animate({
        fontSize: '2em'
      }, "slow")
      .animate({
        width: '100px',
        opacity: '0,5'
      }, "slow")
      .slideUp(2000, function () {
        alert("Congratulations!You Have Successfuly Completed Your Animation.")
      });
    alert("Warning! An Animation Will Start Soon.Click Ok To Confirm. ")

  });
  // JQUERY STOP METHOD
  $("#flip").click(function () {
    alert("A panel Will Slide Down Very Soon! To Stop Anywhere ,Click The Stop Button,Below The Panel.")
    $("#panel").slideToggle(3000);
  });
  $("#stop").click(function () {
    $("#panel").stop();
    alert("Sliding Panel Stopped!")
  });
  // JQUERY GET CONTENT
  $(".getbtn").click(function () {
    alert("Text:" + $("#test").text());
  });
  $("#getbtn").click(function () {
    alert("HTML:" + $("#test").html());
  });
  $(".show").click(function () {
    alert("YourPassWord:" + $("#pass").val());
  });

});