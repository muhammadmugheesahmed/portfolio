document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const navLinks = document.getElementById("nav-links");
  const menuToggle = document.getElementById("menu-toggle");

  // Mobile menu toggle
  function toggleNav() {
    navLinks.classList.toggle("show");
    const menuIcon = menuToggle.querySelector("i");
    if (navLinks.classList.contains("show")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
    } else {
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", toggleNav);
  }

  // Close mobile menu when a link is clicked
  document.querySelectorAll("#nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("show")) {
        toggleNav();
      }
    });
  });

  // Sticky header on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Section reveal animation
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // ✅ Initialize EmailJS
  emailjs.init("Pn9uaGxw2hXs-llnG"); // Make sure this is your real public key

  // ✅ Contact form submission
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_u5skyro", "template_p09eknt", form) // ⚠️ Fixed extra space in template ID
        .then(() => {
          alert("Message sent to email successfully! ✅");
          form.reset();
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message ❌");
        });
    });
  }
});


//service_u5skyro            service id
//0For34Sn-JUxmH7_L8np6      private key
//Pn9uaGxw2hXs-llnG          public key
//template_p09eknt           template id