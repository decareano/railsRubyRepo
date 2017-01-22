

var name = "john";
var foo = function () {
    // exists only in the body
     name = "jane";
};
foo(name);
console.log(name);

var name = "richard";
function showName() {
	 name = "Jack";
	 console.log(name);
}

console.log(name)

var name = "Richard";
if (name) {
	name = "Jack"; 
	console.log (name); 
}
console.log (name); 




var greet = function () {
	console.log("hello");
};

var shakeHands = function (name) {
	 name = "lamela";
	console.log("shakes hand");
};

var introduce = function (actOne, actTwo) {
	actOne();
	actTwo();
};

introduce(greet, shakeHands);

function foo () {
	function bar () {
		return 3;
	};
	return bar ();
	function bar () {
		return 8;
	};
};



var foo = 1;
function  bar() {
	if (!foo) {
		var foo = 10;
	}
	console.log(foo);
}
bar();

var x = 1;
console.log(x); // 1
if (true) {
	var x = 2;
	console.log(x); // 2
}
console.log(x); // 2

function test() {
	
	bar();
	var foo = function () {
		console.log("it aint running")
	}

    function bar() { 
    	console.log("it will print")
    }
}
test();


var foo = function () {
	console.log("foo only gets hoisted")
};
function bar () {
    console.log("bar and body hoisted")
};
var baz = function spam() {
	console.log("only baz will be hoisted")
};

foo();
bar();
baz();



function gee(){
    function car() {
        return 3;
    }
    return car();
    function gee() {
        return 8;
    }
}
gee();

foo(); // TypeError "foo is not a function"
bar(); // valid
baz(); // TypeError "baz is not a function"


var foo = function () {}; // anonymous function expression ('foo' gets hoisted)
function bar() {}; // function declaration ('bar' and the function body get hoisted)
var baz = function spam() {}; // named function expression (only 'baz' gets hoisted)

foo(); // valid
bar(); // valid
baz(); // valid




