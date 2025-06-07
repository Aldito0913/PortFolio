// Efecto de entrada suave y configuración inicial
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  // Scroll suave al hacer clic en botón "Ver Galería"
  const btnGaleria = document.querySelector(".cta-button");
  const galeria = document.querySelector(".thumbnails");
  if (btnGaleria && galeria) {
    btnGaleria.addEventListener("click", () => {
      galeria.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Mostrar/ocultar sección "Sobre mí"
  const sobreMiToggle = document.querySelector(".topbar a[href='#sobremi']");
  const cortina = document.getElementById("cortina-sobremi");
  if (sobreMiToggle && cortina) {
    sobreMiToggle.addEventListener("click", (e) => {
      e.preventDefault();
      cortina.classList.toggle("visible");
    });
  }

  // Animación al hacer scroll para elementos con clase .fade-trigger
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-up");
        observer.unobserve(entry.target); // Solo animar una vez
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".fade-trigger").forEach(el => {
    observer.observe(el);
  });

  // Sidebar: resalta el ícono activo al hacer clic
  const navLinks = document.querySelectorAll(".sidebar-nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Modo oscuro toggle (si existe el botón)
  const toggleDarkMode = document.getElementById("dark-mode-toggle");
  if (toggleDarkMode) {
    toggleDarkMode.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // Efecto animado al pasar sobre el encabezado principal
  const headline = document.querySelector(".headline");
  if (headline) {
    headline.addEventListener("mouseenter", () => {
      headline.style.letterSpacing = "2px";
    });
    headline.addEventListener("mouseleave", () => {
      headline.style.letterSpacing = "normal";
    });
  }

  // AOS fallback en pantallas pequeñas
  if (window.innerWidth < 480) {
    document.querySelectorAll("[data-aos]").forEach(el => {
      el.removeAttribute("data-aos");
    });
  }

  // Tooltip para íconos de redes sociales
  const socialIcons = document.querySelectorAll(".social-icon");
  const tooltip = document.querySelector(".tooltip");

  if (tooltip && socialIcons.length > 0) {
    socialIcons.forEach(icon => {
      icon.addEventListener("mouseenter", () => {
        const user = icon.getAttribute("data-user");
        tooltip.textContent = user;

        const rect = icon.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - 40 + window.scrollY}px`;
        tooltip.classList.add("visible");
      });

      icon.addEventListener("mouseleave", () => {
        tooltip.classList.remove("visible");
      });
    });
  }
});
