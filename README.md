# 小肥的博客网站

这是一个简洁、现代的静态博客网站，专为技术分享和教程设计。

## 🚀 快速开始

### 1. 文件结构
```
zht-blog/
├── index.html          # 博客首页（文章列表）
├── css/
│   └── style.css       # 统一的样式文件
├── js/
│   └── blog.js         # 博客功能增强脚本
├── posts/              # 文章目录
│   └── 通义万象2.2视频生成模型部署教程.html
├── post-template.html  # 文章模板文件
└── README.md           # 本说明文档
```

### 2. 如何添加新文章

#### 方法一：使用模板创建
1. 复制 `post-template.html` 文件
2. 重命名为 `文章标题.html`
3. 放入 `posts/` 目录
4. 修改以下内容：
   - 文章标题
   - 发布日期
   - 作者信息
   - 标签（用逗号分隔）
   - 正文内容

#### 方法二：手动创建
1. 在 `posts/` 目录创建新的HTML文件
2. 使用以下基础结构：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>文章标题 - 我的博客</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <!-- 导航栏会自动包含 -->
    <!-- 文章内容 -->
    <script src="../js/blog.js"></script>
</body>
</html>
```

### 3. 更新首页文章列表

在 `index.html` 中添加新的文章卡片：

```html
<article class="blog-card">
    <div class="blog-meta">
        <span class="date">2024-01-20</span>
        <span class="tags">新技术, 教程</span>
    </div>
    <h2><a href="posts/新文章.html">新文章标题</a></h2>
    <p>文章摘要...</p>
    <a href="posts/新文章.html" class="read-more">阅读全文</a>
</article>
```

## 🎨 样式和组件

### 可用的样式类
- `.section` - 内容区块
- `.highlight` - 高亮提示框
- `.warning` - 警告提示框
- `.code-block` - 代码块
- `.steps` - 步骤列表
- `.specs` - 规格展示
- `.download-links` - 下载链接

### 图标使用
使用Font Awesome图标：
```html
<i class="fas fa-icon-name"></i>
```

## 🔧 高级功能

### 标签筛选
点击文章标签可以筛选相关文章

### 搜索功能
在页面顶部有搜索框，支持：
- 按标题搜索
- 按内容搜索
- 按标签搜索

### 浏览量统计
自动记录每篇文章的浏览次数（本地存储）

### 代码复制
所有代码块都有"复制"按钮

## 📱 响应式设计

网站支持各种设备：
- 桌面电脑
- 平板电脑
- 手机

## 🌐 部署建议

### 免费部署平台
1. **GitHub Pages** - 直接推送代码即可
2. **Netlify** - 拖拽文件夹即可部署
3. **Vercel** - 支持自动部署

### 部署步骤
1. 将整个文件夹上传到选择的平台
2. 确保所有链接使用相对路径
3. 配置自定义域名（可选）

## 📝 写作建议

### 文章结构
1. **标题** - 简洁明了
2. **摘要** - 100-200字
3. **正文** - 分段清晰
4. **总结** - 要点回顾

### SEO优化
- 使用描述性的标题
- 添加相关标签
- 保持URL简洁
- 使用语义化HTML

## 🔄 更新和维护

### 定期更新内容
- 添加新的技术文章
- 更新旧文章的技术信息
- 检查链接有效性

### 样式更新
- 修改 `css/style.css` 调整整体样式
- 更新 `js/blog.js` 添加新功能

## 🤝 贡献

欢迎提交改进建议或报告问题！

## 📄 许可证

MIT License - 可自由使用和修改

---

**技术支持**：如有问题，请通过博客联系页面联系作者