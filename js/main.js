/**
 * 杭州伊斯特服装有限公司 - 官网主逻辑
 */

// 轮播控制
const slider = {
    currentSlide: 0,
    slides: [],
    interval: null,
    
    init() {
        this.slides = document.querySelectorAll('.slider-slide');
        if (this.slides.length > 0) {
            this.startAutoPlay();
            console.log('🎠 Banner slider initialized');
        }
    },
    
    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.classList.remove('active');
            document.querySelectorAll('.dot')[i]?.classList.remove('active');
        });
        
        this.slides[index].classList.add('active');
        document.querySelectorAll('.dot')[index]?.classList.add('active');
        this.currentSlide = index;
    },
    
    next() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(nextIndex);
        this.resetAutoPlay();
    },
    
    prev() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex);
        this.resetAutoPlay();
    },
    
    goToSlide(index) {
        this.showSlide(index);
        this.resetAutoPlay();
    },
    
    startAutoPlay() {
        this.interval = setInterval(() => {
            this.next();
        }, 5000); // 5 秒切换
    },
    
    resetAutoPlay() {
        clearInterval(this.interval);
        this.startAutoPlay();
    }
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('🦐 杭州伊斯特服装官网已加载');
    
    // 初始化轮播
    slider.init();
    
    // 初始化所有模块
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initNavbarScroll();
});

/**
 * 移动端菜单
 */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!menuBtn || !navMenu) return;
    
    menuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // 动画切换汉堡菜单
        const spans = menuBtn.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
    
    // 点击菜单项后关闭菜单
    navMenu.querySelectorAll('.nav-link, .btn-quote').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const spans = menuBtn.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        });
    });
}

/**
 * 平滑滚动
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * 滚动动画
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    document.querySelectorAll('.feature-card, .product-card, .testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

/**
 * 导航栏滚动效果
 */
function initNavbarScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // 添加阴影
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
}

/**
 * 表单验证（用于联系页面）
 */
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        const value = input.value.trim();
        
        if (!value) {
            showError(input, '此项为必填项');
            isValid = false;
        } else if (input.type === 'email' && !isValidEmail(value)) {
            showError(input, '请输入有效的邮箱地址');
            isValid = false;
        }
    });
    
    return isValid;
}

function showError(input, message) {
    // 移除已有错误
    removeError(input);
    
    // 添加错误样式
    input.style.borderColor = '#e74c3c';
    
    // 创建错误消息
    const error = document.createElement('span');
    error.className = 'error-message';
    error.style.color = '#e74c3c';
    error.style.fontSize = '0.85rem';
    error.style.marginTop = '0.25rem';
    error.style.display = 'block';
    error.textContent = message;
    
    input.parentNode.appendChild(error);
}

function removeError(input) {
    input.style.borderColor = '';
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * 图片懒加载
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/**
 * 数字动画（用于统计数据）
 */
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 导出函数供其他模块使用
window.WebsiteUtils = {
    validateForm,
    isValidEmail,
    animateValue
};

console.log('✅ 所有模块初始化完成');
