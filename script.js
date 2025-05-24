// Simple dropdown functionality
document.querySelector(".learn-btn").addEventListener("click", function () {
  alert("Learn dropdown clicked!");
});

// Search functionality
document.querySelector(".search-btn").addEventListener("click", function () {
  const searchTerm = document.querySelector(".search-input").value;
  if (searchTerm.trim()) {
    alert("Searching for: " + searchTerm);
  }
});

// Enter key search
document
  .querySelector(".search-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const searchTerm = this.value;
      if (searchTerm.trim()) {
        alert("Searching for: " + searchTerm);
      }
    }
  });

// Hero search functionality
document
  .querySelector(".hero-search-btn")
  .addEventListener("click", function () {
    const searchTerm = document.querySelector(".hero-search-input").value;
    if (searchTerm.trim()) {
      alert("Searching courses for: " + searchTerm);
    }
  });

// Hero search Enter key
document
  .querySelector(".hero-search-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const searchTerm = this.value;
      if (searchTerm.trim()) {
        alert("Searching courses for: " + searchTerm);
      }
    }
  });

// Course slider functionality (only for mobile)
let currentSlideIndex = 1;
const totalSlides = 3;

function currentSlide(n) {
  showSlide((currentSlideIndex = n));
}

function showSlide(n) {
  // Only run if we're on mobile (slider is visible)
  const slider = document.querySelector(".courses-slider");
  if (window.getComputedStyle(slider).display === "none") return;

  const track = document.getElementById("coursesTrack");
  const dots = document.querySelectorAll(".dot");

  if (n > totalSlides) currentSlideIndex = 1;
  if (n < 1) currentSlideIndex = totalSlides;

  track.style.transform = `translateX(-${(currentSlideIndex - 1) * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlideIndex - 1].classList.add("active");
}

// Auto slide (only for mobile)
setInterval(() => {
  const slider = document.querySelector(".courses-slider");
  if (window.getComputedStyle(slider).display === "none") return;

  currentSlideIndex++;
  if (currentSlideIndex > totalSlides) currentSlideIndex = 1;
  showSlide(currentSlideIndex);
}, 5000);

// Reset slider when window resizes
window.addEventListener("resize", () => {
  const slider = document.querySelector(".courses-slider");
  if (window.getComputedStyle(slider).display === "none") {
    // Reset to first slide when switching to desktop
    currentSlideIndex = 1;
  }
});
function scrollToCourses() {
  document.getElementById("coursesGrid").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// Course click handler
function openCourse(courseName) {
  alert(
    `Opening ${courseName} course! This would typically navigate to the course page.`
  );
}

// Pagination functionality
const dots = document.querySelectorAll(".pagination-dot");
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dots.forEach((d) => d.classList.remove("active"));
    dot.classList.add("active");

    // You could implement course pagination here
    console.log(`Page ${index + 1} selected`);
  });
});

// Add hover effects to course cards
const courseCards = document.querySelectorAll(".course-card");
courseCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// Responsive behavior
function handleResize() {
  const width = window.innerWidth;
  const coursesGrid = document.getElementById("coursesGrid");

  if (width <= 768) {
    coursesGrid.style.gridTemplateColumns = "1fr";
  } else if (width <= 1024) {
    coursesGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
  } else {
    coursesGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
  }
}

// Initialize
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe course cards for animation
document.addEventListener("DOMContentLoaded", () => {
  courseCards.forEach((card) => {
    observer.observe(card);
  });
});
function scrollToLessons() {
  const lessonGrid = document.getElementById("lessonGrid");
  if (lessonGrid) {
    lessonGrid.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

document.querySelectorAll(".footer-col li").forEach((li) => {
  li.addEventListener("mouseenter", () => {
    li.style.background = "#dc2626";
    li.style.color = "#fff";
    li.style.borderRadius = "4px";
    li.style.paddingLeft = "8px";
    li.style.transition = "all 0.2s";
  });
  li.addEventListener("mouseleave", () => {
    li.style.background = "none";
    li.style.color = "";
    li.style.paddingLeft = "";
  });
});

// Hiển thị thông báo khi đăng ký email ở footer
const subscribeForm = document.querySelector(".subscribe-form");
if (subscribeForm) {
  subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email.trim()) {
      alert("Thank you for subscribing, " + email + "!");
      this.reset();
    }
  });
}

// Hiệu ứng cuộn mượt khi bấm "Learn More"
function scrollToLessons() {
  const lessonGrid = document.getElementById("lessonGrid");
  if (lessonGrid) {
    lessonGrid.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
