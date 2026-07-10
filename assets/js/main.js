/**
 * main.js — Portfolio CV
 * Author: [NAMA LENGKAP]
 * Description: Vanilla JavaScript ES6 utama yang mengelola semua
 *              interaktivitas, animasi, dan efek visual portfolio
 */

'use strict';

/* ================================================================
   1. LOADING SCREEN
   ================================================================ */
(function initLoader() {
  const loadingScreen = document.getElementById('loading-screen');
  const loadingBar = document.getElementById('loading-bar');

  if (!loadingScreen || !loadingBar) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15 + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(hideLoader, 400);
    }
    loadingBar.style.width = `${Math.min(progress, 100)}%`;
  }, 80);

  function hideLoader() {
    loadingScreen.classList.add('hidden');
    initGSAPAnimations();
  }
})();

/* ================================================================
   2. CUSTOM CURSOR - BIDIKAN MERAH ARTISTIK
   ================================================================ */
(function initArtisticCursor() {
  const cursor = document.getElementById('cursorTarget');
  if (!cursor) return;

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let isVisible = false;

  document.body.style.cursor = 'none';

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isVisible) {
      cursor.classList.add('visible');
      isVisible = true;
    }
  });

  function animateCursor() {
    const speed = 0.15;
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    const rotation = (mouseX - cursorX) * 0.02;
    cursor.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.addEventListener('mousedown', (e) => {
    const burst = document.createElement('div');
    burst.className = 'cursor-click-effect';
    burst.style.left = e.clientX + 'px';
    burst.style.top = e.clientY + 'px';
    const size = 20 + Math.random() * 30;
    burst.style.width = size + 'px';
    burst.style.height = size + 'px';
    const red = 160 + Math.random() * 60;
    const green = 10 + Math.random() * 30;
    const blue = 10 + Math.random() * 30;
    burst.style.borderColor = `rgba(${red}, ${green}, ${blue}, 0.6)`;
    burst.style.boxShadow = `0 0 30px rgba(${red}, ${green}, ${blue}, 0.2)`;
    document.body.appendChild(burst);
    setTimeout(() => { if (burst.parentNode) burst.remove(); }, 700);

    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const ink = document.createElement('div');
        ink.className = 'ink-trail';
        const size = 15 + Math.random() * 25;
        ink.style.width = size + 'px';
        ink.style.height = size + 'px';
        ink.style.left = (e.clientX + (Math.random() - 0.5) * 40) + 'px';
        ink.style.top = (e.clientY + (Math.random() - 0.5) * 40) + 'px';
        ink.style.background = `radial-gradient(circle, rgba(${180 + Math.random() * 40}, ${20 + Math.random() * 30}, ${20 + Math.random() * 30}, 0.1) 0%, transparent 70%)`;
        document.body.appendChild(ink);
        setTimeout(() => { if (ink.parentNode) ink.remove(); }, 1500);
      }, i * 60);
    }
  });

  let scrollTimeout;
  let scrollCount = 0;

  window.addEventListener('scroll', () => {
    scrollCount++;
    if (scrollCount > 5) return;
    const trail = document.createElement('div');
    trail.className = 'scroll-ink-trail';
    const size = 30 + Math.random() * 40;
    trail.style.width = size + 'px';
    trail.style.height = size + 'px';
    trail.style.left = (cursorX + (Math.random() - 0.5) * 60) + 'px';
    trail.style.top = (cursorY + (Math.random() - 0.5) * 60) + 'px';
    const red = 150 + Math.random() * 60;
    const green = 10 + Math.random() * 30;
    const blue = 10 + Math.random() * 30;
    trail.style.background = `radial-gradient(circle, rgba(${red}, ${green}, ${blue}, 0.06) 0%, transparent 70%)`;
    document.body.appendChild(trail);
    setTimeout(() => {
      if (trail.parentNode) trail.remove();
      scrollCount--;
    }, 1000);
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => { scrollCount = 0; }, 200);
  }, { passive: true });

  const interactiveElements = document.querySelectorAll(
    'a, button, .btn, .skill-card, .project-card, .hobby-card, ' +
    '.exp-card, .timeline-card, .filter-btn, .social-link, ' +
    '.nav-link, .overlay-btn, .project-btn'
  );

  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      const outerRing = cursor.querySelector('.outer-ring');
      const innerRing = cursor.querySelector('.inner-ring');
      if (outerRing) {
        outerRing.style.transform = 'scale(1.3)';
        outerRing.style.borderColor = 'rgba(200, 40, 40, 0.9)';
        outerRing.style.boxShadow = '0 0 30px rgba(200, 40, 40, 0.3)';
      }
      if (innerRing) {
        innerRing.style.transform = 'translate(-50%, -50%) scale(1.2)';
        innerRing.style.borderColor = 'rgba(220, 50, 50, 0.9)';
      }
    });
    el.addEventListener('mouseleave', () => {
      const outerRing = cursor.querySelector('.outer-ring');
      const innerRing = cursor.querySelector('.inner-ring');
      if (outerRing) {
        outerRing.style.transform = 'scale(1)';
        outerRing.style.borderColor = 'rgba(180, 30, 30, 0.7)';
        outerRing.style.boxShadow = 'none';
      }
      if (innerRing) {
        innerRing.style.transform = 'translate(-50%, -50%) scale(1)';
        innerRing.style.borderColor = 'rgba(200, 40, 40, 0.85)';
      }
    });
  });

  document.addEventListener('mouseleave', () => {
    cursor.classList.remove('visible');
    isVisible = false;
  });

  document.addEventListener('mouseenter', () => {
    cursor.classList.add('visible');
    isVisible = true;
  });

  function createInkDrop() {
    if (!isVisible) return;
    const ink = document.createElement('div');
    ink.className = 'ink-trail';
    const size = 5 + Math.random() * 15;
    ink.style.width = size + 'px';
    ink.style.height = size + 'px';
    ink.style.left = (cursorX + (Math.random() - 0.5) * 100) + 'px';
    ink.style.top = (cursorY + (Math.random() - 0.5) * 100) + 'px';
    ink.style.background = `radial-gradient(circle, rgba(180, 30, 30, 0.04) 0%, transparent 70%)`;
    ink.style.animation = 'inkTrail 2s ease-out forwards';
    document.body.appendChild(ink);
    setTimeout(() => { if (ink.parentNode) ink.remove(); }, 2000);
  }

  setInterval(() => {
    if (Math.random() > 0.7) createInkDrop();
  }, 3000);
})();

