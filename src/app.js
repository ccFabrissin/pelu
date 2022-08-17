const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const session = require("express-session");
const cookies = require("cookie-parser");

app.use(session({secret: "grupoPear", resave: false, saveUninitialized: false}));

app.use(cookies());
app.use(cookies());

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false })); 
app.use(express.json());
app.use(methodOverride('_method')); 

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));

const mainRouter = require("./routes/main");

app.use('/', mainRouter); //Rutas del menu principal

app.listen(3000, () => {
  console.log("Servidor funcionando en http://localhost:3000")
})



