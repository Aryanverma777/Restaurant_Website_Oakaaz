// ===== Particle Background =====
function createParticles() {
  const particlesContainer = document.getElementById("particles")
  const particleCount = 50

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 15 + "s"
    particle.style.animationDuration = Math.random() * 10 + 10 + "s"
    particle.style.width = Math.random() * 3 + 2 + "px"
    particle.style.height = particle.style.width
    particlesContainer.appendChild(particle)
  }
}

// ===== Navbar Scroll Effect =====
function handleNavbarScroll() {
  const navbar = document.querySelector(".navbar")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })
}

// ===== Mobile Menu Toggle =====
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const navLinks = document.querySelector(".nav-links")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      mobileMenuBtn.classList.toggle("active")
    })
  }
}

// ===== Smooth Scroll for Navigation Links =====
function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// ===== Scroll Animation (Fade In) =====
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Add fade-in class to sections
  const sections = document.querySelectorAll(
    ".feature-card, .gallery-item, .testimonial-card, .about-content, .contact-content",
  )
  sections.forEach((section) => {
    section.classList.add("fade-in")
    observer.observe(section)
  })
}

// ===== Form Submission Handler =====
function setupFormHandler() {
  const form = document.getElementById("reservationForm")

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(form)
      const data = Object.fromEntries(formData)

      // Simple validation animation
      const submitBtn = form.querySelector(".submit-btn")
      submitBtn.textContent = "Reservation Sent!"
      submitBtn.style.background = "linear-gradient(90deg, #4ecdc4, #26a69a)"

      // Reset form
      setTimeout(() => {
        form.reset()
        submitBtn.textContent = "Make Reservation"
        submitBtn.style.background = "linear-gradient(90deg, var(--accent-purple), var(--accent-pink))"
      }, 3000)

      console.log("Reservation submitted:", data)
    })
  }
}

// ===== Feedback Form Handler =====
function setupFeedbackHandler() {
  const feedbackForm = document.getElementById("feedbackForm")

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = document.getElementById("feedbackName").value
      const email = document.getElementById("feedbackEmail").value
      const rating = document.getElementById("feedbackRating").value
      const message = document.getElementById("feedbackMessage").value

      const feedbackData = {
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
        rating: parseInt(rating),
        message: message.trim(),
        timestamp: new Date().toLocaleString(),
      }

      // Get existing feedback from localStorage
      let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || []

      // Add new feedback
      feedbacks.push(feedbackData)

      // Save to localStorage
      localStorage.setItem("feedbacks", JSON.stringify(feedbacks))

      // Update display
      const submitBtn = feedbackForm.querySelector(".submit-btn")
      submitBtn.textContent = "✓ Feedback Submitted!"
      submitBtn.style.background = "linear-gradient(90deg, #4ecdc4, #26a69a)"

      // Load and display feedback
      loadFeedback()

      // Reset form
      setTimeout(() => {
        feedbackForm.reset()
        submitBtn.textContent = "Submit Feedback"
        submitBtn.style.background = "linear-gradient(90deg, var(--accent-purple), var(--accent-pink))"
      }, 2000)

      console.log("Feedback submitted successfully:", feedbackData)
    })
  }
}

// ===== Load Feedback from localStorage =====
function loadFeedback() {
  const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || []
  const feedbackCards = document.getElementById("feedbackCards")

  if (feedbacks.length === 0) {
    feedbackCards.innerHTML = '<p class="no-feedback">No feedback yet. Be the first to share!</p>'
    return
  }

  feedbackCards.innerHTML = feedbacks
    .sort((a, b) => b.id - a.id)
    .map(
      (feedback) => `
    <div class="feedback-card fade-in visible">
      <div class="feedback-card-header">
        <div class="feedback-card-name">${escapeHtml(feedback.name)}</div>
        <div class="feedback-card-rating">${"⭐".repeat(feedback.rating)}</div>
      </div>
      <div class="feedback-card-message">${escapeHtml(feedback.message)}</div>
      <div class="feedback-card-email">${escapeHtml(feedback.email)}</div>
    </div>
  `,
    )
    .join("")
}

// ===== Escape HTML to prevent XSS =====
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

// ===== Gallery Hover Effect Enhancement =====
function setupGalleryEffects() {
  const galleryItems = document.querySelectorAll(".gallery-item")

  galleryItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.zIndex = "10"
    })

    item.addEventListener("mouseleave", () => {
      item.style.zIndex = "1"
    })
  })
}

// ===== 3D Container Placeholder Setup =====
// This function can be replaced with your actual 3D implementation
function setup3DContainer() {
  const container = document.getElementById("threeDContainer")

  if (container) {
    // Placeholder animation
    console.log("3D container ready for your Three.js or R3F implementation")

    // You can initialize your 3D scene here
    // Example with Three.js:
    // const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize(container.clientWidth, container.clientHeight);
    // container.innerHTML = '';
    // container.appendChild(renderer.domElement);
  }
}

// ===== Button Ripple Effect =====
function setupButtonRipple() {
  const buttons = document.querySelectorAll("button")

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const ripple = document.createElement("span")
      ripple.style.cssText = `
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        left: ${x}px;
        top: ${y}px;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        margin-top: -50px;
        pointer-events: none;
      `

      button.style.position = "relative"
      button.style.overflow = "hidden"
      button.appendChild(ripple)

      setTimeout(() => ripple.remove(), 600)
    })
  })

  // Add ripple animation to CSS dynamically
  const style = document.createElement("style")
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `
  document.head.appendChild(style)
}

// ===== Parallax Effect for Hero =====
function setupParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY
    const heroVisual = document.querySelector(".hero-visual")

    if (heroVisual && scrolled < window.innerHeight) {
      heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`
    }
  })
}

// ===== Initialize All Functions =====
document.addEventListener("DOMContentLoaded", () => {
  createParticles()
  handleNavbarScroll()
  setupMobileMenu()
  setupSmoothScroll()
  setupScrollAnimations()
  setupFormHandler()
  setupFeedbackHandler()
  setupGalleryEffects()
  setup3DContainer()
  setupButtonRipple()
  setupParallax()
  loadFeedback()

  console.log("🍽️ Stellar Bites website loaded successfully!")
  console.log("📦 3D container is ready for your Three.js implementation")
})
