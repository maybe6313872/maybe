// √ 请输入项目名称： ... vue-project
// √ 是否使用 TypeScript 语法？ ... 否 / 是
// √ 是否启用 JSX 支持？ ... 否 / 是
// √ 是否引入 Vue Router 进行单页面应用开发？ ... 否 / 是
// √ 是否引入 Pinia 用于状态管理？ ... 否 / 是
// √ 是否引入 Vitest 用于单元测试？ ... 否 / 是
// √ 是否要引入一款端到端（End to End）测试工具？ » 不需要
// √ 是否引入 ESLint 用于代码质量检测？ » 是
// √ 是否引入 Prettier 用于代码格式化？ ... 否 / 是

// 3.0的父子通讯，和2.0差不多，script setup默认是不对外界暴露组件实例的，所以在其他组件中通过诸如$refs和$parent是无法直接操作子/父组件的，都默认无法获取当前组件实例，所有就开始使用defineExpose
// 父调子 通过插入的子组件名直接调用属性或者方法
// 子调父 通过父组件provide('parentMethod', parentMethod);  然后子组件const parentMethod = inject('parentMethod');该API不止调用父级，相隔多级也能生效
