function showGreeting() {
  const greetingElement = document.getElementById("greeting");
  const hour = new Date().getHours();
  let greetingMessage = "";

  if (hour < 12) {
    greetingMessage = "Good Morning 🌞";
  } else if (hour < 18) {
    greetingMessage = "Good Afternoon 🌞";
  } else {
    greetingMessage = "Good Evening 🌞";
  }

  greetingElement.innerHTML = `${greetingMessage}`;
}

showGreeting();


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const successMessage = document.getElementById("successMessage");

  
  nameError.textContent = "";
  emailError.textContent = "";
  successMessage.textContent = "";
  successMessage.style.color = "";
  
  let isValid = true;

 
  if (name === "") {
    nameError.textContent = "Please enter your name.";
    nameError.style.color = "red";
    isValid = false;
  }

 
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    emailError.textContent = "Please enter your email.";
    emailError.style.color = "red";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email ID.";
    emailError.style.color = "red";
    isValid = false;
  }

  
  const messageError = document.getElementById("messageError");
  if (!messageError) {
    
    const span = document.createElement("span");
    span.id = "messageError";
    span.classList.add("error-message");
    document.getElementById("message").insertAdjacentElement("afterend", span);
  }
  const msgErrorEl = document.getElementById("messageError");
  msgErrorEl.textContent = "";

  if (message === "") {
    msgErrorEl.textContent = "Please enter your message.";
    msgErrorEl.style.color = "red";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Message sent successfully!";
    successMessage.style.color = "green";

    
    document.getElementById("contactForm").reset();

    setTimeout(() => {
      successMessage.textContent = "";
    }, 3000);
  }
});


const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
  }
});

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});