/* ================================================================
   3. SCROLL PROGRESS BAR
   ================================================================ */
(function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${progress}%`;
  }, { passive: true });
})();

/* ================================================================
   4. NAVBAR
   ================================================================ */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (!navbar) return;

  let lastScrollY = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          navbar.classList.add('hidden');
          navLinks.classList.remove('active');
          hamburger.classList.remove('active');
        } else {
          navbar.classList.remove('hidden');
        }
        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinkItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));
})();

/* ================================================================
   5. BACK TO TOP BUTTON
   ================================================================ */
(function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  const circle = document.querySelector('.progress-ring-circle');
  if (!btn || !circle) return;

  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    const offset = circumference - progress * circumference;
    circle.style.strokeDashoffset = offset;
    if (scrollTop > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ================================================================
   6. TYPING ANIMATION
   ================================================================ */
(function initTyping() {
  const typingEl = document.getElementById('typing-text');
  if (!typingEl) return;

  const texts = [
    'Fullstack Developer',
    'System Analyst',
    'Information Systems Graduate',
    'Web Developer',
    'Workflow Automation Enthusiast'
  ];

  let currentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 80;
  const deletingSpeed = 45;
  const pauseTime = 2000;

  function type() {
    const currentText = texts[currentIndex];
    if (isDeleting) {
      typingEl.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingEl.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
    let delay = isDeleting ? deletingSpeed : typingSpeed;
    if (!isDeleting && charIndex === currentText.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % texts.length;
      delay = 400;
    }
    setTimeout(type, delay);
  }
  setTimeout(type, 1000);
})();

/* ================================================================
   7. PARTICLE CANVAS BACKGROUND
   ================================================================ */
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas, { passive: true });

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.pulse = Math.random() * Math.PI * 2;
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.pulse += this.pulseSpeed;
      this.currentOpacity = this.opacity * (0.7 + 0.3 * Math.sin(this.pulse));
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) { this.reset(); }
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.currentOpacity;
      ctx.fillStyle = '#6c63ff';
      ctx.shadowBlur = 6;
      ctx.shadowColor = '#6c63ff';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  const particleCount = Math.min(80, Math.floor(window.innerWidth / 15));
  for (let i = 0; i < particleCount; i++) { particles.push(new Particle()); }

  function drawConnections() {
    const maxDist = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.15;
          ctx.save();
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = '#6c63ff';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    animationId = requestAnimationFrame(animate);
  }
  animate();

  const heroSection = document.getElementById('home');
  if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          cancelAnimationFrame(animationId);
        } else {
          animate();
        }
      });
    });
    heroObserver.observe(heroSection);
  }
})();

/* ================================================================
   8. GSAP ANIMATIONS
   ================================================================ */
function initGSAPAnimations() {
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const heroTl = gsap.timeline({ delay: 0.2 });
  heroTl
    .from('.hero-greeting', { opacity: 0, x: -30, duration: 0.8, ease: 'power3.out' })
    .from('#hero-name', { opacity: 0, y: 40, duration: 0.9, ease: 'power3.out' }, '-=0.4')
    .from('.hero-position', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' }, '-=0.5')
    .from('.hero-description', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    .from('.hero-buttons .btn', { opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=0.3')
    .from('.social-link', { opacity: 0, y: 15, duration: 0.5, stagger: 0.08, ease: 'power3.out' }, '-=0.3')
    .from('.hero-image-wrapper', { opacity: 0, scale: 0.85, duration: 1, ease: 'power3.out' }, 0.3);

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.utils.toArray('.stat-number').forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      gsap.from(el, {
        textContent: 0,
        duration: 1.5,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        onUpdate: function () { el.textContent = Math.round(Number(el.textContent)); }
      });
    });

    gsap.utils.toArray('.section-title').forEach(el => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      });
    });

    gsap.from('.skill-card', {
      opacity: 0,
      y: 30,
      scale: 0.9,
      duration: 0.5,
      stagger: 0.03,
      ease: 'back.out(1.7)',
      delay: 0.5
    });

    gsap.utils.toArray('.project-card').forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }
      });
    });
  }
}

/* ================================================================
   9. AOS INIT & SKILLS FILTER
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      delay: 0
    });
  }

  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  skillCards.forEach(card => { card.classList.remove('hidden'); });

  const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
  if (allBtn) {
    filterBtns.forEach(b => b.classList.remove('active'));
    allBtn.classList.add('active');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      skillCards.forEach((card, index) => {
        const category = card.getAttribute('data-category');
        const shouldShow = filter === 'all' || category === filter;
        if (shouldShow) {
          card.classList.remove('hidden');
          card.style.animation = 'none';
          card.offsetHeight;
          card.style.animation = `fadeInScale 0.4s ease ${index * 0.02}s both`;
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  if (!document.getElementById('filter-animation-style')) {
    const style = document.createElement('style');
    style.id = 'filter-animation-style';
    style.textContent = `
      @keyframes fadeInScale {
        from { opacity: 0; transform: scale(0.8) translateY(10px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }
});

/* ================================================================
   10. TILT CARD EFFECT
   ================================================================ */
(function initTiltEffect() {
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', handleTilt);
    card.addEventListener('mouseleave', resetTilt);
  });

  function handleTilt(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    this.style.transition = 'transform 0.1s ease';
  }

  function resetTilt() {
    this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    this.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  }
})();

