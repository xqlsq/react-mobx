最近公司项目在使用mobx，网上找了一圈也没有个比较好的mobx+react的项目实践，经过一段时间的使用，略有心得，写了个小项目，仅供大家参考。

## 技术栈

1. 脚手架：create-react-app
2. 前端框架：[react](https://discountry.github.io/react/docs/hello-world.html)
3. 组件库：[antd](https://ant.design/docs/react/introduce-cn)
4. 状态管理：[mobx](https://suprise.gitbooks.io/mobx-cn/content/)
5. 路由： [react-router](https://react-guide.github.io/react-router-cn/index.html)

## 项目目录

```
my-app/
  README.md
  node_modules/
  package.json
  jsconfig.json
  .bablerc
  .gitigonre
  scripts/...
  config/...
  public/...
  src/
    page/...
    store/...
    App.js
    index.js
    router.js
```
主要说下src下面的目录构成部分：

1. page 页面组件
2. store mobx的状态管理数据
3. router.js 路由配制
4. App.js Provider 包装组件（透传store数据)
5. index.js 入口文件

## 开发

```
$ npm install

$ npm start
```

## 概览

![preview](./public/imgs/2.png)

![preview](./public/imgs/1.png)

