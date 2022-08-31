// https://www.javascripttutorial.net/javascript-dom/javascript-events/

let btn = document.querySelector('#btn');

/*
function display() {
    alert('It was clicked!');
}
btn.addEventListener('click',display);
*/

/*
btn.addEventListener('click',function() {
    alert('It was clicked!');
});
*/

btn.addEventListener('click', (event) => {
    alert('It was clicked!');
    console.log(event.type);
});

