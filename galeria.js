document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer para animar al hacer scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // para que se repita si vuelven a entrar
      }
    });
  }, {
    threshold: 0.1
  });

  // Elementos a animar
  const elementsToAnimate = document.querySelectorAll(
    '.gallery-item, .main-header, .pricing-card, .pricing-title, .pricing-subtitle'
  );

  elementsToAnimate.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });

  // Lightbox animación de aparición
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector("img");

  document.querySelectorAll(".gallery-item img").forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      lightboxImg.src = img.src;
      lightboxImg.classList.add("pop-effect");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    lightboxImg.classList.remove("pop-effect");
    lightboxImg.src = "";
  });
});
