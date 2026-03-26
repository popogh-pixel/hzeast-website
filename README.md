# 🏭 杭州伊斯特服装有限公司 - 官方网站 v2

**版本**: 2.0  
**更新日期**: 2026-03-26  
**设计风格**: 温暖专业（大地色系）

---

## 📋 项目说明

这是为公司重新设计的官方网站 v2 版本，采用温暖专业的配色方案，突出 33 年制造经验和国际认证优势。

### 核心改进

| 项目 | v1 (旧版) | v2 (新版) |
|------|----------|----------|
| **设计风格** | 通用模板 | 定制大地色系 |
| **配色** | 蓝紫色渐变 | 咖啡/卡其/米白 |
| **字体** | 系统默认 | Noto Sans SC + Playfair Display |
| **响应式** | 基础适配 | 完整移动端优化 |
| **SEO** | 基础 meta | 完整结构化数据 |
| **动画** | 无 | 滚动动画 + 悬停效果 |

---

## 🎨 设计特色

### 配色方案
```
主色：#8B7355 (咖啡色) - 专业、可靠
辅色：#C4B09A (卡其色) - 温暖、自然
背景：#F5F1E8 (米白色) - 干净、舒适
强调：#D4AF37 (金色) - 品质、高端
```

### 字体选择
- **标题**: Playfair Display (衬线体，高端感)
- **正文**: Noto Sans SC (无衬线体，易读性)

---

## 📁 文件结构

```
website-v2/
├── index.html          # 首页
├── css/
│   └── style.css       # 主样式（温暖专业风）
├── js/
│   └── main.js         # 交互逻辑
├── images/
│   ├── products/       # 产品图片（待上传）
│   └── process/        # 流程图片（待上传）
├── uploads/            # Banner 轮播（待上传）
├── pages/
│   ├── about.html      # 关于我们（待创建）
│   ├── products.html   # 产品展示（待创建）
│   ├── process.html    # 生产流程（待创建）
│   └── contact.html    # 联系我们（待创建）
└── README.md           # 本文件
```

---

## 🚀 快速开始

### 1. 本地预览

```bash
# 方法 1: 使用 Python 内置服务器
cd ~/.openclaw/workspace/website-v2
python3 -m http.server 8000

# 访问 http://localhost:8000
```

### 2. 上传图片

将产品图片放入对应目录：
```bash
# 产品图片
cp /你的图片路径/dress.jpg images/products/

# Banner 图片
cp /你的图片路径/banner.jpg uploads/
```

### 3. 创建其他页面

参考 `pages/` 目录模板创建：
- about.html (关于我们)
- products.html (产品展示)
- process.html (生产流程)
- contact.html (联系我们)

### 4. 部署到 GitHub Pages

```bash
cd ~/.openclaw/workspace/website-v2

# 初始化 Git
git init
git add -A
git commit -m "Initial commit - website v2"

# 关联远程仓库（创建新 repo）
git remote add origin git@github.com:popogh-pixel/hzeast-website-v2.git

# 推送
git push -u origin main
```

**访问地址**: https://popogh-pixel.github.io/hzeast-website-v2/

---

## 📊 首页内容规划

### Hero 区域
- ✅ 主标题：33 年专业服装制造经验
- ✅ 副标题：专注梭织女装、童装，月产能 50,000 件
- ✅ 统计数据：1993 成立 | 50K+ 月产能 | 141 工人 | 30+ 出口国家
- ✅ CTA 按钮：获取报价 / 查看产品

### 核心优势 (6 项)
- ✅ 国际认证 (ISO9001 & BSCI)
- ✅ 快速交货 (7-10 天打样，15-30 天大货)
- ✅ 全球出口 (欧洲 60%、澳洲 30%)
- ✅ 专业团队 (141 名熟练工人)
- ✅ 产品丰富 (连衣裙、衬衫、裤子、夹克、西装、童装)
- ✅ 灵活定制 (OEM/ODM, MOQ: 500-1000 件)

### 产品展示 (6 类)
- ✅ 连衣裙、衬衫、裤子、夹克、西装、童装
- ⏳ 产品图片（待上传）

### 客户见证 (3 条)
- ✅ 欧洲客户（合作 5 年）
- ✅ 澳洲客户（合作 3 年）
- ✅ 德国客户（合作 2 年）

---

## ✅ 完成状态

| 页面 | 状态 | 备注 |
|------|------|------|
| index.html | ✅ 完成 | 首页完整 |
| css/style.css | ✅ 完成 | 温暖专业风格 |
| js/main.js | ✅ 完成 | 交互逻辑 |
| about.html | ⏳ 待创建 | 关于我们 |
| products.html | ⏳ 待创建 | 产品展示 |
| process.html | ⏳ 待创建 | 生产流程 |
| contact.html | ⏳ 待创建 | 联系我们 |
| 产品图片 | ⏳ 待上传 | 需要真实图片 |
| Banner 图片 | ⏳ 待上传 | 工厂/产品实拍 |

---

## 🔧 自定义配置

### 修改联系方式

编辑 `index.html` 和 `pages/contact.html`:
```html
<!-- 邮箱 -->
hong.guo@hzeast.cn

<!-- 电话 -->
180-5816-5588

<!-- 地址 -->
浙江省杭州市临安区
```

### 修改统计数据

编辑 `index.html` Hero 区域:
```html
<div class="stat-item">
    <span class="stat-number">1993</span>
    <span class="stat-label">成立年份</span>
</div>
```

### 修改产品列表

编辑 `index.html` 产品展示区域，添加/删除产品卡片。

---

## 📈 SEO 优化

### 已配置
- ✅ Title 标签（包含关键词）
- ✅ Meta Description
- ✅ Meta Keywords
- ✅ Open Graph (社交分享)
- ✅ 结构化数据 (Schema.org)
- ✅ 语义化 HTML 标签
- ✅ Alt 文本（图片描述）

### 待优化
- ⏳ 提交到 Google Search Console
- ⏳ 创建 sitemap.xml
- ⏳ 添加 robots.txt
- ⏳ 设置 Google Analytics

---

## 🆘 常见问题

### 1. 图片不显示
```bash
# 检查图片路径
ls -la images/products/

# 检查 Git 追踪
git ls-files images/

# 重新添加
git add images/*
git commit -m "Add product images"
git push
```

### 2. 样式不生效
```bash
# 清除浏览器缓存
# Ctrl+Shift+R (Win) / Cmd+Shift+R (Mac)

# 检查 CSS 路径
<link rel="stylesheet" href="css/style.css">
```

### 3. GitHub Pages 404
```bash
# 确保有 index.html
ls index.html

# 检查分支设置
# GitHub → Settings → Pages → Source: main branch

# 等待部署（1-2 分钟）
curl -I https://popogh-pixel.github.io/hzeast-website-v2/
```

---

## 📞 技术支持

如有问题，请联系：
- 📧 邮箱：hong.guo@hzeast.cn
- 📱 电话：180-5816-5588

---

**© 2026 杭州伊斯特服装有限公司**
