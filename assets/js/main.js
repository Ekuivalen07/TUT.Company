// =========================================
// TUT.COMPANY — Interactive Engine & Motion
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  initScrollProgress();
  initNavbarScroll();
  initMobileMenu();
  initScrollReveal();
  initCounters();
  initHeroSlider();
  initParallaxElements();
  initNewsletterForms();
  initQuickModal();
});

/* 1. Top Scroll Progress Bar */
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${progress}%`;
  }, { passive: true });
}

/* 2. Sticky Glass Navbar */
function initNavbarScroll() {
  const nav = document.getElementById("main-navbar");
  if (!nav) return;
  const toggleNav = () => {
    if (window.scrollY > 24) {
      nav.classList.add("navbar-scrolled");
    } else {
      nav.classList.remove("navbar-scrolled");
    }
  };
  toggleNav();
  window.addEventListener("scroll", toggleNav, { passive: true });
}

/* 3. Responsive Mobile Menu */
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isHidden = menu.classList.contains("hidden");
    menu.classList.toggle("hidden", !isHidden);
    btn.setAttribute("aria-expanded", String(isHidden));
  });
}

/* 4. IntersectionObserver Scroll Reveal with Stagger */
function initScrollReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute("data-delay") || "0";
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add("revealed");
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  items.forEach((el) => observer.observe(el));
}

/* 5. Smooth Animated Counters */
function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const animateCount = (el) => {
    const target = parseInt(el.getAttribute("data-counter"), 10);
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1600;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = `${current}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = `${target}${suffix}`;
      }
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach((el) => observer.observe(el));
}

/* 6. Interactive Hero Showcase Slider */
function initHeroSlider() {
  const imgEl = document.getElementById("hero-slide-img");
  const titleEl = document.getElementById("hero-slide-title");
  const tagEl = document.getElementById("hero-slide-tag");
  const indexEl = document.getElementById("hero-slide-index");
  const ctaEl = document.getElementById("hero-slide-cta");
  const prevBtn = document.getElementById("hero-prev");
  const nextBtn = document.getElementById("hero-next");

  if (!imgEl || typeof TUT_DATA === "undefined") return;

  let current = 0;
  const slides = TUT_DATA.heroSlides;
  let timer;

  const renderSlide = (idx) => {
    const slide = slides[idx];
    imgEl.classList.add("hero-slide-entering");
    setTimeout(() => {
      imgEl.src = slide.image;
      imgEl.alt = slide.tag;
      if (titleEl) titleEl.textContent = slide.title;
      if (tagEl) tagEl.textContent = slide.tag;
      if (indexEl) indexEl.textContent = `${slide.index} / 0${slides.length}`;
      if (ctaEl) {
        ctaEl.href = slide.ctaLink;
        const span = ctaEl.querySelector("span");
        if (span) span.textContent = slide.ctaText;
      }
      imgEl.classList.remove("hero-slide-entering");
    }, 220);
  };

  const nextSlide = () => {
    current = (current + 1) % slides.length;
    renderSlide(current);
  };

  const prevSlide = () => {
    current = (current - 1 + slides.length) % slides.length;
    renderSlide(current);
  };

  const resetAutoplay = () => {
    clearInterval(timer);
    timer = setInterval(nextSlide, 6000);
  };

  if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); resetAutoplay(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); resetAutoplay(); });

  resetAutoplay();
}

/* 7. Subtle Mouse Parallax on Floating Cards */
function initParallaxElements() {
  const items = document.querySelectorAll("[data-parallax]");
  if (!items.length || window.matchMedia("(max-width: 768px)").matches) return;

  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    items.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-parallax")) || 10;
      el.style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0)`;
    });
  }, { passive: true });
}

/* 8. Toast Notification Helper */
function showToast(message) {
  let toast = document.getElementById("tut-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "tut-toast";
    toast.className = "fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0A0B0F] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-white/10 text-sm font-medium translate-y-10 opacity-0 transition-all duration-300";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-[#CDF22B] shrink-0"></span><span>${message}</span>`;
  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-10", "opacity-0");
  });
  setTimeout(() => {
    toast.classList.add("translate-y-10", "opacity-0");
  }, 3400);
}

/* 9. Newsletter Form Handler */
function initNewsletterForms() {
  document.querySelectorAll(".newsletter-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type='email']");
      if (input && input.value.trim()) {
        showToast("Subscribed! Welcome to the TUT.Company innovation dispatch.");
        input.value = "";
      }
    });
  });
}

/* 10. Ecosystem / Tech Quick Detail Modal */
function initQuickModal() {
  const overlay = document.getElementById("quick-modal");
  if (!overlay) return;

  const closeBtn = document.getElementById("modal-close");
  const titleEl = document.getElementById("modal-title");
  const badgeEl = document.getElementById("modal-badge");
  const descEl = document.getElementById("modal-desc");
  const listEl = document.getElementById("modal-list");
  const linkEl = document.getElementById("modal-link");

  window.openTechModal = (type, id) => {
    if (typeof TUT_DATA === "undefined") return;
    let item;
    if (type === "tech") {
      item = TUT_DATA.coreTech.find((t) => t.id === id);
      if (!item) return;
      badgeEl.textContent = "TUT.Company Core Division";
      titleEl.textContent = item.title;
      descEl.textContent = item.shortDesc;
      listEl.innerHTML = item.deliverables.map((d) =>
        `<li class="flex items-center gap-2.5 text-sm text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-[#1E45FB]"></span>${d}</li>`
      ).join("");
      linkEl.href = `solutions.html#${id}`;
      linkEl.textContent = "Explore Division Projects";
    } else if (type === "ecosystem") {
      item = TUT_DATA.ecosystem.find((e) => e.id === id);
      if (!item) return;
      badgeEl.textContent = `${item.badge} • ${item.stats}`;
      titleEl.textContent = item.name;
      descEl.textContent = item.summary;
      listEl.innerHTML = item.highlights.map((h) =>
        `<li class="flex items-center gap-2.5 text-sm text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-[#1E45FB]"></span>${h}</li>`
      ).join("");
      linkEl.href = `ecosystem.html#${id}`;
      linkEl.textContent = `Visit ${item.name} Details`;
    }
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}