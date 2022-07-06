/**
 * @name summator
 * @description Sums a and b.
 * @param {Number} a
 * @param {Number} b
 *
 * @returns {Number} summator
 */

function dialogs() {
  //var a = Number(prompt("Ievadiet a vērtību:")), b = Number(prompt("Ievadiet b vērtību:"));
  var a = 10,
    b = 100;
  document.getElementById("summator_1").innerHTML =
    a + " un " + b + " summa ir " + summator(a, b);
}

dialogs();

function summator(a, b) {
  c = a + b;
  return c;
}

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + "<br>";
}
document.getElementById("values_of_array_1").innerHTML = text;

text = "";
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("values_of_array_1").innerHTML = text;

/*
Palūgt liteotājam ierakstīt kādu tekstu (ar prompt)
un saskaitīt cik tājā tekstā ir vārdi, kuru garums > 5.
*/

/*
1. teksta rindas iegūšana:
let text = "fgnlsnjsnldna ,sk n nnvkjn  skjvnsdkj";
let text = prompt("Cien. lietotāj, lūdzu, ievadi kādu teikumu:");
2. skaitīt burtus vārdā, katra atsevišķā vārdā vienmēr sākot no 1
*/
text = "a ab abc abcd abcde abcdef abcdefg";
//text = text + " ";
var burtu_skaitiitaajs_vaardaa = 0;
var simbolu_skaitiitaajs_teikumaa = 0;
N = 5;
for (let x of text) {
  simbolu_skaitiitaajs_teikumaa++;
  if (x == " ") {
    console.log(x + " tā ir atstarpe");
    console.log("Iepriekšējā vārdā bija " + burtu_skaitiitaajs_vaardaa + " burti");
    if (burtu_skaitiitaajs_vaardaa >= N) {
      console.log("Vēl vairāk, iepriekšējā vārdā bija " + N + " un vairāk burti");
    }
    burtu_skaitiitaajs_vaardaa = 0;
  } else {
    burtu_skaitiitaajs_vaardaa++;
    console.log(x + " tas ir " + burtu_skaitiitaajs_vaardaa + ". simbols vārdā");

    if (simbolu_skaitiitaajs_teikumaa == text.length) {
      console.log("Iepriekšējā vārdā bija " + burtu_skaitiitaajs_vaardaa + " burti");
      if (burtu_skaitiitaajs_vaardaa >= N) {
        console.log("Vēl vairāk, iepriekšējā vārdā bija " + N + " un vairāk burti");
      }
      burtu_skaitiitaajs_vaardaa = 0;
      console.log("Un vēl vairāk šis bija pēdējais vārds teikumā");
    }
  }
}
