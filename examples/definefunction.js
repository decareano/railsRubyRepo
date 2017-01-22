function greet() {
	console.log("hello");
}
greet();

//named function notice
//we put a name b4 params
// we can use 2 call function

//function expression
var greet = function () {
	console.log("hola");
};

greet();

//functions as values

var greet = function () {
    console.log("learningJS");
};

var shakeHands = function () {
    console.log("shakes hand");
};

var introduce = function (actOne, actTwo) {
    actOne();
    actTwo();
};

introduce(shakeHands, greet);

function persona(nombre, apellido, edad, colorOjos) {
	this.firstName = nombre;
	this.lastName = apellido;
	this.age = edad;
	this.eyeColor = colorOjos;

}

var myparents = new persona("rogelio", "gobelli", 68, "marrones");
var myparents1 = new persona("susana", "julia", 66, "azules");
console.log("my father first name is " + myparents.firstName + 
	" and my mother name is " + myparents1.firstName);
