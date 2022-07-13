// objekta definēšana ar literāļa palīdzību
const car = { type: "Fiat", model: "500", color: "white" };

// objekta īpašības (property) izgūšana
// console.log(car.type);
// console.log(car["type"]);

// objekts ar metodi
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
// + savs piemērs

// Māra piemērs
/*
const EU = {
  countries: ["Latvija", "Lietuva", "Cehija"],
  EU_classification: function () {
    return this.countries == prompt("Enter country name") ? "EU" : "Not EU";
  },
};
*/

let prompt_value = prompt("Enter country name:");

function EU_country_find(value, index, array) {
  console.log(prompt_value);
  console.log(value);
  return value == prompt_value;}

const EU = {
  countries: ["Latvija", "Lietuva", "Cehija"],
  // prompt_value: prompt("Enter country name:"),
/*  EU_country_find: function (value, index, array) {
    // console.log(this.prompt_value);
    console.log(prompt_value);
    console.log(value);
    // return value == this.prompt_value;},
    return value == prompt_value;},*/
  EU_classification: function () {
    // return this.countries.find(this.EU_country_find) == undefined ? "Not EU" : "EU";
    return this.countries.find(EU_country_find) == undefined ? "Not EU" : "EU";
  },
};
