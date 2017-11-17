//path loader
const path = require('app-module-path');
path.addPath(__dirname);

//load modules 
const app = require("express")();
const router = require('config/route.js');
const fs = require("fs");

//view templaete use jade
app.set('view engine', 'jade');
//app.set('views', __dirname + '/app/views/');

const server = app.listen(3000, () => {
  console.log(`PORT: ${server.address().port}`);
});

//load controllers 
let controllers = {};

fs.readdirSync("app/controllers").forEach(file => {
  let file_name = file.replace( /.js/g ,'');
  let ControllerClass = require(`app/controllers/${file_name}`);
  let controller = new ControllerClass();

  //add application config
  controller.app = app;
  controller.base_dir_path = __dirname;
  
  controllers[file_name] = controller;
});

//application routing init
router.init(app, controllers);
