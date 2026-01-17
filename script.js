// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// Programme tabs
const tabButtons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".programme-panel");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");

    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    panels.forEach((panel) => {
      if (panel.id === target) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  });
});

// Impact counters (simple animation)
const counters = document.querySelectorAll(".impact-number");
let countersStarted = false;

function animateCounters() {
  if (countersStarted) return;
  const triggerPoint = window.innerHeight * 0.8;

  counters.forEach((counter) => {
    const rect = counter.getBoundingClientRect();
    if (rect.top < triggerPoint) {
      const target = parseInt(counter.getAttribute("data-count"), 10);
      let current = 0;
      const increment = Math.max(1, Math.floor(target / 80));

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        counter.textContent = current;
      }, 20);
    }
  });

  countersStarted = true;
}

window.addEventListener("scroll", animateCounters);
window.addEventListener("load", animateCounters);

// Contact form (simple front-end feedback)
const contactForm = document.querySelector(".contact-form");
const formNote = document.getElementById("formNote");

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formNote.textContent = "Thank you for your enquiry. We’ll be in touch shortly.";
    formNote.style.color = "#3ddc84";
    contactForm.reset();
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
