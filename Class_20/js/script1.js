// https://www.w3schools.com/js/js_object_constructors.asp

// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

// Create two Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// Display age
document.getElementById("demo1").innerHTML =
"My father is " + myFather.age + ". My mother is " + myMother.age + "."; 