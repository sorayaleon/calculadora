"use strict";
var encendida = false;
var num1 = "";
var num2 = "";
var operacion = "";
var resultado = 0;
    
$("button[name='valor']" ).on('click', function () {
    if(encendida == true && operacion == ""){
        if(num1 == 0){
            num1 = "";
        }
        num1 += $(this).text();
        parseFloat(num1);
        document.getElementById("numero").innerHTML = num1;
        return num1;
    } else if(encendida == true && operacion != ""){
        if(num2 == 0){
            num2 = "";
        }
        num2 += $(this).text();
        parseFloat(num2);
        document.getElementById("numero").innerHTML = num1 + operacion + num2;
        return num2;
    } 
    
});

$("button[name='operacion']" ).on('click', function () {
    if(encendida == true && operacion == ""){
        if(num1 == ""){
            num1 = 0;
        }
        if(num2 == ""){
            num2 = 0;
        }
        operacion = $(this).text();
        parseFloat(operacion);
        document.getElementById("numero").innerHTML = num1 + operacion;
        return operacion;
    }
});

function suma(num1, num2) {
    resultado = parseFloat(num1) + parseFloat(num2);
    parseFloat(resultado);
    document.getElementById("numero").innerHTML = resultado;
    operacion = "";
}

function resta(num1, num2) {
    resultado = parseFloat(num1) - parseFloat(num2);
    parseFloat(resultado);
    document.getElementById("numero").innerHTML = resultado;
    operacion = "";
}

function multiplicacion(num1, num2) {
    resultado = parseFloat(num1) * parseFloat(num2);
    parseFloat(resultado);
    document.getElementById("numero").innerHTML = resultado;
    operacion = "";
}

function division(num1, num2) {
    resultado =parseFloat(num1) / parseFloat(num2);
    parseFloat(resultado);
    document.getElementById("numero").innerHTML = resultado;
    operacion = "";
}

function resultado_operacion(operacion) {
    switch (operacion) {
        case "+":
            suma(num1, num2);
            num1 = resultado;
            num2 = "";
            resultado = 0;
            break;
        case "-":
            resta(num1, num2);
            num1 = resultado;
            num2 = "";
            resultado = 0;
            break;
        case "x":
            multiplicacion(num1, num2);
            num1 = resultado;
            num2 = "";
            resultado = 0;
            break;
        case "÷":
            division(num1, num2);
            num1 = resultado;
            num2 = "";
            resultado = 0;
            break;
        default:
            break;
    }
}

function encender() {
    document.getElementById("numero").innerHTML = "0";
    encendida = true;
    num1 = "";
    num2 = "";
    operacion = "";
    resultado = "";
}

function limpiar() {
    document.getElementById("numero").innerHTML = "0";
    num1 = "";
    num2 = "";
    operacion = "";
    resultado = "";
}

function apagar() {
    document.getElementById("numero").innerHTML = "";
    encendida = false;
    num1 = "";
    num2 = "";
    operacion = "";
    resultado = "";
}