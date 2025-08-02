// 博客功能增强脚本

// 文章数据管理
const blogData = {
    posts: [
        {
            title: "通义万象2.2视频生成模型部署教程",
            date: "2024-01-15",
            tags: ["AI", "机器学习"],
            summary: "详细介绍如何部署和使用通义万象2.2视频生成模型，包括环境配置、依赖安装和实际应用...",
            url: "posts/通义万象2.2视频生成模型部署教程.html"
        },
        {
            title: "虚幻引擎5安装与配置完整指南",
            date: "2025-01-02",
            tags: ["游戏开发", "虚幻引擎", "UE5"],
            summary: "详细的虚幻引擎5安装教程，包含系统要求、安装步骤、首次配置和常见问题解决方案...",
            url: "posts/unreal-engine-install-guide.html"
        },
        {
            title: "Visual Studio 2022完整安装配置指南",
            date: "2025-01-02",
            tags: ["开发工具", "Visual Studio", "IDE"],
            summary: "Visual Studio 2022的详细安装教程，包含版本选择、工作负载配置、扩展推荐和开发环境优化...",
            url: "posts/visual-studio-install-guide.html"
        }
    ],
    
    // 获取所有标签
    getAllTags() {
        const tags = new Set();
        this.posts.forEach(post => {
            post.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags).sort();
    },
    
    // 按标签筛选文章
    filterByTag(tag) {
        if (!tag) return this.posts;
        return this.posts.filter(post => post.tags.includes(tag));
    },
    
    // 按日期排序
    sortByDate(order = 'desc') {
        return [...this.posts].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return order === 'desc' ? dateB - dateA : dateA - dateB;
        });
    }
};

// 页面加载完成后的初始化
window.addEventListener('DOMContentLoaded', function() {
    // 添加滚动动画效果
    addScrollAnimations();
    
    // 初始化标签筛选功能
    initTagFilter();
    
    // 初始化搜索功能
    initSearch();
});

// 滚动动画效果
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.1s';
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    // 观察博客卡片
    document.querySelectorAll('.blog-card, .step, .section').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// 标签筛选功能
function initTagFilter() {
    // 为标签添加点击事件
    document.querySelectorAll('.tags').forEach(tagElement => {
        tagElement.style.cursor = 'pointer';
        tagElement.addEventListener('click', function() {
            const tag = this.textContent.trim();
            filterPostsByTag(tag);
        });
    });
}

// 按标签筛选文章
function filterPostsByTag(tag) {
    const filteredPosts = blogData.filterByTag(tag);
    renderPosts(filteredPosts);
    
    // 更新页面标题
    document.title = tag ? `标签: ${tag} - 小肥的博客` : '小肥的博客 - 技术分享与教程';
}

// 渲染文章列表
function renderPosts(posts) {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    blogGrid.innerHTML = '';
    
    posts.forEach(post => {
        const article = createPostElement(post);
        blogGrid.appendChild(article);
    });
}

// 创建文章DOM元素
function createPostElement(post) {
    const article = document.createElement('article');
    article.className = 'blog-card';
    
    article.innerHTML = `
        <div class="blog-meta">
            <span class="tags">${post.tags.join(', ')}</span>
        </div>
        <h2><a href="${post.url}">${post.title}</a></h2>
        <p>${post.summary}</p>
        <a href="${post.url}" class="read-more">阅读全文</a>
    `;
    
    return article;
}

// 搜索功能
function initSearch() {
    // 创建搜索框（如果页面中不存在）
    if (!document.querySelector('.search-container')) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <input type="text" id="searchInput" placeholder="搜索文章..." 
                   style="padding: 10px; border: 1px solid #ddd; border-radius: 5px; width: 100%; max-width: 300px;">
        `;
        
        const container = document.querySelector('.container');
        if (container) {
            container.insertBefore(searchContainer, container.firstChild);
        }
    }
    
    // 添加搜索事件监听
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
}

// 处理搜索
function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    
    if (!query) {
        renderPosts(blogData.posts);
        return;
    }
    
    const filteredPosts = blogData.posts.filter(post => {
        return post.title.toLowerCase().includes(query) ||
               post.summary.toLowerCase().includes(query) ||
               post.tags.some(tag => tag.toLowerCase().includes(query));
    });
    
    renderPosts(filteredPosts);
}

// 添加复制代码功能
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.textContent = '复制';
        button.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: #667eea;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 3px;
            cursor: pointer;
            font-size: 12px;
        `;
        
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);
        wrapper.appendChild(button);
        
        button.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent.trim()).then(() => {
                button.textContent = '已复制!';
                setTimeout(() => button.textContent = '复制', 2000);
            });
        });
    });
});

// 返回顶部按钮
window.addEventListener('scroll', function() {
    let backToTop = document.getElementById('backToTop');
    
    if (!backToTop) {
        backToTop = document.createElement('button');
        backToTop.id = 'backToTop';
        backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTop.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            display: none;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        `;
        document.body.appendChild(backToTop);
    }
    
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// 页面统计（简单的浏览量统计）
function incrementViewCount(postUrl) {
    const views = JSON.parse(localStorage.getItem('blogViews') || '{}');
    views[postUrl] = (views[postUrl] || 0) + 1;
    localStorage.setItem('blogViews', JSON.stringify(views));
    return views[postUrl];
}

// 获取浏览量
function getViewCount(postUrl) {
    const views = JSON.parse(localStorage.getItem('blogViews') || '{}');
    return views[postUrl] || 0;
}

// 导出功能
window.blogUtils = {
    blogData,
    filterPostsByTag,
    handleSearch,
    getViewCount,
    incrementViewCount
};