/* ================================================================
   11. CONTACT FORM - FORMSPREE
   ================================================================ */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  const sendBtn = document.getElementById('btn-send');
  if (!form || !formMessage || !sendBtn) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email-input').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showFormMessage('Harap lengkapi semua field.', 'error');
      return;
    }
    if (!isValidEmail(email)) {
      showFormMessage('Format email tidak valid.', 'error');
      return;
    }

    sendBtn.disabled = true;
    const originalContent = sendBtn.innerHTML;
    sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Mengirim...</span>';

    try {
      const response = await fetch('https://formspree.io/f/mgojgagn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      if (response.ok) {
        showFormMessage(`✅ Pesan berhasil dikirim! Terima kasih, ${name}. Saya akan segera membalas.`, 'success');
        form.reset();
        setTimeout(() => { formMessage.style.display = 'none'; }, 5000);
      } else {
        showFormMessage('❌ Gagal mengirim pesan. Silakan coba lagi.', 'error');
      }
    } catch (error) {
      showFormMessage('❌ Terjadi kesalahan. Silakan coba lagi.', 'error');
    }

    sendBtn.disabled = false;
    sendBtn.innerHTML = originalContent;
  });

  function showFormMessage(msg, type) {
    formMessage.textContent = msg;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
})();

/* ================================================================
   12. SMOOTH SCROLL
   ================================================================ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

/* ================================================================
   13. RIPPLE EFFECT
   ================================================================ */
