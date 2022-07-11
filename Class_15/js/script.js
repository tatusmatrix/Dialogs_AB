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
  document.getElementById("summator_1").innerHTML = a + " un " + b + " summa ir " + summator(a, b);
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
document.getElementById("values_of_array_2").innerHTML = text;

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
//text = "a ab abc abcd abcde abcdef abcdefg";
text = prompt("Cien. lietotāj, lūdzu, ievadi kādu teikumu:");



//text = text + " ";
var burtu_skaitiitaajs_vaardaa = 0;
var simbolu_skaitiitaajs_teikumaa = 0;
var deriigu_vaardu_skaits = 0;
N = 5;
for (let x of text) {
  simbolu_skaitiitaajs_teikumaa++;
  if (x == " ") {
    if (burtu_skaitiitaajs_vaardaa >= N) {deriigu_vaardu_skaits++;}
    burtu_skaitiitaajs_vaardaa = 0;
  } else {
    burtu_skaitiitaajs_vaardaa++;
    if (simbolu_skaitiitaajs_teikumaa == text.length) {
      if (burtu_skaitiitaajs_vaardaa >= N) {deriigu_vaardu_skaits++;}
      burtu_skaitiitaajs_vaardaa = 0;
   }
  }
}

document.getElementById("text_analysis").innerHTML = "Šajā teikumā:<br><b>" + text + 
                                                    "</b><br>ir "+ deriigu_vaardu_skaits + " vārdi, kuru"+
                                                    " garums ir >= " + N;