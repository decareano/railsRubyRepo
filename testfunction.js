
var name = "john";
var foo = function () {
    // exists only in the body
    var name = "jane";
};
foo();
console.log(name);
