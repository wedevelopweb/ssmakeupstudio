
// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lightbox functionality
const portfolioItems = document.querySelectorAll('.portfolio-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
let currentImageIndex = 0;
const images = Array.from(portfolioItems).map(item => item.querySelector('img').src);

function openLightbox(index) {
    currentImageIndex = index;
    lightboxImg.src = images[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentImageIndex];
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    lightboxImg.src = images[currentImageIndex];
}

portfolioItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
    item.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openLightbox(index);
        }
    });
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrevImage);
lightboxNext.addEventListener('click', showNextImage);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
});

// // Contact Form Handling
// const contactForm = document.getElementById('contactForm');
// const toast = document.getElementById('toast');

// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const formData = new FormData(contactForm);
//     const name = formData.get('name');
//     const phone = formData.get('phone');
//     const date = formData.get('date');
//     const message = formData.get('message');

//     const subject = `Booking Inquiry from ${name}`;
//     const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0APreferred Date: ${date}%0D%0AMessage: ${message}`;

//     window.location.href = `mailto:meera@glamoraartistry.in?subject=${subject}&body=${body}`;

//     // Show toast notification
//     toast.classList.add('show');
//     setTimeout(() => {
//         toast.classList.remove('show');
//     }, 3000);

//     // Reset form
//     contactForm.reset();
// });

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const date = formData.get('date');
    const message = formData.get('message');

    const subject = `Booking Inquiry from ${name}`;
    const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0APreferred Date: ${date}%0D%0AMessage: ${message}`;

    // 1️⃣ Send email
    // window.open(`mailto:technographer2004@gmail.com?subject=${subject}&body=${body}`, '_blank');

    // 2️⃣ Send WhatsApp message
    const whatsappNumber = "917088759305";
    const whatsappMessage = `Hello! I'm ${name}.%0A%0APhone: ${phone}%0APreferred Date: ${date}%0AMessage: ${message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

    // Show toast notification
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);

    // Reset form
    contactForm.reset();
});


// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }

    lastScroll = currentScroll;
});
