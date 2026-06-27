// ======================== LANGUAGE TRANSLATION ========================
const translations = {
  en: {},
  ar: {
    "Home": "الرئيسية",
    "Services": "الخدمات",
    "About Us": "من نحن",
    "Contact": "اتصل بنا",
    "Free Consultation": "استشارة مجانية",
    "Explore Services": "استكشاف الخدمات",
    "Our Journey": "رحلتنا",
    "Building Beyond Boundaries": "بناء بلا حدود",
    "ISO Certified": "معتمدة من ISO",
    "Global Standards": "معايير عالمية",
    "Our Promise": "وعدنا",
    "Uncompromising Quality": "جودة لا مساومة فيها",
    "100% Leak-Proof": "مقاومة 100% للتسرب",
    "5-Year Warranty": "ضمان 5 سنوات",
    "Quality Assurance": "ضمان الجودة",
    "International Standards": "معايير دولية",
    "Core Expertise": "الخبرات الأساسية",
    "Our Services": "خدماتنا",
    "Our Impact": "تأثيرنا",
    "Trusted By Industry Leaders": "موثوق من قبل قادة الصناعة",
    "Years of Excellence": "سنوات من التميز",
    "Projects Completed": "المشاريع المنجزة",
    "Client Satisfaction": "رضا العملاء",
    "Our Valued Clients": "عملاؤنا الكرام",
    "Testimonials": "شهادات العملاء",
    "What Our Clients Say": "ماذا يقول عملاؤنا",
    "GET IN TOUCH": "تواصل معنا",
    "Let's Waterproof Your Future": "دعنا نعزل مستقبلك",
    "Full Name": "الاسم الكامل",
    "Company Name": "اسم الشركة",
    "Email Address": "البريد الإلكتروني",
    "Phone / WhatsApp": "الهاتف / واتساب",
    "City / District": "المدينة / المنطقة",
    "Service Required": "الخدمة المطلوبة",
    "Project Details": "تفاصيل المشروع",
    "Send Inquiry": "إرسال الاستفسار",
    "Call Us": "اتصل بنا",
    "WhatsApp": "واتساب",
    "Email Us": "راسلنا عبر البريد الإلكتروني",
    "Working Hours": "ساعات العمل",
    "Chat with us on WhatsApp": "تحدث معنا على واتساب",
    "International Contracting Group": "مجموعة المقاولات الدولية",
    "Let's": "دعونا",
    "Connect": "نتواصل",
    "All": "الكل",
    "Waterproofing": "العزل المائي",
    "Construction": "البناء",
    "Projects": "مشاريع",
    "Years": "سنوات",
    "Year Warranty": "ضمان سنة",
    "Expert Workers": "عمال خبراء",
    "10 Years Experience": "10 سنوات خبرة",
    "100% Satisfaction Guaranteed": "رضا 100% مضمون",
    "Licensed & Certified Team": "فريق مرخص ومعتمد",
    "Free Site Inspection": "تفتيش الموقع مجانًا",
    "5 Year Warranty": "ضمان 5 سنوات",
    "OUR SERVICES": "خدماتنا",
    "Complete Waterproofing & Construction Solutions": "حلول كاملة للعزل المائي والبناء",
    "WHY CHOOSE US": "لماذا تختارنا",
    "Why Thousands of Families Trust Us": "لماذا تثق بنا الآلاف من العائلات",
    "OUR PROCESS": "عمليتنا",
    "How We Work — Simple & Transparent": "كيف نعمل - بسيط وشفاف",
    "OUR PROJECTS": "مشاريعنا",
    "Our Recent Work in Saudi Arabia": "أعمالنا الأخيرة في المملكة العربية السعودية",
    "CLIENT REVIEWS": "مراجعات العملاء",
    "What Our Customers Say": "ماذا يقول عملاؤنا"
  }
};

