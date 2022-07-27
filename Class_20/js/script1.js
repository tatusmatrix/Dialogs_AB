// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
// https://developer.mozilla.org/en-US/docs/Glossary/Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#data_property
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
// https://www.w3schools.com/js/js_object_properties.asp
// https://www.w3schools.com/js/js_object_prototypes.asp

// https://www.w3schools.com/js/js_object_constructors.asp

// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.photoDirectory = "c:\temp\1.jpg";
    // this.photoBlobData = ...;
    this.name = function() {
        return this.firstName + " " + this.lastName;
      };
  }

// Create two Person objects
const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather);

Person.prototype.nationality = "Latvian";
const myMother = new Person("Sally", "Rally", 48, "green");
console.log(myMother);

// Display age
document.getElementById("demo1").innerHTML =
"My father is " + myFather.age + ". My mother is " + myMother.age + "."; 

console.log(myFather);

myFather.nationality = "English";
// myFather.nationality.enumerable = false;
console.log(myFather);

//myFather.name = function () {
//    return this.firstName + " " + this.lastName;
//  };
console.log(myFather.name());

Object.defineProperty(myFather, "get_nationality", {
    get: function () {
      return this.nationality;
    },
  });
console.log(myFather.get_nationality);

/*
Object.defineProperty(myFather, "job", {
    value: "officer",
    writable: true,
    enumerable: false});
for (let current_property in myFather){
    console.log(current_property);
}
*/
