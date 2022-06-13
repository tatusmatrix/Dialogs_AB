var x = 60;
document.getElementById("dec").innerHTML = x;

var bit_number = 7; // ņemu skaitli 53, jo 2^53-1
var y = (x << (bit_number-7)) >> bit_number;
var z = String(y);
y = (x << (bit_number-6)) >> bit_number;
z = z + '_' + String(y);
y = (x << (bit_number-5)) >> bit_number;
z = z + '_' + String(y);
y = (x << (bit_number-4)) >> bit_number;
z = z + '_' + String(y);
y = (x << (bit_number-3)) >> bit_number;
z = z + '_' + String(y);
y = (x << (bit_number-2)) >> bit_number;
z = z + '_' + String(y);
y = (x << (bit_number-1)) >> bit_number;
z = z + '_' + String(y);
y = (x << (bit_number-0)) >> bit_number;
z = z + '_' + String(y);

/*
>> un & (interesējošo bitu novietot vienmēr 0. pozīcijā un ar ((x>>?) & 1)
*/


/*
......... Jūsu algoritms dec skaitļa pārveidošanai par bināro skaitli
......... vai par 0 un 1 simbolu secību
......... drīkst izmantot tikai divus vai trīs mainīgos
*/
y = '0b00101101';
// sākumā var atrast un pielietot standarta JS funkciju, kas pārveido dec to bin
// if, for utt. pagaidām izmantot nedrīkst
document.getElementById("bin").innerHTML = y;


//a = 45;
//console.log(a);

let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;

// 'scope' - skripta bloks, nodalāms ar šadām iekāvām - {}
// var atslēgas vārds ļauj nodefinēt globālo mainīgo - pieejams visā koda garumā
var a = 45;
console.log("a vērtība (no 'galvenā zara' pirms scope): "+a);
{
    console.log("a vērtība pirms pārdefinēšanas (no 'scope'): "+a);
    var a = 46;
    console.log("a vērtība pēc pārdefinēšanas (no 'scope'): "+a);
}
console.log("a vērtība (no 'galvenā zara' pēc scope): "+a);

// let atslēgas vārds ļauj nodefinēt lokālo mainīgo - pieejams koda blokā norobežotā ar {} - scope, vērtība var tikt mainīta
let b = 60;
console.log("b vērtība (no 'galvenā zara' pirms scope): "+b);
{
    // console.log("b vērtība pirms pārdefinēšanas (no 'scope'): "+b);
    let b = 61;
    console.log("b vērtība pēc pārdefinēšanas (no 'scope'): "+b);
}
console.log("b vērtība (no 'galvenā zara' pēc scope): "+b);

// const atslēgas vārds ļauj nodefinēt lokālo konstanti - pieejams koda blokā norobežotā ar {} - scope, vērtība nevar tikt mainīta
const c = 100;
console.log("c vērtība (no 'galvenā zara' pirms scope): "+c);
{
    //console.log("c vērtība pirms pārdefinēšanas (no 'scope'): "+c);
    const c = 101;
    console.log("c vērtība pēc pārdefinēšanas (no 'scope'): "+c);
}
console.log("c vērtība (no 'galvenā zara' pēc scope): "+c);



/*
izmēģiniet un attēlojiet 
rezultātus - mainīgo vērtības
pēc veiktām izmaiņām - ar console.log():

a++;
++a;
a = a + a;
var b = 10;
b = 100;
const c = 1000;
c = 0;
let b = 3;
*/

/*
Dabūjiet string tipa mainīgā
vērtību paragrāfā savā HTML
dokumentā
*/

//document.getElementById("demo").innerHTML = 456 || 0;
