$(document).ready(function () {
  function awaiter() {
    setTimeout(function () {
      var el = document.getElementsByClassName("turn");
      // console.log(el[0].className);
      el[0].className = el[0].className.split(" ")[0];
      document.getElementsByClassName("second")[0].className += " turn";
    }, 3 * 1000);

    setTimeout(function () {
      var el = document.getElementsByClassName("turn");
      // console.log(el[0].className);

      el[0].className = el[0].className.split(" ")[0];

      document.getElementsByClassName("third")[0].className += " turn";
    }, 2 * 3 * 1000);

    setTimeout(function () {
      var el = document.getElementsByClassName("turn");
      // console.log(el[0].className);

      el[0].className = el[0].className.split(" ")[0];
      document.getElementsByClassName("first")[0].className += " turn";

      requestAnimationFrame(awaiter);
    }, 3 * 3 * 1000);
  }
  requestAnimationFrame(awaiter);
  $('a[href^=#]').on("click", function (e) {
    var t = $(this.hash);
    console.log("hash", t);
    var t = t.length && t || $('[name=' + this.hash.slice(1) + ']');
    if (t.length) {
      var tOffset = t.offset().top;
      $('html,body').animate({ scrollTop: tOffset - 20 }, 'slow');
      e.preventDefault();
    }
  });
});
