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
   * @param func {function} 実行関数
   */
  get(path, func){
    this.routing_config.push({path: path, func: func, action: 'get'}); 
  }

  /**
   * Request POST 
   * @param url {string} リクエストURL
   * @param func {function} 実行関数
   */
  post(path, func){
    this.routing_config.push({path: path, func: func, action: 'post'}); 
  }

  /**
   * Request PUT 
   * @param url {string} リクエストURL
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
   * RestFull 
   * @param url {string} リクエストURL
   * @param controller {string} コントローラー名
   */
  resources(path, controller){
    this.get(path, `${controller}#index`);
    this.get(`${path}/:id`, `${controller}#show`);
    this.post(path, `${controller}#create`);
    this.put(`${path}/:id`, `${controller}#update`);
    this.delete(`${path}/:id`, `${controller}#delete`);
  }

  /**
   * ルーティング反映
   * @param app {express} application
   * @param controllers {array} コントローラー 
   */
  init(app, controllers){
    
    let http_method, controller;

    this.routing_config.forEach( config => {
        
      http_method = config.action;

      //HttpMethodを設定
      app[http_method](config.path, (req, res) => { 
        var function_conf = config.func.split('#'),
            controller_name = function_conf[0],
            action = function_conf[1];

        controller = controllers[controller_name];    
        controller[action]();
      });
    });
  }

}

module.exports = Router;
