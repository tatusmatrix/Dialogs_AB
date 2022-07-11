// hoisted

// funkcijas definēšana ar 
// apgalvojuma palīdzību
function square_statement (number){
  return number * number;
}
const x = square_statement(4);
console.log(x);

// funkcijas definēšana ar 
// izteikmes palīdzību
// "anonīmas" funkcijas piemērs
const square_expression = function (number) {
  return number * number;
}
const y = square_expression(4);
console.log(y);

// rekursīvas funkcijas piemērs
// ne "anonīmas" funkcijas piemērs
const factorial = function fact(n) {
  return n < 2 ? 1 : n * fact(n - 1);
}
//console.log(fact(4)); // būs kļūda
console.log(factorial(3));

// piemērs ar funkciju, kuras arguments (viens no)
// arī ir funkcija
function map(f, a) {
  const result = [];
  //i = 0;
  for (const v of a) {
    //result[i] = f(v);
    //i++;
    result.push(f(v));
  }
  return result;
}

const square_for_array_each_element = function (xs) {
  return xs * xs;
}

const cube_for_array_each_element = function (xc) {
  return xc * xc * xc;
}

const numbers = [0, 1, 2, 5, 10];

const squares = map(square_for_array_each_element, numbers);
console.log(squares);

const cubes = map(cube_for_array_each_element, numbers);
console.log(cubes);

// https://css-tricks.com/how-to-fetch-and-parse-rss-feeds-in-javascript/
// const RSS_URL = `https://www.tvnet.lv/rss`;
const RSS_URL = `https://rss.art19.com/apology-line`;

//fetch(RSS_URL, { mode: 'no-cors'})
fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => console.log(data));