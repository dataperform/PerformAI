document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 75,
          behavior: "smooth",
        })
      }
    })
  })

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  document.querySelectorAll(".fade-in, .fade-in-delayed").forEach((el) => {
    observer.observe(el)
  })

  // Form submission handling
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Animate button on submit
      const submitButton = this.querySelector('button[type="submit"]')
      submitButton.innerHTML = "Enviando..."
      submitButton.disabled = true

      // Simulate form submission (replace with actual form submission)
      setTimeout(() => {
        submitButton.innerHTML = "Mensagem Enviada!"
        submitButton.classList.remove("btn-primary")
        submitButton.classList.add("btn-success")

        // Reset form after 2 seconds
        setTimeout(() => {
          this.reset()
          submitButton.innerHTML = "Enviar"
          submitButton.classList.remove("btn-success")
          submitButton.classList.add("btn-primary")
          submitButton.disabled = false
        }, 2000)
      }, 1500)
    })
  }
})

