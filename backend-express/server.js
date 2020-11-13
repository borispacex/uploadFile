const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

global.__basedir = __dirname;

var corsOptions = {
  origin: "www.proyectosecologia.net.bo"
};

app.use(bodyParser.json({limit:'100mb'}));

app.use(bodyParser.urlencoded({extended:true, limit:'100mb'}));

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

initRoutes(app);

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