(function initRipple() {
  document.querySelectorAll('.ripple-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height) * 2;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        transform: scale(0);
        animation: rippleAnim 0.6s ease-out forwards;
        pointer-events: none;
      `;
      if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `@keyframes rippleAnim { to { transform: scale(1); opacity: 0; } }`;
        document.head.appendChild(style);
      }
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });
})();

/* ================================================================
   14. PARALLAX EFFECT
   ================================================================ */
(function initParallax() {
  const orbs = document.querySelectorAll('.gradient-orb');
  if (!orbs.length) return;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    orbs.forEach((orb, i) => {
      const speed = 0.1 + i * 0.05;
      orb.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });
})();

/* ================================================================
   15. GLOW EFFECT
   ================================================================ */
(function initGlowEffect() {
  const skillsSection = document.getElementById('skills-grid');
  if (!skillsSection) return;
  skillsSection.addEventListener('mousemove', (e) => {
    const cards = skillsSection.querySelectorAll('.skill-card:not(.hidden)');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--glow-x', `${x}px`);
      card.style.setProperty('--glow-y', `${y}px`);
    });
  });
})();

/* ================================================================
   16. ANIMATED UNDERLINE
   ================================================================ */
(function initAnimatedUnderline() {
  const sectionLines = document.querySelectorAll('.section-line');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = '60px';
        entry.target.style.transition = 'width 0.8s ease 0.3s';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  sectionLines.forEach(line => {
    line.style.width = '0px';
    observer.observe(line);
  });
})();

/* ================================================================
   17. FADE-IN OBSERVER
   ================================================================ */
(function initFadeInObserver() {
  const fadeEls = document.querySelectorAll('.exp-card-body, .contact-card-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-15px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
})();

/* ================================================================
   18. LAZY LOAD
   ================================================================ */
(function initLazyLoad() {
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imgObserver.unobserve(img);
        }
      });
    });
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      imgObserver.observe(img);
    });
  }
})();

/* ================================================================
   19. DEBOUNCE UTILITY
   ================================================================ */
function debounce(fn, delay = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/* ================================================================
   20. HERO BADGE
   ================================================================ */
(function initHeroBadge() {
  const badge = document.querySelector('.hero-badge');
  if (!badge) return;
  badge.addEventListener('mouseenter', () => {
    badge.style.transform = 'scale(1.05)';
    badge.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  });
  badge.addEventListener('mouseleave', () => {
    badge.style.transform = 'scale(1)';
  });
})();

/* ================================================================
   21. WINDOW RESIZE HANDLER
   ================================================================ */
window.addEventListener('resize', debounce(() => {
  if (typeof AOS !== 'undefined') AOS.refresh();
  if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
}, 300));

/* ================================================================
   22. EASTER EGG - KONAMI CODE
   ================================================================ */
(function initKonamiCode() {
  const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let konamiIndex = 0;
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiSequence[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiSequence.length) {
        konamiIndex = 0;
        activateEasterEgg();
      }
    } else {
      konamiIndex = 0;
    }
  });

  function activateEasterEgg() {
    document.body.style.animation = 'rainbowBG 3s ease forwards';
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rainbowBG {
        0% { filter: hue-rotate(0deg); }
        50% { filter: hue-rotate(180deg); }
        100% { filter: hue-rotate(0deg); }
      }
    `;
    document.head.appendChild(style);
    console.log('%c🎮 Konami Code Activated!', 'font-size: 20px; color: #6c63ff; font-weight: bold;');
    setTimeout(() => {
      document.body.style.animation = '';
      style.remove();
    }, 3000);
  }
})();

