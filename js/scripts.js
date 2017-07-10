$(document).ready(function(){
  var numbers = [1, 2, 3, 4];
  var foods = ["butter", "sugar", "salt", "milk"]
  numbers.forEach(function(food) {
    $("#item" + numbers).click(function() {
      foods.forEach(function(food) {
        alert("I need" + " " + food);
      });
    });
    });
  });
  $("#item1").click(function() {
    alert("I need butter");
  });
  $("#item2").click(function() {
    alert("I need sugar");
  });
    $("#item3").click(function() {
      alert("I need salt");
  });
    $("#item4").click(function() {
      alert("I need milk");
  });
});
