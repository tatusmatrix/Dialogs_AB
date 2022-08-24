// Piemēra - https://www.javascripttutorial.net/javascript-dom/document-object-model-in-javascript/ - HTML dokumenta analīze:
/*
<html>
    <head>
        <title>JavaScript DOM</title>
    </head>
    <body>
        <p>Hello DOM!</p>
    </body>
</html>
*/
// <html><head><title>JavaScript DOM</title></head><body><p>Hello DOM!</p></body></html>
/*
const firstChildNode = document.documentElement.firstChild;
if (firstChildNode.nodeType !== Node.COMMENT_NODE) {
    console.warn("You should comment your code!");
    console.log(firstChildNode.nodeType);
    console.log(firstChildNode.nodeName);
    console.log(firstChildNode.nodeValue);
}
else {
    console.log("Good! :-) code is commented/described");
    console.log(firstChildNode.nodeType);
    console.log(firstChildNode.nodeName);
    console.log(firstChildNode.nodeValue);
}
*/
/*
const secondChildNode = firstChildNode.nextSibling;
console.log("\n");
console.log(secondChildNode.nodeType);
console.log(secondChildNode.nodeName);
console.log(secondChildNode.nodeValue);

const thirdChildNode = secondChildNode.nextSibling;
console.log("\n");
console.log(thirdChildNode.nodeType);
console.log(thirdChildNode.nodeName);
console.log(thirdChildNode.nodeValue);

const fourthChildNode = thirdChildNode.nextSibling;
console.log("\n");
console.log(fourthChildNode.nodeType);
console.log(fourthChildNode.nodeName);
console.log(fourthChildNode.nodeValue);
*/
// const fifthChildNode = fourthChildNode.nextSibling;
// console.log(fifthChildNode.nodeType);
// console.log(fifthChildNode.nodeName);
// console.log(fifthChildNode.nodeValue);

// const lastChildNode = document.documentElement.lastChild;
// console.log("\n");
// console.log(lastChildNode.nodeType);
// console.log(lastChildNode.nodeName);
// console.log(lastChildNode.nodeValue);

const p = document.getElementById('demo');
console.log(p);
console.log("p.innerHTML: "+p.innerHTML);
p.innerHTML = "Paragrāfa teksts (mainīts 1. reizi.)";
console.log("p.innerText: "+p.innerText);
p.innerText = "Paragrāfa teksts (mainīts 2. reizi.)";
console.log("p.firstChild.nodeType: "+p.firstChild.nodeType);
console.log("p.firstChild.textContent: "+p.firstChild.textContent);
p.firstChild.textContent = "Paragrāfa teksts (mainīts 3. reizi.)";