/* ================================================================
   23. DARK MODE TOGGLE
   ================================================================ */
(function initDarkMode() {
  const toggleBtn = document.getElementById('darkModeToggle');
  if (!toggleBtn) return;
  const icon = toggleBtn.querySelector('i');

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
    icon.className = 'fas fa-sun';
    toggleBtn.classList.add('active');
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      icon.className = 'fas fa-sun';
      toggleBtn.classList.add('active');
      localStorage.setItem('theme', 'dark');
    } else {
      icon.className = 'fas fa-moon';
      toggleBtn.classList.remove('active');
      localStorage.setItem('theme', 'light');
    }
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.body.classList.add('dark-mode');
        icon.className = 'fas fa-sun';
        toggleBtn.classList.add('active');
      } else {
        document.body.classList.remove('dark-mode');
        icon.className = 'fas fa-moon';
        toggleBtn.classList.remove('active');
      }
    }
  });
})();

/* ================================================================
   24. CONSOLE BRANDING
   ================================================================ */
console.log(
  '%c\n██████╗ ███████╗██╗   ██╗\n██╔══██╗██╔════╝██║   ██║\n██║  ██║█████╗  ██║   ██║\n██║  ██║██╔══╝  ╚██╗ ██╔╝\n██████╔╝███████╗ ╚████╔╝ \n╚═════╝ ╚══════╝  ╚═══╝  \n',
  'color: #6c63ff; font-family: monospace;'
);
console.log('%c👋 Hi! Built with ❤️ by [NAMA LENGKAP]', 'font-size: 14px; color: #a855f7; font-weight: bold;');
console.log('%c📧 Contact: [EMAIL ANDA]', 'font-size: 12px; color: #8892b0;');ment.addEventListener('DOMContentLoaded', init);
//   } else {
//     init();
//   }

//   function init() {
//     const filterBtns = document.querySelectorAll('.filter-btn');
//     const skillCards = document.querySelectorAll('.skill-card');

//     // ===== TAMBAHKAN KODE INI =====
//     // Pastikan semua skill tampil saat pertama kali load
//     skillCards.forEach(card => {
//       card.classList.remove('hidden');
//     });

//     // Pastikan tombol "All" aktif
//     const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
//     if (allBtn) {
//       filterBtns.forEach(b => b.classList.remove('active'));
//       allBtn.classList.add('active');
//     }
//     // ===== SAMPAI SINI =====

//     filterBtns.forEach(btn => {
//       btn.addEventListener('click', () => {
//         // Update active button
//         filterBtns.forEach(b => b.classList.remove('active'));
//         btn.classList.add('active');

//         const filter = btn.getAttribute('data-filter');

//         skillCards.forEach((card, index) => {
//           const category = card.getAttribute('data-category');
//           const shouldShow = filter === 'all' || category === filter;

//           if (shouldShow) {
//             card.classList.remove('hidden');
//             // Animasi masuk dengan stagger
//             card.style.animation = 'none';
//             card.offsetHeight; // reflow
//             card.style.animation = `fadeInScale 0.4s ease ${index * 0.02}s both`;
//           } else {
//             card.classList.add('hidden');
//           }
//         });
//       });
//     });

