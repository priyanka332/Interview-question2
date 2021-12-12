const input = document.querySelector(".input");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const output = document.querySelector(".output");


var increse = 32;
function Add() {
    increse += 2;
    input.style.fontSize = increse + "px";
}

function Sub() {
    increse -= 2;
    input.style.fontSize = increse + "px";
}

add.addEventListener("click", Add);
sub.addEventListener("click", Sub);