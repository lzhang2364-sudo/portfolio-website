/**
 * Interactions Script
 * 交互功能：按钮点击、表单提交等
 */

// ==================== Portfolio Button Interaction ====================
document.querySelectorAll('.btn-secondary').forEach(btn => {
    btn.addEventListener('click', function() {
        const portfolioSection = document.querySelector('#portfolio');
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// ==================== Portfolio Image Hover Effects ====================
document.querySelectorAll('.portfolio-image').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ==================== Newsletter Subscribe ====================
const newsletterBtn = document.querySelector('.newsletter-btn');
if (newsletterBtn) {
    newsletterBtn.addEventListener('click', function() {
        const emailInput = document.querySelector('.newsletter-input');
        const email = emailInput.value.trim();
        
        if (email && isValidEmail(email)) {
            alert(`感谢订阅！我们已将确认邮件发送至 ${email}`);
            emailInput.value = '';
        } else if (!email) {
            alert('请输入有效的邮箱地址');
        } else {
            alert('请输入正确的邮箱格式');
        }
    });
}

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ==================== Resume Button ====================
const resumeBtn = document.querySelector('.experience-resume-btn');
if (resumeBtn) {
    resumeBtn.addEventListener('click', function() {
        alert('简历下载功能即将上线，敬请期待！');
    });
}
