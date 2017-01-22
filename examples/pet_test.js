var pet = require("pet.js");
console.log(Pet("lassy"));

describe("Pet", function () {
describe("attributes", function () {
         it("should include a name", function () {
         var lassy = Pet("lassy");
         expect("lassy").to.equal(lassy.name);

});


it("should include a breed", function () {
            var lassy = Pet("lassy");
            expect("breed" in lassy).to.equal(true);
});

it("should include an age", function () {
          var lassy = Pet("lassy");
             expect(lassy.hasOwnProperty("age").to.equal("age"));
});

it("should include an weight", function () {
            var lassy = Pet("lassy");
               expect(lassy.haveOwnProperty("age").to.equal("weight"));
});

});
});

var color = "red";
var speed = 10;
var drive = "go";
var car = {
	color, 
	speed, 
	[drive]: function() {
		console.log("vroom")
	}
};
console.log(car.color);
console.log(car.speed);
car.go();
