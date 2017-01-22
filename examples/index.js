var friends  = ["Mike", "Stacy", "Andy", "Rick"]
friends.forEach(function (eachName, index){
console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick​
});

function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}
console.log(foo());

var foo = 1;
function bar() {
   if (!foo) {
      var foo = 10;
   }
   console.log(foo);
}
bar;

