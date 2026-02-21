// تغيير خلفية الناف بار عند التمرير
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#440000';
        navbar.style.height = '70px';
    } else {
        navbar.style.background = '#990000';
        navbar.style.height = '80px';
    }
});

// القائمة الجانبية للموبايل
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    // تبديل الكلاس لظهور القائمة
    nav.classList.toggle('nav-active');

    // أنيميشن أيقونة البيرجر
    burger.classList.toggle('toggle');
});

// إغلاق القائمة عند الضغط على أي رابط
const navLinks = document.querySelectorAll('.nav-links li');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});

// Logo Lightbox Feature
document.addEventListener('DOMContentLoaded', () => {
    const logoImg = document.querySelector('.logo-img');
    if (logoImg) {
        // Create lightbox element
        const lightbox = document.createElement('div');
        lightbox.className = 'logo-lightbox';

        const lightboxImg = document.createElement('img');
        lightboxImg.src = logoImg.src;
        lightboxImg.alt = logoImg.alt;

        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);

        // Open lightbox
        logoImg.addEventListener('click', (e) => {
            e.preventDefault();
            lightbox.classList.add('active');
        });

        // Close lightbox on click
        lightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }
});
