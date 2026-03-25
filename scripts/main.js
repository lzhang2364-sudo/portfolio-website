/**
 * Main Script
 * 主脚本文件 - 页面初始化和全局配置
 */

console.log('Portfolio website initialized successfully! 🚀');

// 页面初始化检查
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    // 检查必要的元素
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    
    if (!header || !footer) {
        console.warn('Header or footer element not found');
    }
});
