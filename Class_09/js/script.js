var text = "";
console.log('  "  "  ');
console.log(" '  ' ");
console.log("text mainīgā vērtība pēc definēšanas:");
console.log(text);
text = text + "jauns teksta fragments";
console.log(text);

document.getElementById("paragrafs_ar_tekstu").innerHTML = text;

text = text + " un vēl viens fragments";
console.log(text);

var x = 100;
document.getElementById("dec").innerHTML = x;

document.getElementById("paragrafs_ar_tekstu").innerHTML = text;

/*
>> un & (interesējošo bitu novietot vienmēr 0. pozīcijā un ar ((x>>?) & 1)
*/

var bit_sequence = "";
var zero_th_bit = (x >> 0) & 1;
/*
x >> 0 -> 60(dec) atbilst 0011 1100(bin)
0011 110_0_ >> 0 -> 0011 1100
           1(dec) atbilst 0000 0001(bin)
(x >> 0) & 1 -> 0011 1100
                0000 0001
                0000 0000(bin) -> 0(dec)
*/
//console.log("0. bita attēlošana (pēc nobīdes pa 0 bitiem pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
//console.log("0. bits: " + bit_sequence);

zero_th_bit = (x >> 1) & 1;
/*
0011 11_0_0 >> 1 -> 0001 1110
(x >> 1) & 1 ->    0001 1110
                   0000 0001
                   0000 0000(bin) -> 0(dec)
*/
//console.log("1. bita attēlošana (pēc nobīdes pa 1 bitu pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
//console.log("0. un 1. bits: " + bit_sequence);

/*
......... Jūsu algoritms dec skaitļa pārveidošanai par bināro skaitli
......... vai par 0 un 1 simbolu secību
......... drīkst izmantot tikai divus vai trīs mainīgos
*/
// sākumā var atrast un pielietot standarta JS funkciju, kas pārveido dec to bin
// if, for utt. pagaidām izmantot nedrīkst
document.getElementById("bin_peec_algoritma").innerHTML = bit_sequence;

document.getElementById("bin_peec_standarta_funkcijas").innerHTML = Number(x).toString(2);

// gada procentu likme ir 0.01%  gadā 1 gadam, 0.02% gadā 2 gadiem, utt.
// pirmais mainīgais - klienta V.U.
// otrais mainīgais - noguldāma summa
// ...
/*
Cien. ...klienta_vārts...,
Mēs, banka, redzam, ka Jums kontā ir ... EUR liela naudas summa.
Ja Jūs ieguldīsiet to mūsu banka uz vienu 1 gadu, tad pēc gada kā % Jūs saņemsiet ... EUR
Ja Jūs ieguldīsiet to mūsu banka uz vienu 2 gadu, tad pēc gada kā % Jūs saņemsiet ... EUR
Ja Jūs ieguldīsiet to mūsu banka uz vienu 3 gadu, tad pēc gada kā % Jūs saņemsiet ... EUR
Ja Jūs ieguldīsiet to mūsu banka uz vienu 4 gadu, tad pēc gada kā % Jūs saņemsiet ... EUR
Ja Jūs ieguldīsiet to mūsu banka uz vienu 5 gadu, tad pēc gada kā % Jūs saņemsiet ... EUR
*/
