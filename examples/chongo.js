var friends = ["Mike", "Stacy", "Andy", "Rick"]
friends.forEach(function (eachName, index){
console.log(index + 1 + ". " + eachName);
});

var allUserData = [];
function logStuff (userData) {
    if ( typeof userData === "string")
    {
            console.log(userData);
        }
    else if ( typeof userData === "object")
    {
            for (var item in userData) {
                        console.log(item + ": " + userData[item]);
                    }
        }
}
function getInput (options, callback) {
    allUserData.push (options);
    callback (options);
}
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);

var obj = {
    bar: 1,
    foo: 2,
    baz: 3
};
obj.bar = undefined;
obj.foo = null;
delete obj.baz;

for(var i in obj) {
    if (obj.hasOwnProperty(i)) {
        console.log(i, '' + obj[i]);
    }
}

var name = "Michael Jackson";
function showCelebrityName () {
  console.log (name);
}
function showOrdinaryPersonName () {  
  name = "Johnny Evers";
  console.log (name);
}
showCelebrityName (); // Michael Jackson​
showOrdinaryPersonName (); // Johnny Evers​
showCelebrityName (); // Johnny Evers​
function showOrdinaryPersonName () {  
  var name = "Johnny Evers"; // Now name is always a local variable and it will not overwrite the global variable​
  console.log (name);
}
