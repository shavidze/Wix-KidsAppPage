$(document).ready(function() {
  function awaiter() {
    setTimeout(function() {
      var el = document.getElementsByClassName("turn");
      // console.log(el[0].className);
      el[0].className = el[0].className.split(" ")[0];
      document.getElementsByClassName("second")[0].className += " turn";
    }, 3 * 1000);

    setTimeout(function() {
      var el = document.getElementsByClassName("turn");
      // console.log(el[0].className);

      el[0].className = el[0].className.split(" ")[0];

      document.getElementsByClassName("third")[0].className += " turn";
    }, 2 * 3 * 1000);
    
    setTimeout(function() {
      var el = document.getElementsByClassName("turn");
      // console.log(el[0].className);

      el[0].className = el[0].className.split(" ")[0];
      document.getElementsByClassName("first")[0].className += " turn";

      requestAnimationFrame(awaiter);
    }, 3 * 3 * 1000);
  }
  requestAnimationFrame(awaiter);
});
