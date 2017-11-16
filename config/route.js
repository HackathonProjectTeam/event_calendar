const Router = require('app/lib/router.js');
const router = new Router();

(function(){
  
  //TODO: add routing configration
  router.get('/', 'IndexController#root' );

})();



module.exports = router;
