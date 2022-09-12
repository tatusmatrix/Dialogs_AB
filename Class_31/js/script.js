// https://www.javascripttutorial.net/web-apis/javascript-cookies/

expires = new Date('2022-09-12T20:23:00.000');

document.cookie = `username=admin; path=/; expires=${expires.toGMTString()}`;

let intervalID = setInterval(check_cookie, 1000);

function check_cookie(){
  var current = new Date();
  console.log(current);
  const str = document.cookie;
  console.log(str);
  if(str==''){
    clearInterval(intervalID);
  }
}
