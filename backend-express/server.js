const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

global.__basedir = __dirname;

var corsOptions = {
  origin: "www.proyectosecologia.net.bo"
};

app.use(cors(corsOptions));

app.use(bodyParser.json({limit:'101mb'}));
app.use(bodyParser.urlencoded({extended:true, limit:'101mb'}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const initRoutes = require("./src/routes");

initRoutes(app);

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
