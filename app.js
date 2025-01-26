document.addEventListener("DOMContentLoaded", () => {
  const scrollPrompt = document.querySelector(".scroll-prompt");

  scrollPrompt.addEventListener("click", () => {
    window.scrollBy({
      top: 500, // Number of pixels to scroll vertically
      behavior: "smooth", // Smooth scrolling
    });
  });
});




// Hero Image Scroll Animation
gsap.to('.hero-image', {
  top: '80%',
  scale: 1,
  duration: 1.5,
  scrollTrigger: {
    trigger: '.hero-image',
    scroller: 'body',
    start: 'top 20%',
    // end: 'top 10%',
    markers: true,
    scrub: 2,
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const verticalLine = document.querySelector('.drop-line');
  const triggerDiv = document.querySelector('#about');
  
  // gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    verticalLine,
    { height: 0 }, // Start state
    {
      height: '75%', // End state
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: triggerDiv,
        start: 'top center', // Adjust as necessary
        toggleActions: 'play none none none', // Play once
        // once : true,  
        end: 'bottom center', // The animation will end when the bottom of the #about section reaches the center of the viewport
      
      },
    }
  );
});

document.addEventListener('DOMContentLoaded', () => {
  const verticalLine = document.querySelector('.drop-line-small');
  const triggerDiv = document.querySelector('#work-content');
  
  // gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    verticalLine,
    { height: 0 }, // Start state
    {
      height: '100%', // End state
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: triggerDiv,
        start: 'top center', // Adjust as necessary
        toggleActions: 'play none none none', // Play once
        // once : true,  
        end: 'bottom center', // The animation will end when the bottom of the #about section reaches the center of the viewport
      
      },
    }
  );
});
document.addEventListener('DOMContentLoaded', () => {
  const verticalLine = document.querySelector('.drop-line-small-right');
  const triggerDiv = document.querySelector('#work-content');
  
  // gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    verticalLine,
    { height: 0 }, // Start state
    {
      height: '42%', // End state
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: triggerDiv,
        start: 'top center', // Adjust as necessary
        toggleActions: 'play none none none', // Play once
        // once : true,  
        end: 'bottom center', // The animation will end when the bottom of the #about section reaches the center of the viewport
      
      },
    }
  );
});

document.addEventListener('DOMContentLoaded', () => {
  const verticalLine = document.querySelector('.horizontal-line');
  const triggerDiv = document.querySelector('#work-content');

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    verticalLine,
    { width: 0 }, // Start state
    {
      width: '100%', // End state
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: triggerDiv,
        start: 'top center', // When the top of the trigger div hits the center of the viewport
        toggleActions: 'play none none none', // Play once
      },
    }
  );
});

document.addEventListener('DOMContentLoaded', () => {
  const verticalLine = document.querySelector('.horizontal-line-bottom');
  const triggerDiv = document.querySelector('#work-content');

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    verticalLine,
    { width: 0 }, // Start state
    {
      width: '100%', // End state
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: triggerDiv,
        start: 'top center', // When the top of the trigger div hits the center of the viewport
        toggleActions: 'play none none none', // Play once
      },
    }
  );
});

document.addEventListener('DOMContentLoaded', () => {
  const verticalLine = document.querySelector('.horizontal-line-small');
  const triggerDiv = document.querySelector('#work-content');

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    verticalLine,
    { width: 0 }, // Start state
    {
      width: '100%', // End state
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: triggerDiv,
        start: 'top center', // When the top of the trigger div hits the center of the viewport
        toggleActions: 'play none none none', // Play once
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  const marquee = document.querySelector(".marquee");

  // Clone marquee items to create an infinite scrolling effect
  const cloneItems = () => {
    const items = [...marquee.children]; // Convert NodeList to an array
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      marquee.appendChild(clone);
    });
  };

  cloneItems();

  // Initialize GSAP animation
  gsap.to(".marquee", {
    xPercent: -50, // Move the marquee left by 50% of its width
    duration: 10,  // Speed of the animation
    ease: "none",
    repeat: -1,    // Infinite loop
  });
});


gsap.to('.overlay', {
  opacity: 1, // Fully visible
  pointerEvents: 'auto', // Enable interactions
  duration: 0.5, // Smooth transition duration
  scrollTrigger: {
    trigger: '.container', // Trigger when .container enters viewport
    start: 'top center', // Start when the top of .container is in the center of the viewport
    end: 'bottom center', // End when the bottom of .container is in the center of the viewport
    toggleActions: 'play reverse play reverse', // Play animation on scroll in, reverse on scroll out
    markers: false, // Set to true for debugging scroll positions
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const horizontalLines = document.querySelectorAll('.horizontal-line-small-client');

  gsap.registerPlugin(ScrollTrigger);

  horizontalLines.forEach((line, index) => {
    gsap.fromTo(
      line,
      { width: 0 }, // Start state
      {
        width: '100%', // End state
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: line.parentElement, // Trigger based on the parent of each line
          start: 'top center', // Start animation when parent enters the viewport
          toggleActions: 'play none none none', // Play once
        },
      }
    );
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const verticalLine = document.querySelector('.drop-line-small-client');
  const triggerDiv = document.querySelector('#clients-content');
  
  // gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    verticalLine,
    { height: 0 }, // Start state
    {
      height: '80%', // End state
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: triggerDiv,
        start: 'top center', // Adjust as necessary
        toggleActions: 'play none none none', // Play once
        // once : true,  
        end: 'bottom center', // The animation will end when the bottom of the #about section reaches the center of the viewport
      
      },
    }
  );
});