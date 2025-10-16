# 麻辣仙人-aa 导航页

这是一个用于导航到其他GitHub Pages项目的导航页面，采用红白风格设计。

## 项目特点

- 🎨 红白配色方案，简洁美观
- 📱 响应式设计，支持移动端
- ⚡ 基于Vue 3 + Vite构建，性能优异
- 🔗 可配置的项目链接管理

## 技术栈

- Vue 3
- Vite
- CSS3 (渐变、阴影、动画)

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 部署到GitHub Pages

1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择部署分支为 `gh-pages`
4. 设置源文件夹为 `/ (root)`

## 自定义项目链接

在 `src/App.vue` 文件中的 `projects` 数组中添加或修改项目信息：

```javascript
projects: [
  {
    id: 1,
    title: '项目名称',
    description: '项目描述',
    url: 'https://your-username.github.io/project-name/'
  }
]
```

## 作者

麻辣仙人-aa

## 许可证

MIT License
