// 批量导入文件
const modulesFiles = require.context('./modules', true, /\.js$/) // 含keys方法

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => { // keys方法导出，modules文件夹下所有的文件路径
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  // value导出对应文件 export default 对象，export 对象不会暴露，因为是默认路径
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

// 如果是通过接口下载文件流，要在AXIOS插件请求里加上responseType: 'blob'
axios.get({
  url: 'xxxxxx',
  method: 'get',
  data:{},
  responseType: 'blob'
})

// 类写法
class P3 {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.sex = 'male'
  }
  setName() {
    console.log(this.name)
  }
}

const p3 = new P3('lucy', 18)
p3.setName()
p3.sex

class Father {
  constructor (surname){
      this.surname = surname
  }
  say(){
      console.log("你的名字" + this.surname)  //你的名字锤子
  }
}
//在这里 子继承父类
class Son extends Father {
  constructor(surname,name){
      super(surname)
      this.name = name 
  }
  say(){
      super.say()
      console.log('调用普通' + this.name)    //调用普通铁的
  }
}
var son = new Son('锤子',"铁的")
son.say()
console.log(son)   //打印  {surname: "锤子", name: "铁的"
//在子类的构造函数如果使用 super 调用父类的构造函数 必须写在 this之前  
//还可以 调用父类的普通方法 
//在es6中 类没变量提升 必须先定义 才能通过实例化对象类里面的 共有属性 和方法 通过this 调用
//类 里面的this 代表什么
//constructor 里面this指向实例对象  
// 方法里面this 代表 方法的 调用者