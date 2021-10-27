var cnt = document.querySelector("#cnt");
var buttons = document.querySelectorAll(".btn");
var counter = 0;
Array.from(buttons).forEach(function (button) {
  button.addEventListener("click", function (e) {
    var trgt = e.currentTarget.classList;
    if (trgt.contains("increase")) {
      counter++;
    } else if (trgt.contains("Decrease")) {
      counter--;
    } else {
      counter = 0;
    }
    if (counter > 0) {
      cnt.style.color = "green";
    }
    if (counter < 0) {
      cnt.style.color = "red";
    } else if (counter == 0) {
      cnt.style.color = "black";
    }
    cnt.textContent = counter;
  });
});
