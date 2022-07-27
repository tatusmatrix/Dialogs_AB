window.name = "original";

let jsWindow = window.open(
  "http://127.0.0.1:5500/Dialogs_AB/Class_20/",
  //"https://www.w3schools.com/js/js_object_prototypes.asp",
  "test",
  "height=600,width=800"
);

//jsWindow.window.console(jsWindow.opener);

setTimeout(() => {
  window.open("http://127.0.0.1:5500/Dialogs_AB/Class_19/", "test");
  //window.open("https://www.w3schools.com/js/js_this.asp", "test");
}, 3000);

setTimeout(() => {
  //jsWindow.resizeTo(600, 300); // Will not work for third part resources because of CORS
  jsWindow.resizeBy(-100,-100); // -"- (?)
  //jsWindow.moveTo(deltaX,deltaY); // -"- (?)
  jsWindow.moveBy(50,50); // -"- (?)
}, 6000);

/*
setTimeout(() => {
  jsWindow.close();
}, 9000);
*/
/*
setTimeout(() => {
  window.open("http://127.0.0.1:5500/Dialogs_AB/Class_18/", "_blank");
}, 12000);
*/