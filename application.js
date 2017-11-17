//path loader
const path = require('app-module-path');
path.addPath(__dirname);

//load modules 
const app = require("express")();
const router = require('config/route.js');
const fs = require("fs");

const server = app.listen(3000, () => {
  console.log(`PORT: ${server.address().port}`);
});

//load controllers 
let controllers = {};

fs.readdirSync("app/controllers").forEach(file => {
  let file_name = file.replace( /.js/g ,'');
  let ControllerClass = require(`app/controllers/${file_name}`);
  let controller = new ControllerClass();
  
  controllers[file_name] = controller;
});

//application routing init
router.init(app, controllers);
