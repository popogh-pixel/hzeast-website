/**
 * 多语言支持 (i18n)
 * 支持中文 (zh) 和英文 (en)
 */

const i18n = {
    // 当前语言
    currentLang: 'zh',
    
    // 语言包
    translations: {
        zh: {
            // 导航
            'nav-home': '首页',
            'nav-about': '关于我们',
            'nav-products': '产品展示',
            'nav-process': '生产流程',
            'nav-contact': '联系我们',
            'nav-quote': '获取报价',
            
            // 首页 Hero
            'hero-title': '33 年专业服装制造经验',
            'hero-subtitle': '专注梭织女装、童装，月产能 50,000 件<br>ISO9001 & BSCI 认证，出口欧洲澳洲 30+ 国家',
            'hero-stats-year': '成立年份',
            'hero-stats-capacity': '月产能 (件)',
            'hero-stats-workers': '熟练工人',
            'hero-stats-countries': '出口国家',
            
            // 首页优势
            'features-title': '为什么选择我们',
            'features-subtitle': '专业、可靠、高效的服装制造合作伙伴',
            'feature-cert-title': '国际认证',
            'feature-cert-desc': 'ISO9001 质量管理体系认证<br>BSCI 社会责任认证',
            'feature-delivery-title': '快速交货',
            'feature-delivery-desc': '打样 7-10 天<br>大货 15-30 天交货期',
            'feature-global-title': '全球出口',
            'feature-global-desc': '出口欧洲 60%、澳洲 30%<br>服务 30+ 国家客户',
            'feature-team-title': '专业团队',
            'feature-team-desc': '141 名熟练工人<br>5 人技术团队（版师 + 样衣工）',
            'feature-products-title': '产品丰富',
            'feature-products-desc': '梭织女装、童装<br>裤子、衬衫、夹克、西装、连衣裙、羽绒服',
            'feature-custom-title': '灵活定制',
            'feature-custom-desc': 'OEM/ODM 服务<br>MOQ: 500-1000 件',
            
            // 首页产品
            'products-title': '主营产品',
            'products-subtitle': '专注梭织服装，品质保证',
            'product-dress': '连衣裙',
            'product-shirt': '衬衫',
            'product-pants': '裤子',
            'product-jacket': '夹克',
            'product-suit': '西装',
            'product-kids': '童装',
            'product-moq': 'MOQ: 500 件',
            'products-more': '查看全部产品 →',
            
            // 首页见证
            'testimonials-title': '客户评价',
            'testimonials-subtitle': '来自欧洲和澳洲客户的真实反馈',
            
            // CTA
            'cta-title': '准备好开始合作了吗？',
            'cta-subtitle': '获取免费报价，我们的团队会在 24 小时内回复',
            'cta-button': '📧 立即询价',
            'cta-phone': '📱 180-5816-5588',
            
            // 页脚
            'footer-company': '杭州伊斯特服装有限公司',
            'footer-desc': '33 年专业服装制造经验<br>专注梭织女装、童装',
            'footer-links': '快速链接',
            'footer-products': '主营产品',
            'footer-contact': '联系方式',
            'footer-rights': '© 2026 杭州伊斯特服装有限公司。All rights reserved.',
            
            // Logo
            'logo-text': '杭州伊斯特服装',
            'logo-text-en': 'East Clothing',
            
            // 语言切换
            'lang-zh': '中文',
            'lang-en': 'English'
        },
        
        en: {
            // Navigation
            'nav-home': 'Home',
            'nav-about': 'About Us',
            'nav-products': 'Products',
            'nav-process': 'Process',
            'nav-contact': 'Contact',
            'nav-quote': 'Get Quote',
            
            // Hero
            'hero-title': '33 Years of Professional Garment Manufacturing',
            'hero-subtitle': 'Specializing in woven women\'s and children\'s clothing, monthly capacity 50,000 pieces<br>ISO9001 & BSCI certified, exporting to 30+ countries in Europe and Australia',
            'hero-stats-year': 'Founded',
            'hero-stats-capacity': 'Monthly Capacity (pcs)',
            'hero-stats-workers': 'Skilled Workers',
            'hero-stats-countries': 'Export Countries',
            
            // Features
            'features-title': 'Why Choose Us',
            'features-subtitle': 'Professional, reliable, and efficient garment manufacturing partner',
            'feature-cert-title': 'International Certifications',
            'feature-cert-desc': 'ISO9001 Quality Management System<br>BSCI Social Compliance',
            'feature-delivery-title': 'Fast Delivery',
            'feature-delivery-desc': 'Sampling: 7-10 days<br>Bulk production: 15-30 days',
            'feature-global-title': 'Global Export',
            'feature-global-desc': 'Europe 60%, Australia 30%<br>Serving 30+ countries',
            'feature-team-title': 'Professional Team',
            'feature-team-desc': '141 skilled workers<br>5-person technical team',
            'feature-products-title': 'Diverse Products',
            'feature-products-desc': 'Women\'s and children\'s wear<br>Pants, shirts, jackets, suits, dresses, down jackets',
            'feature-custom-title': 'Flexible Customization',
            'feature-custom-desc': 'OEM/ODM services<br>MOQ: 500-1000 pieces',
            
            // Products
            'products-title': 'Main Products',
            'products-subtitle': 'Focus on woven garments, quality assured',
            'product-dress': 'Dresses',
            'product-shirt': 'Shirts & Blouses',
            'product-pants': 'Pants & Skirts',
            'product-jacket': 'Jackets & Coats',
            'product-suit': 'Suits & Blazers',
            'product-kids': 'Children\'s Wear',
            'product-moq': 'MOQ: 500 pcs',
            'products-more': 'View All Products →',
            
            // Testimonials
            'testimonials-title': 'Client Testimonials',
            'testimonials-subtitle': 'Real feedback from European and Australian clients',
            
            // CTA
            'cta-title': 'Ready to Start Cooperation?',
            'cta-subtitle': 'Get a free quote, our team will respond within 24 hours',
            'cta-button': '📧 Get Quote Now',
            'cta-phone': '📱 +86 180-5816-5588',
            
            // Footer
            'footer-company': 'Hangzhou East Clothing Co., Ltd.',
            'footer-desc': '33 years of professional garment manufacturing<br>Specializing in woven women\'s and children\'s wear',
            'footer-links': 'Quick Links',
            'footer-products': 'Main Products',
            'footer-contact': 'Contact Us',
            'footer-rights': '© 2026 Hangzhou East Clothing Co., Ltd. All rights reserved.',
            
            // Logo
            'logo-text': '杭州伊斯特服装',
            'logo-text-en': 'East Clothing',
            
            // Language Switcher
            'lang-zh': '中文',
            'lang-en': 'English'
        }
    },
    
    // 初始化
    init() {
        this.updatePageLanguage();
    },
    
    // 切换语言
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('preferred-lang', lang);
            this.updatePageLanguage();
        }
    },
    
    // 更新页面语言
    updatePageLanguage() {
        document.documentElement.lang = this.currentLang;
        
        // 特殊处理 Logo 中英文切换
        const logoCn = document.querySelector('.logo-text-cn');
        const logoEn = document.querySelector('.logo-text-en');
        
        console.log('Switching to:', this.currentLang);
        
        if (this.currentLang === 'en') {
            if (logoCn) {
                logoCn.style.display = 'none';
                console.log('Hiding CN logo text');
            }
            if (logoEn) {
                logoEn.style.display = 'block';
                console.log('Showing EN logo text');
            }
        } else {
            if (logoCn) {
                logoCn.style.display = 'block';
                console.log('Showing CN logo text');
            }
            if (logoEn) {
                logoEn.style.display = 'none';
                console.log('Hiding EN logo text');
            }
        }
        
        // 更新所有带 data-i18n 属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translations[this.currentLang][key];
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });
        
        // 更新语言切换按钮状态
        document.querySelectorAll('.lang-switch-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            }
        });
        
        console.log('Language updated to:', this.currentLang);
    },
    
    // 获取翻译
    t(key) {
        return this.translations[this.currentLang][key] || key;
    }
};

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    // 从 localStorage 读取偏好语言
    const preferredLang = localStorage.getItem('preferred-lang') || 'zh';
    i18n.setLanguage(preferredLang);
});

// 导出到全局
window.i18n = i18n;
