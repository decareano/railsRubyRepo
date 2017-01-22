function bar() {
console.log("bar")
} // function declaration ('bar' and the function body get hoisted)

bar(); // valid

function greet() {
  console.log("hello");
}
greet();

var greet = function () {
  console.log("test")
}

var shakeHands = function () {
  console.log("shakes hand")
}

var introduce = function (actOne, actTwo) {
  actOne();
  actTwo();
}

introduce(greet, shakeHands);

function foo () {
var bar = undefined;
var bar = undefined;
bar = function () {
  return 3;
};
return bar();
};
console.log(foo());
