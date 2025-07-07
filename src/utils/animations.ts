export const setupScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
  animatedElements.forEach((el) => observer.observe(el));

  // Add CSS classes for animations
  const style = document.createElement('style');
  style.textContent = `
    .animate-fade-in {
      opacity: 0;
      transition: opacity 0.6s ease-out;
    }
    
    .animate-fade-in.animate-in {
      opacity: 1;
    }
    
    .animate-slide-up {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .animate-slide-up.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  
  if (!document.head.querySelector('style[data-animations]')) {
    style.setAttribute('data-animations', 'true');
    document.head.appendChild(style);
  }
};