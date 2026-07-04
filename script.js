const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const links = document.querySelectorAll(".top-nav a");
const sections = document.querySelectorAll("main section[id]");

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

const activateLink = (id) => {
  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
  });
};

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activateLink(entry.target.id);
      }
    });
  },
  { threshold: 0.35 }
);

sections.forEach((section) => sectionObserver.observe(section));
