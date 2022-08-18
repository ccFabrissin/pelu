const path = require('path');
const fs = require('fs');

const ingresosPath = path.resolve(__dirname, '../../public/ingresos.json');
const ingresos = JSON.parse(fs.readFileSync(ingresosPath, 'utf-8'));

const egresosPath = path.resolve(__dirname,'../../public/egresos.json');
const egresos = JSON.parse(fs.readFileSync(egresosPath, "utf-8"));



// Ingresos Totales
let ingresosTotales = 0;
for (let i = 0; i < ingresos.length; i++) {
    ingresosTotales = ingresos[i].monto + ingresosTotales;
}



//metodos Controlador

const mathController = {
    report: (req,res)=>{
        res.render('report')
    },
    filtrado: (req,res)=>{
        //ingreso filtrado por fecha
        let fecha1 = req.body.date1;
        let fecha2 = req.body.date2;
        let ingresoFiltrado = [];
        for (let i = 0; i < ingresos.length; i++) {
        if(ingresos[i].fecha >= fecha1 && ingresos[i].fecha <= fecha2){
        ingresoFiltrado.push(ingresos[i])}}
        let ingresoPorFecha = 0;
        for (let i = 0; i < ingresoFiltrado.length; i++) {
        ingresoPorFecha = ingresoFiltrado[i].monto + ingresoPorFecha;}
        
        //egresos filtrado por fecha
        let egresoFiltrado = [];
        for (let i = 0; i < egresos.length; i++) {
        if(egresos[i].fecha >= fecha1 && egresos[i].fecha <= fecha2){
        egresoFiltrado.push(egresos[i])}}
        let egresoPorFecha = 0;
        for (let i = 0; i < egresoFiltrado.length; i++) {
        egresoPorFecha = egresoFiltrado[i].monto + egresoPorFecha;}

        //a facturar
        let aFacturar = 0;
        let filtradoPorMedio = [];
        for (let i = 0; i < ingresoFiltrado.length; i++) {
            if(ingresoFiltrado[i].medio != "efectivo"){
            filtradoPorMedio.push(ingresoFiltrado[i])}}
        for (let i = 0; i < filtradoPorMedio.length; i++) {
                aFacturar = filtradoPorMedio[i].monto + aFacturar;}

        //    


        let ingresoPorFecha1 = (ingresoPorFecha).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2});
        let egresoPorFecha1 = (egresoPorFecha).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2});
        let netoPorFechaObj1 =(ingresoPorFecha - egresoPorFecha).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2});
        let aFacturar1 = (aFacturar).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2})

        let ingresoObjt = {
            ingresoPorFechaObj:ingresoPorFecha1,
            egresoPorFechaObj:egresoPorFecha1,
            netoPorFechaObj:netoPorFechaObj1,
            aFacturarObj: aFacturar1
        }    
        res.render('reportFechas', {ingreso: ingresoObjt})
    }
}

module.exports = mathController;