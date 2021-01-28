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
