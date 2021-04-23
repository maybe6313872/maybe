// 批量导入文件
const modulesFiles = require.context('./modules', true, /\.js$/) // 含keys方法

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => { // keys方法导出，modules文件夹下所有的文件路径
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  // value导出对应文件 export default 对象，export 对象不会暴露，因为是默认路径
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

// cookie弊端
'1.`Cookie`数量和长度的限制。每个domain最多只能有20条cookie,每个cookie长度不能超过4KB,否则会被截掉。
'2.安全性问题。如果cookie被人拦截了,那人就可以取得所有的session信息。即使加密也与事无补,因为拦截者并不需要知道cookie的意义,他只要原样转发cookie...'

// 三种减少页面加载的办法
'1. 尽量减少http请求'
'2. 在文件末尾放Javascript脚本'
'3. css，js代码压缩'

// ajax和json是什么，优缺点是什么

// ajax的概念：ajax是一种通过后台与服务器进行少量的数据交换，使页面实现异步更新

//                     是一种创建交互式网页应用的网页开发技术。
// json的概念：json是一种轻量级的数据交换格式，具有良好的可读和便于快速编写的特性

// ajax的优缺点
// 优点：异步请求响应快，用户体验好；页面无刷新、数据局部更新；按需取数据，减少了冗余请求和服务器的负担；

// 缺点：异步回调问题、this指向问题、路由跳转back问题；对搜索引擎的支持比较弱，对于一些手机还不是很好的支持

// json的优缺点
// 优点：
// 1.数据格式比较简单，易于读写，格式都是压缩的，占用宽带小
// 2.支持多种语言，.JSON格式的编码比较简单
// 3.JSON的解码难度较低比起XML简单的多
// 5.JSON和js交互更加方便
// 6.JSON的速度远远快于XML

// 缺点 ：

// 1. 没有XML格式这么推广的深入人心和使用广泛, 没有XML那么通用性
// prototype

