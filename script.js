document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect for the logos and sections
    const fadeInElements = document.querySelectorAll(".logo, .section-container, .hero-section, .testimonial-section, .cta-section");
  
    fadeInElements.forEach(element => {
      element.style.opacity = 1;
      element.style.transition = "opacity s ease-in-out";
    });
  
    // Add fade-in on scroll
    const fadeInOnScroll = () => {
      fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.style.opacity = 1;
        }
      });
    };
  
    window.addEventListener("scroll", fadeInOnScroll);
  
    // Smooth scroll for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  
    // Hover effect on CTA buttons
    const ctaButtons = document.querySelectorAll(".cta-button, .hero-btn");
  
    ctaButtons.forEach(button => {
      button.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
        this.style.transition = "transform 0.3s ease-in-out";
      });
  
      button.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
      });
    });
  
    // Hover effect on logos
    const logos = document.querySelectorAll(".logo");
    logos.forEach(logo => {
      logo.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s ease-in-out";
      });
  
      logo.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
      });
    });
  });
  