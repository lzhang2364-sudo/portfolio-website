/**
 * Animations Script
 * 动画效果：滚动动画、出现动画等
 */

// ==================== Scroll Animation ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.style.animation;
        }
    });
}, observerOptions);

// Observe portfolio items for staggered animation
document.querySelectorAll('.portfolio-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    observer.observe(item);
});
