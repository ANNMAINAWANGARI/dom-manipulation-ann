const nav = document.querySelector('nav')
const section  = document.querySelector('#main');
section.style.backgroundColor = '#6666ff';
section.style.padding = '0px';
section.style.margin = '0px';
section.style.display = 'none';
section.style.justifyContent = 'space-evenly';
section.style.width = '100%';
section.style.height = '100%';

var btn = document.createElement("button");   // Create a <button> element
btn.innerHTML = "click here";                   // Insert text
document.body.appendChild(btn);     //append btn to node
//btn.style.backgroundColor = 'grey';
btn.style.width='70px';
btn.onclick = function() {
 section.style.display = "flex";
 btn.style.display = 'none'}
const span = document.querySelector('span');
 span.onclick = function() {
  section.style.display = "none";
  btn.style.display = 'block'
 }
  