//     // Tambahkan keyframe jika belum ada
//     if (!document.getElementById('filter-animation-style')) {
//       const style = document.createElement('style');
//       style.id = 'filter-animation-style';
//       style.textContent = `
//         @keyframes fadeInScale {
//           from { opacity: 0; transform: scale(0.8) translateY(10px); }
//           to { opacity: 1; transform: scale(1) translateY(0); }
//         }
//       `;
//       document.head.appendChild(style);
//     }
//   }
// })();


/* ================================================================
   12. CONTACT FORM
   ================================================================ */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  const sendBtn = document.getElementById('btn-send');

  if (!form || !formMessage || !sendBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email-input').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    // Validasi dasar
    if (!name || !email || !message) {
      showFormMessage('Harap lengkapi semua field.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showFormMessage('Format email tidak valid.', 'error');
      return;
    }

    // Animasi tombol kirim
    sendBtn.disabled = true;
    const originalContent = sendBtn.innerHTML;
    sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Mengirim...</span>';

    /**
     * GANTI DATA DIRI DI SINI:
     * Untuk mengirim form secara nyata, gunakan salah satu:
     * 1. Formspree.io — Ganti URL di bawah dengan endpoint Formspree Anda
     * 2. EmailJS — Gunakan library EmailJS dan kredensial Anda
     * 3. Backend sendiri (Laravel, Node.js, dll)
     *
     * Contoh Formspree:
     * fetch('https://formspree.io/f/[YOUR-FORM-ID]', { method: 'POST', ... })
     */

    // Simulasi pengiriman (ganti dengan integrasi nyata)
    setTimeout(() => {
      sendBtn.disabled = false;
      sendBtn.innerHTML = originalContent;

      // Tampilkan pesan sukses
      showFormMessage(
        `✅ Pesan berhasil dikirim! Terima kasih, ${name}. Saya akan segera membalas.`,
        'success'
      );

      // Reset form
      form.reset();

      // Sembunyikan pesan setelah 5 detik
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 5000);

    }, 1800);
  });

  function showFormMessage(msg, type) {
    formMessage.textContent = msg;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
})();

/* ================================================================
   13. SMOOTH SCROLL (tambahan untuk browser lama)
   ================================================================ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

/* ================================================================
   14. RIPPLE EFFECT
   ================================================================ */
(function initRipple() {
  document.querySelectorAll('.ripple-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height) * 2;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        transform: scale(0);
        animation: rippleAnim 0.6s ease-out forwards;
        pointer-events: none;
      `;

      // Tambahkan keyframe jika belum ada
      if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
          @keyframes rippleAnim {
            to { transform: scale(1); opacity: 0; }
          }
        `;
        document.head.appendChild(style);
      }

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });
})();

/* ================================================================
   15. PARALLAX EFFECT pada scroll
   ================================================================ */
(function initParallax() {
  const orbs = document.querySelectorAll('.gradient-orb');
  if (!orbs.length) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    orbs.forEach((orb, i) => {
      const speed = 0.1 + i * 0.05;
      orb.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });
})();

/* ================================================================
   16. GLOW EFFECT — Mouse tracking pada skill cards
   ================================================================ */
(function initGlowEffect() {
  const skillsSection = document.getElementById('skills-grid');
  if (!skillsSection) return;

  skillsSection.addEventListener('mousemove', (e) => {
    const cards = skillsSection.querySelectorAll('.skill-card:not(.hidden)');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--glow-x', `${x}px`);
      card.style.setProperty('--glow-y', `${y}px`);
    });
  });
})();

/* ================================================================
   17. ANIMATED UNDERLINE pada section titles
   ================================================================ */
(function initAnimatedUnderline() {
  const sectionLines = document.querySelectorAll('.section-line');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = '60px';
        entry.target.style.transition = 'width 0.8s ease 0.3s';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  sectionLines.forEach(line => {
    line.style.width = '0px';
    observer.observe(line);
  });
})();

/* ================================================================
   18. FADE-IN ANIMATION saat scroll (IntersectionObserver)
   ================================================================ */
