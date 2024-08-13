document.addEventListener('DOMContentLoaded', function () {
      const slides = document.querySelectorAll('.slide');
      const nextButton = document.querySelector('.next');
      const prevButton = document.querySelector('.prev');
      let currentSlide = 0;
  
      function showSlide(index) {
          slides.forEach((slide, i) => {
              slide.classList.remove('active');
              if (i === index) {
                  slide.classList.add('active');
              }
          });
          document.querySelector('.slider-container').style.transform = `translateX(-${index * 100}%)`;
      }
  
      nextButton.addEventListener('click', function () {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
      });
  
      prevButton.addEventListener('click', function () {
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
          showSlide(currentSlide);
      });
  
      showSlide(currentSlide);
  });
  