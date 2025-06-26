document.addEventListener("DOMContentLoaded", () => {
  // MENU TOGGLE
  const menuOpenEl = document.getElementById("menuLabel");
  const menuCloseEl = document.getElementById("close-button");
  const menuPanelEl = document.getElementById("menuPanel");

  if (menuOpenEl && menuPanelEl) {
    menuOpenEl.addEventListener("click", () => {
      menuPanelEl.classList.add("open");
    });
  }

  if (menuCloseEl && menuPanelEl) {
    menuCloseEl.addEventListener("click", () => {
      menuPanelEl.classList.remove("open");
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuPanelEl.classList.contains("open")) {
      menuPanelEl.classList.remove("open");
    }
  });

  // HASH LINK SCROLL AND CLOSE MENU
  const hash = window.location.hash;
  if (hash) {
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }

  const links = document.querySelectorAll(".menu-panel a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menuPanelEl.classList.remove("open");
    });
  });

  // SCROLL PROMPT
  const scrollPrompt = document.querySelector(".scroll-prompt");
  const targetSection = document.querySelector(".target-section");
  if (scrollPrompt && targetSection) {
    scrollPrompt.addEventListener("click", () => {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // GSAP: HERO IMAGE ZOOM
  gsap.to(".hero-image", {
    scale: 1,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".hero-image",
      start: "top 20%",
      scrub: 2,
    },
  });

  // GSAP: VERTICAL/HORIZONTAL DROP LINE ANIMATION
  const verticalLine = document.querySelector(".drop-line");
  const triggerDiv = document.querySelector("#about");

  const applyVerticalAnimation = () => {
    gsap.fromTo(verticalLine, { height: 0 }, {
      height: "70%",
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: triggerDiv,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
        once: true,
      },
    });
  };

  const applyHorizontalAnimation = () => {
    gsap.fromTo(verticalLine, { width: 0 }, {
      width: "100%",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: triggerDiv,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
        once: true,
      },
    });
  };

  const mediaQuery = window.matchMedia("(max-width: 486px)");
  const handleMediaChange = (e) => {
    gsap.killTweensOf(verticalLine);
    e.matches ? applyHorizontalAnimation() : applyVerticalAnimation();
  };

  handleMediaChange(mediaQuery);
  mediaQuery.addEventListener("change", handleMediaChange);

  // GSAP: LINES FROM WORK/CLIENT SECTION
  const animateLine = (selector, height, trigger) => {
    const line = document.querySelector(selector);
    gsap.fromTo(line, { height: 0 }, {
      height,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });
  };

  animateLine(".drop-line-small", "100%", "#work-content");
  animateLine(".drop-line-small-right", "42%", "#work-content");

  const animateHorizontal = (selector, trigger) => {
    const line = document.querySelector(selector);
    gsap.fromTo(line, { width: 0 }, {
      width: "100%",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger,
        start: "top center",
        toggleActions: "play none none none",
      },
    });
  };

  [
    ".horizontal-line",
    ".horizontal-line-bottom",
    ".horizontal-line-small"
  ].forEach((selector) => animateHorizontal(selector, "#work-content"));

  // NEW DROP LINES FOR MOBILE
  const triggerWork = document.querySelector("#work-content-wrapper");
  const triggerClient = document.querySelector("#clients-content");

  if (window.innerWidth <= 480) {
    [".new-drop-line", ".new-drop-line-second"].forEach(sel => animateHorizontal(sel, triggerWork));
    [".drop-line-client", ".drop-line-client-second"].forEach(sel => animateHorizontal(sel, triggerClient));
  }

  // CLIENT SECTION RESPONSIVE DROP LINE
  const clientDropLine = document.querySelector(".drop-line-small-client");
  const determineHeight = () => {
    if (window.matchMedia("(max-width: 768px)").matches) return "95%";
    if (window.matchMedia("(max-width: 1440px)").matches) return "94%";
    return "80%";
  };

  const applyClientDropLine = () => {
    gsap.killTweensOf(clientDropLine);
    gsap.fromTo(clientDropLine, { height: 0 }, {
      height: determineHeight(),
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: triggerClient,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });
  };

  applyClientDropLine();
  window.addEventListener("resize", applyClientDropLine);

  // HORIZONTAL CLIENT LINES
  const clientLines = document.querySelectorAll(".horizontal-line-small-client");
  clientLines.forEach((line) => {
    gsap.fromTo(line, { width: 0 }, {
      width: "100%",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: line.parentElement,
        start: "top center",
        toggleActions: "play none none none",
      },
    });
  });

  // Handle gallery item click
  const gallery = document.querySelector(".box");
  gallery.addEventListener("click", () => {
    window.location.href = "/gallery/index.html";
  });

  // MARQUEE INFINITE SCROLL
  const marquee = document.querySelector(".marquee");
  const cloneItems = () => {
    [...marquee.children].forEach((item) => {
      marquee.appendChild(item.cloneNode(true));
    });
  };
  cloneItems();
  gsap.to(".marquee", {
    xPercent: -50,
    duration: 10,
    ease: "none",
    repeat: -1,
  });

  // OVERLAY TRIGGER
  gsap.to(".overlay", {
    opacity: 1,
    pointerEvents: "auto",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".container",
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
    },
  });
});
