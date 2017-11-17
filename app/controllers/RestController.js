const Controller = require('app/lib/controller.js');

class RestController extends Controller{
  constructor(){
    super();
  }
  
  show(){
    console.log('show');
  }

  index(){
    this.render('index');
  }
  
  create(){
    console.log('crate');
  }

  update(){
    console.log('update');
  }

  delete(){
    console.log('delete');
  } 
}

module.exports = RestController;
