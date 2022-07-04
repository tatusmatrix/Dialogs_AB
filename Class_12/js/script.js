const datums = new Date();
console.log("Datums: " + datums);

//const datuma_teksts = datums.toLocaleString('lv-LV', { timeZone: 'UTC' });
const datuma_teksts = datums.toLocaleString('lv-LV');
console.log("Datuma teksts (ar lv-LV formātu): " + datuma_teksts);

const datuma_teksta_garums = datuma_teksts.length;
console.log("Datuma teksta garums: " + datuma_teksta_garums);


document.getElementById("CurrentDay").innerHTML = document.getElementById("CurrentDay").innerHTML 
                                                  + datums;

document.getElementById("CurrentTime").innerHTML = document.getElementById("CurrentTime").innerHTML 
                                                  + datuma_teksts.slice(11,datuma_teksta_garums);
