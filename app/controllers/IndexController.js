const Controller = require('app/lib/controller.js');

class IndexController extends Controller {
  constructor(){
    super();
  }

  root(req){
    this.render('root');;
  }
  
}

module.exports = IndexController;