function updateLanguage(lang) {
  document.querySelectorAll('[data-en], [data-ar]').forEach(el => {
    if (lang === 'en' && el.hasAttribute('data-en')) {
      el.innerHTML = el.getAttribute('data-en');
    } else if (lang === 'ar' && el.hasAttribute('data-ar')) {
      el.innerHTML = el.getAttribute('data-ar');
    }
  });
  
  document.querySelectorAll('input, textarea, select').forEach(el => {
    if (lang === 'en' && el.hasAttribute('data-en-placeholder')) {
      el.placeholder = el.getAttribute('data-en-placeholder');
    } else if (lang === 'ar' && el.hasAttribute('data-ar-placeholder')) {
      el.placeholder = el.getAttribute('data-ar-placeholder');
    }
  });
  
  document.querySelectorAll('select option').forEach(option => {
    if (lang === 'en' && option.hasAttribute('data-en')) {
      option.text = option.getAttribute('data-en');
    } else if (lang === 'ar' && option.hasAttribute('data-ar')) {
      option.text = option.getAttribute('data-ar');
    }
  });
  
  if (lang === 'ar') {
    document.body.classList.add('rtl');
    document.body.style.direction = 'rtl';
    document.body.style.textAlign = 'right';
  } else {
    document.body.classList.remove('rtl');
    document.body.style.direction = 'ltr';
    document.body.style.textAlign = 'left';
  }
  
  localStorage.setItem('preferredLanguage', lang);
  
  document.querySelectorAll('.lang-btn-center').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  setTimeout(() => {
    if (window.reviewsTrack) updateSlider();
  }, 100);
}

function initLanguageButtons() {
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  updateLanguage(savedLang);
  document.querySelectorAll('.lang-btn-center').forEach(btn => {
    btn.addEventListener('click', () => updateLanguage(btn.getAttribute('data-lang')));
  });
}

// ======================== MOBILE MENU ========================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('show'));
}
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('show'));
});

// ======================== NAVBAR SCROLL ========================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// ======================== FLIP CARDS ========================
function flipHandler(e) { this.classList.toggle('flipped'); }
document.querySelectorAll('.flip-card[data-flip]').forEach(card => {
  card.removeEventListener('click', flipHandler);
  card.addEventListener('click', flipHandler);
});

// ======================== ANIMATED COUNTER ========================
function animateCounter(element, target, suffix = '', duration = 500) {
  let start = 0;
  const increment = target / (duration / 16);
  const interval = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.innerText = target + suffix;
      clearInterval(interval);
    } else {
      element.innerText = Math.floor(start) + suffix;
    }
  }, 16);
}

// Home Page Counters
const yearsEl = document.getElementById('yearsCounter');
const projectsEl = document.getElementById('projectsCounter');
if (yearsEl && projectsEl) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(yearsEl, 15, '+', 2000);
        animateCounter(projectsEl, 500, '+', 2000);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  statsObserver.observe(yearsEl);
}

// Services Page Counters
const servProjects = document.getElementById('servicesStatProjects');
const servYears = document.getElementById('servicesStatYears');
const servWorkers = document.getElementById('servicesStatWorkers');
const servSat = document.getElementById('servicesStatSatisfaction');
if (servProjects) {
  const servObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(servProjects, 500, '+', 500);
        animateCounter(servYears, 10, '+', 500);
        animateCounter(servWorkers, 50, '+', 500);
        animateCounter(servSat, 98, '%', 500);
        servObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  servObserver.observe(servProjects);
}

// Services Hero Stats
const heroProjects = document.getElementById('heroProjects');
const heroYears = document.getElementById('heroYears');
const heroWarranty = document.getElementById('heroWarranty');
if (heroProjects) {
  animateCounter(heroProjects, 500, '+', 500);
  animateCounter(heroYears, 10, '+', 500);
  animateCounter(heroWarranty, 5, '', 500);
}

// About Page Counters
const heroYearCounter = document.getElementById('heroYearCounter');
const heroProjectCounter = document.getElementById('heroProjectCounter');
const heroClientCounter = document.getElementById('heroClientCounter');
if (heroYearCounter) {
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(heroYearCounter, 15, '+', 1500);
        animateCounter(heroProjectCounter, 500, '+', 1500);
        animateCounter(heroClientCounter, 1000, '+', 1500);
        heroObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  heroObserver.observe(heroYearCounter);
}

// ======================== REVIEWS SLIDER ========================
let currentIndex = 0;
let reviewsTrack = document.getElementById('reviewsTrack');
let slides = reviewsTrack ? Array.from(reviewsTrack.children) : [];
let autoSlideInterval;

