/**
 * ルーティング管理クラス
 */
class Router {
  
  constructor(){
    this.routing_config = [];
  }

  /**
   * Request Get 
   * @param url {string} リクエストURL
   * D
   * @param func {function} 実行関数
   */
  get(path, func){
    this.routing_config.push({path: path, func: func, action: 'get'}); 
  }

  /**
   * Request POST 
   * @param url {string} リクエストURL
   * D
   * @param func {function} 実行関数
   */
  post(path, func){
    this.routing_config.push({path: path, func: func, action: 'post'}); 
  }

  /**
   * Request PUT 
   * @param url {string} リクエストURL
   * D
   * @param func {function} 実行関数
   */
  put(path, func){
    this.routing_config.push({path: path, func: func, action: 'put'}); 
  }
  
  /**
   * Request DELETE 
   * @param url {string} リクエストURL
   * @param func {function} 実行関数
   */
  delete(path, func){
    this.routing_config.push({path: path, func: func, action: 'delete'}); 
  }

  /**
   * ルーティング反映
   * @param app {express} application
   */
  init(app, controllers){
   
    let controller_name, controller, action;

    this.routing_config.forEach( config => {
        
      var function_conf = config.func.split('#');
      controller_name = function_conf[0];
      action = function_conf[1];
      controller = controllers[controller_name];

      console.log(controller);
        
      app[config.action](config.path, (req, res, next) => { 
        controller[action]();
      });
    });
  }

}

module.exports = Router;
