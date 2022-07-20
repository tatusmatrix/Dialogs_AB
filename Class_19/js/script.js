/*
var x1 = 10;
document.getElementById("demo1").innerHTML = `x1=${x1}`;

var x2 = x1;
x2 = 20;
document.getElementById("demo2").innerHTML = "x2="+x2;
document.getElementById("demo3").innerHTML = `and now - x1=${x1}`;
*/

const obj1 = { property1: 10 };
//document.getElementById("demo1").innerHTML = `obj1.property1=${obj1.property1}`;

const obj2 = obj1;
obj2.property1 = 20;
//document.getElementById("demo2").innerHTML = `obj2.property1=${obj2.property1}`;
//document.getElementById("demo3").innerHTML = `and now - obj1.property1=${obj1.property1}`;

Object.defineProperty(obj2, "property2", {
  value: 100,
  enumerable: false,
});

let txt = "";
for (let current_property in obj1) {
  txt += obj1[current_property] + " ";
}

document.getElementById("demo1").innerHTML = txt;
