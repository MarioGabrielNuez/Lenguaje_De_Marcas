//Variables
/*
 * var, let -> declarar variables
 * const -> declarar constante
 */

var x = 5; // var is deprecated
let y = 10; // let sustituira a var

const PI = 3.14;

let ara = "ara";
let bchar = 'b';
let b = true;

let arry = [x, y, ara, b, "b", false, 'd', "holaaaaa"];

let op = Math.PI;

console.log("(" + x + " * " + y + ") / " + PI + " = " + ((x * y) / PI))
console.log(ara + b + "b");
console.log(ara + !b + "b");
console.log(arry[0]);
console.log(op);

// Bucles
console.log("buclee************************")
for (let i = 0;i<arry.length;i++){
    console.log(arry[i]);
}

// condicion
console.log("condicion************************")
if (x > y){
    console.log("x es mayor");
} else {
    console.log("y es mayor");
}

// switch
console.log("switch************************")
switch (y) {
    case 6:
        console.log("el valor es 6");
        break;

    default:
        console.log("la variable tiene un valor");
        break;
}

// objetos en JS
let pc = {
    ram: 4,
    potencia: 5,
    cpu: "intel",
    gpu: "gtx"
}

let ifp = {
    director: "serafin",
    coordinador: "hammu",
    ciclos: {
        DAM: {
            TIT: "Desarrollo de aplicaicones multiplataforma",
            profesor: ["Paco", "Sergio", "Nazaret"]
        },

        SON: {
            TIT: "SONIDO",
            profesor: [""]
        }
    }
}

// alertas
alert("MILFS en tu zona");

//prompt
let f = prompt("que te pica");
alert(f);