function updateSlider() {
  if (!reviewsTrack) return;
  const slideWidth = slides[0]?.offsetWidth || 0;
  reviewsTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  const dots = document.querySelectorAll('.slider-dot');
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
}

function nextSlide() {
  if (slides.length === 0) return;
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function startAutoSlide() {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 3000);
}

if (reviewsTrack && slides.length > 0) {
  const dotsContainer = document.getElementById('sliderDots');
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
        startAutoSlide();
      });
      dotsContainer.appendChild(dot);
    });
  }
  startAutoSlide();
  window.addEventListener('resize', () => updateSlider());
}

// ======================== SCROLL ANIMATION OBSERVER ========================
// For Services Cards - Left animation
const serviceCards = document.querySelectorAll('.services-grid .flip-card');
const serviceObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      serviceObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
serviceCards.forEach(card => serviceObserver.observe(card));

// For Two Column - Text left, Image right
const twoColumnElements = document.querySelectorAll('.two-column .story-text, .two-column .badge-group, .two-column .about-badge-group, .two-column .icon-large, .two-column .text-xl, .two-column .quality-grid, .two-column .mt-4, .two-column .img-hover-zoom');
const twoColumnObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      twoColumnObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
twoColumnElements.forEach(el => twoColumnObserver.observe(el));

// For Left Slide Cards
const leftCards = document.querySelectorAll('.slide-left-card');
const leftCardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      leftCardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
leftCards.forEach(card => leftCardObserver.observe(card));

// For Right Slide Cards
const rightCards = document.querySelectorAll('.slide-right-card');
const rightCardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      rightCardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
rightCards.forEach(card => rightCardObserver.observe(card));

// For Up Slide Cards
const upCards = document.querySelectorAll('.slide-up-card');
const upCardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      upCardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
upCards.forEach(card => upCardObserver.observe(card));

// For Scroll Animate Elements
const scrollElements = document.querySelectorAll('.scroll-animate');
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
scrollElements.forEach(el => scrollObserver.observe(el));

// ======================== PROJECTS FILTER ========================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
if (filterBtns.length > 0 && projectCards.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ======================== CONTACT FORM ========================
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fullname')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    if (!name || !email || !email.includes('@')) {
      formFeedback.textContent = '❌ Please provide valid name and email';
      formFeedback.classList.remove('hidden');
      formFeedback.style.color = '#dc2626';
      setTimeout(() => formFeedback.classList.add('hidden'), 3000);
      return;
    }
    formFeedback.textContent = '✓ Message sent! We will contact you shortly.';
    formFeedback.classList.remove('hidden');
    formFeedback.style.color = '#10b981';
    contactForm.reset();
    setTimeout(() => formFeedback.classList.add('hidden'), 4000);
  });
}

// ======================== ACTIVE NAVIGATION ========================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});

// ======================== FAQ ACCORDION ========================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    });
    if (faqItems[0]) faqItems[0].classList.add('active');
  }
}

// ======================== SERVICE TILE CLICK ========================
const serviceTiles = document.querySelectorAll('.service-tile');
const serviceSelect = document.getElementById('service');
serviceTiles.forEach(tile => {
  tile.addEventListener('click', () => {
    const serviceName = tile.querySelector('span')?.innerText;
    if (serviceName && serviceSelect) {
      serviceSelect.value = serviceName;
      document.querySelector('.contact-page-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ======================== INITIALIZE ========================
document.addEventListener('DOMContentLoaded', function() {
  initLanguageButtons();
  initFaqAccordion();
});

// ======================== RE-RUN ON PAGE SHOW ========================
window.addEventListener('pageshow', function() {
  const allAnimateElements = document.querySelectorAll('.slide-left-card, .slide-right-card, .slide-up-card, .scroll-animate, .services-grid .flip-card, .two-column .story-text, .two-column .img-hover-zoom');
  allAnimateElements.forEach(el => el.classList.remove('animate-in'));
  
  setTimeout(() => {
    const newObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          newObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    allAnimateElements.forEach(el => newObserver.observe(el));
  }, 100);
});