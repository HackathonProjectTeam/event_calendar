/**
 * Controller Base
 */
class Controller {
  constructor(){
    this.app = null;
    this.base_dir_path = null;
    this.response = null;
    this.class_name = this.constructor.name.replace(new RegExp("Controller$"), "");
  }

  /**
   * View レンダリング
   * @param view {string} 表示view ファイル名
   */
  render(view){
    // 強制的に参照ディレクトリを書き換え
    this.app.set('views', `${this.base_dir_path}/app/views/${this.class_name}`);
    this.response.render(view);  
  }
}

module.exports = Controller;