(function initFadeInObserver() {
  const fadeEls = document.querySelectorAll('.exp-card-body, .contact-card-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-15px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
})();

/* ================================================================
   19. PROJECT THUMBNAIL LAZY LOAD
   ================================================================ */
(function initLazyLoad() {
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imgObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      imgObserver.observe(img);
    });
  }
})();

/* ================================================================
   20. UTILITY: Debounce
   ================================================================ */
function debounce(fn, delay = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/* ================================================================
   21. HERO BADGE — Animasi ripple pulse manual
   ================================================================ */
(function initHeroBadge() {
  const badge = document.querySelector('.hero-badge');
  if (!badge) return;

  // Sudah handle lewat CSS animation, tidak perlu JS tambahan
  badge.addEventListener('mouseenter', () => {
    badge.style.transform = 'scale(1.05)';
    badge.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  });

  badge.addEventListener('mouseleave', () => {
    badge.style.transform = 'scale(1)';
  });
})();

/* ================================================================
   22. WINDOW RESIZE HANDLER
   ================================================================ */
window.addEventListener('resize', debounce(() => {
  // Re-init AOS jika window resize
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
  // Re-init ScrollTrigger jika tersedia
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.refresh();
  }
}, 300));

/* ================================================================
   23. EASTER EGG — Konami Code
   ================================================================ */
(function initKonamiCode() {
  const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiSequence[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiSequence.length) {
        konamiIndex = 0;
        activateEasterEgg();
      }
    } else {
      konamiIndex = 0;
    }
  });

  function activateEasterEgg() {
    document.body.style.animation = 'rainbowBG 3s ease forwards';
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rainbowBG {
        0% { filter: hue-rotate(0deg); }
        50% { filter: hue-rotate(180deg); }
        100% { filter: hue-rotate(0deg); }
      }
    `;
    document.head.appendChild(style);
    console.log('%c🎮 Konami Code Activated!', 'font-size: 20px; color: #6c63ff; font-weight: bold;');
    setTimeout(() => {
      document.body.style.animation = '';
      style.remove();
    }, 3000);
  }
})();

/* ================================================================
   25. DARK MODE TOGGLE
   ================================================================ */
(function initDarkMode() {
  const toggleBtn = document.getElementById('darkModeToggle');
  if (!toggleBtn) return;

  const icon = toggleBtn.querySelector('i');

  // Cek preferensi sistem
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  // Set theme awal
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
    icon.className = 'fas fa-sun';
    toggleBtn.classList.add('active');
  }

  // Toggle dark mode
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      icon.className = 'fas fa-sun';
      toggleBtn.classList.add('active');
      localStorage.setItem('theme', 'dark');
    } else {
      icon.className = 'fas fa-moon';
      toggleBtn.classList.remove('active');
      localStorage.setItem('theme', 'light');
    }

    // Refresh GSAP jika perlu
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.body.classList.add('dark-mode');
        icon.className = 'fas fa-sun';
        toggleBtn.classList.add('active');
      } else {
        document.body.classList.remove('dark-mode');
        icon.className = 'fas fa-moon';
        toggleBtn.classList.remove('active');
      }
    }
  });
})();



/* ================================================================
   24. CONSOLE BRANDING
   ================================================================ */
console.log(
  '%c\n██████╗ ███████╗██╗   ██╗\n██╔══██╗██╔════╝██║   ██║\n██║  ██║█████╗  ██║   ██║\n██║  ██║██╔══╝  ╚██╗ ██╔╝\n██████╔╝███████╗ ╚████╔╝ \n╚═════╝ ╚══════╝  ╚═══╝  \n',
  'color: #6c63ff; font-family: monospace;'
);
// GANTI DATA DIRI DI SINI: Ganti pesan dan nama Anda
console.log('%c👋 Hi! Built with ❤️ by [NAMA LENGKAP]', 'font-size: 14px; color: #a855f7; font-weight: bold;');
console.log('%c📧 Contact: [EMAIL ANDA]', 'font-size: 12px; color: #8892b0;');






