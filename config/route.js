const Router = require('app/lib/router.js');
const router = new Router();

(function(){
  
  //TODO: add routing configration
  router.get('/', 'IndexController#root' );
  router.resources('/rest', 'RestController');

})();



module.exports = router;
