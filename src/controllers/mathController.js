const path = require('path');
const fs = require('fs');

const ingresosPath = path.resolve(__dirname, '../data/ingresos.json');
const ingresos = JSON.parse(fs.readFileSync(ingresosPath, 'utf-8'));

const egresosPath = path.resolve(__dirname,'../data/egresos.json');
const egresos = JSON.parse(fs.readFileSync(egresosPath, "utf-8"));


let hoy = new Date();
let mesActual = hoy.getMonth() + 1 ;
let enero = 0;
let febrero = 1;
let marzo = 2;
let abril = 3;
let mayo = 4;
let junio = 5;
let julio = 6;
let agosto = 7;
let septiembre = 8;
let octubre = 9;
let noviembre = 10;
let diciembre = 11;


// Ingresos Totales
let ingresosTotales = 0;
for (let i = 0; i < ingresos.length; i++) {
    ingresosTotales = ingresos[i].monto + ingresosTotales;
}

//Ingresos del mes
