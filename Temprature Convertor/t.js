let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

function celtofar(){
    let value1 = ( parseFloat(input1.value) * 9/5) + 32;
    input2.value = parseFloat(value1.toFixed(3));
}

function fartocel(){
    let value1 = ( parseFloat(input2.value) - 32) * 5/9;
    input1.value = parseFloat(value1.toFixed(3));
}