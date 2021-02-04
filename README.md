## 网易云音乐网页版
仿网易云应用网页版项目
### 安装
```
npm i
```
### 启动
```
npm start
```

## 相关说明

### 1.开发环境配置
项目使用craco配置开发环境
#### 1.1 安装
```
npm install @craco/craco -D 
```
#### 1.2 创建配置文件
craco.config.js
#### 1.3 修改package.json文件
```
"scripts": {
-   "start": "react-scripts start",
+   "start": "craco start",
-   "build": "react-scripts build",
+   "build": "craco build"
-   "test": "react-scripts test",
+   "test": "craco test"
}
```
### 2.项目相关库依赖
- 初始化样式：normalize.css
- 样式编写：styled-components
- 路由：react-router-dom react-router-config
- 数据请求：axios
- 状态管理：redux react-redux redux-thunk

### 3.项目目录
- assets：静态资源
- components：公共组件
- router：路由配置文件
- service：数据请求
- store：公共状态，所有请求的数据
- utils：工具
- views：路由级别视图

### 4.接口
本项目接口使用网易云音乐api：[接口文档链接](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e6%8e%a5%e5%8f%a3%e6%96%87%e6%a1%a3)