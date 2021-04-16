安装
```shell
yarn install
```
启动
```shell
yarn start
```
打包
```shell
yarn build
```
新增一个页面在app.js中如下配置:
```javascript
  index1: {                         // index1 为生成后的文件名字和访问路径。
    html: "./src/html/index.html",  // 页面html所在路径
    js: [                           // 页面引用js文件，按依赖顺序引入。
        "./src/js/index1.js"
    ]
  }
```
开发时，如果新增页面，需要重新执行`yarn start`

当前页面需要的scss可以在js文件头部添加如下代码：
```javascript
import "../styles/app.scss"
```

如果代码中需要用到图片或者其他文件，可以放在public目录，public目录的任何文件，都是相对于根路径访问。