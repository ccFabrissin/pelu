const path = require('path');
const fs = require('fs');

const ingresosPath = path.resolve(__dirname, '../../public/ingresos.json');
const ingresos = JSON.parse(fs.readFileSync(ingresosPath, 'utf-8'));

const egresosPath = path.resolve(__dirname,'../../public/egresos.json');
const egresos = JSON.parse(fs.readFileSync(egresosPath, "utf-8"));



const controladorMain ={
    index: (req,res)=>{
        res.render('index')
    },
    form1: (req, res)=>{
        let ingreso = {
            monto: parseFloat(req.body.monto),
            medio: req.body.medio,
            fecha: req.body.fecha,
        };
        if(ingreso.fecha == ""){
            ingreso.fecha = new Date;
        };
        ingresos.push(ingreso);
        let ingresosJSON = JSON.stringify(ingresos, null, " ");
        fs.writeFileSync(ingresosPath, ingresosJSON);
        res.redirect("/");
    },
    form2: (req, res)=>{
        let egreso = {
            concepto: req.body.conceptGast,
            monto: parseFloat(req.body.montoEg),
            medio: req.body.medioEg,
            fecha: req.body.fechaEg,
            subConcepto: req.body.subConcepto,
            detalle: req.body.detalle
        };
        if(egreso.fecha == ""){
            egreso.fecha = new Date;
        };
        egresos.push(egreso);
        let egresosJSON = JSON.stringify(egresos, null, " ");
        fs.writeFileSync(egresosPath, egresosJSON);
        res.redirect("/");
    }
}



module.exports = controladorMain;