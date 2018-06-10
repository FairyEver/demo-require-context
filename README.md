# demo-require-context

本项目演示  require.context 如何帮助开发者更方便地开发 vue 项目

> 示例的自动注册路由方法在实际项目中可能并没有太大的实用性，依项目复杂度而定

另一个关于 require.context 的示例 [d2admin 的自动注册 svg 图标到图标组件功能](https://github.com/FairyEver/d2admin-vue-element/blob/master/src/assets/icons/index.js)

demo 只作为抛砖引玉，欢迎大家补充

注意：本 demo 仅在 posix 型系统下有效，比如 macOS，Windows 用户需要修改代码

## preview

![index](https://raw.githubusercontent.com/FairyEver/demo-require-context/master/doc/image/index.png)

![user](https://raw.githubusercontent.com/FairyEver/demo-require-context/master/doc/image/user.png)

![pages](https://raw.githubusercontent.com/FairyEver/demo-require-context/master/doc/image/pages.png)

![error](https://raw.githubusercontent.com/FairyEver/demo-require-context/master/doc/image/error.png)

![mixin](https://raw.githubusercontent.com/FairyEver/demo-require-context/master/doc/image/mixin.png)


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
