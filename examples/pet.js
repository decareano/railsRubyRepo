function Pet(name, breed, age, weight) {
  var newPet = {};
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.weight = weight;
  this.sleep = function () {
  return "zzzzzzzz"
  };
}

module.exports = Pet;
