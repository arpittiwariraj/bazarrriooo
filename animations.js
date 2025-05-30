//  Animations and Interactions JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Hide page loader after page loads
  const pageLoader = document.querySelector('.page-loader');
  if (pageLoader) {
    setTimeout(() => {
      pageLoader.classList.add('hidden');
    }, 800);
  }

  // Back to top button
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Reveal animations on scroll
  const revealElements = document.querySelectorAll('.reveal-animation');
  
  const revealOnScroll = function() {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const delay = element.getAttribute('data-delay') || 0;
      
      if (elementTop < windowHeight - 100) {
        setTimeout(() => {
          element.classList.add('revealed');
        }, delay);
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  // Trigger once on load
  revealOnScroll();

  // Testimonial slider
  const testimonialSlider = document.getElementById('testimonialSlider');
  if (testimonialSlider) {
    const slides = testimonialSlider.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('#testimonialDots .dot');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    
    let currentSlide = 0;
    
    // Initialize first slide
    slides[0].classList.add('active');
    
    // Function to show slide
    const showSlide = (index) => {
      // Hide all slides
      slides.forEach(slide => {
        slide.classList.remove('active', 'slide-in', 'slide-out');
        slide.classList.add('slide-out');
      });
      
      // Remove active class from all dots
      dots.forEach(dot => dot.classList.remove('active'));
      
      // Show active slide
      slides[index].classList.remove('slide-out');
      slides[index].classList.add('active', 'slide-in');
      
      // Add active class to current dot
      dots[index].classList.add('active');
      
      currentSlide = index;
    };
    
    // Next slide
    const nextSlide = () => {
      const newIndex = (currentSlide + 1) % slides.length;
      showSlide(newIndex);
    };
    
    // Previous slide
    const prevSlide = () => {
      const newIndex = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(newIndex);
    };
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
      });
    });
    
    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
  }

  // Animated counter for stats
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    const animateCounter = (element) => {
      const target = parseInt(element.getAttribute('data-count'));
      const duration = 2000; // 2 seconds
      const frameRate = 60;
      const frameDuration = 1000 / frameRate;
      const totalFrames = duration / frameDuration;
      
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(progress * target);
        
        element.textContent = currentCount.toLocaleString();
        
        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    };
    
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5
    });
    
    statNumbers.forEach(stat => observer.observe(stat));
  }

  // File input display selected filename
  const fileInputs = document.querySelectorAll('input[type="file"]');
  fileInputs.forEach(input => {
    input.addEventListener('change', function() {
      const fileName = this.files[0] ? this.files[0].name : 'No file chosen';
      const fileNameDisplay = this.parentElement.querySelector('.file-name');
      if (fileNameDisplay) {
        fileNameDisplay.textContent = fileName;
      }
    });
  });

  // Product Item Animation
  const productItems = document.querySelectorAll('.product-item');
  productItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = 'var(--shadow-hover)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'var(--shadow)';
    });
  });

  // Map pin clicks
  const mapPins = document.querySelectorAll('.map-pin');
  mapPins.forEach(pin => {
    pin.addEventListener('click', function() {
      const vendorId = this.getAttribute('data-vendor');
      const vendorCard = document.querySelector(`.vendor-card[data-vendor="${vendorId}"]`);
      
      if (vendorCard) {
        vendorCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        vendorCard.classList.add('highlight');
        
        setTimeout(() => {
          vendorCard.classList.remove('highlight');
        }, 2000);
      }
    });
  });

  // Order tab switching
  const orderTabs = document.querySelectorAll('.order-tab');
  orderTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      orderTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Here you would also handle showing/hiding the relevant order lists
      // But for this demo we don't have multiple order lists
    });
  });
});
  