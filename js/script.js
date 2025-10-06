// ---------- CONTACT FORM VALIDATION ----------
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Name validation
  if (name === "") {
    alert("Please enter your full name.");
    return false;
  }

  // Email validation
  if (email === "") {
    alert("Please enter your email address.");
    return false;
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  }

  // Message validation
  if (message === "") {
    alert("Please enter your message.");
    return false;
  }

  alert("Thank you! Your message has been submitted.");
  return true;
}

// ---------- LUXURY CAR QUIZ ----------
function checkQuiz() {
  let score = 0;

  // Correct answers for the quiz
  const answers = {
    q1: "c", // Mercedes-Benz
    q2: "a", // Ferrari LaFerrari (Hybrid)
    q3: "b", // Bespoke craftsmanship and comfort
    q4: "a", // Electric and petrol power (Hybrid)
  };

  // Loop through each question
  for (let i = 1; i <= 4; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === answers[`q${i}`]) {
      score++;
    }
  }

  // Display result
  const result = document.getElementById("quizResult");
  result.textContent = `You scored ${score} out of 4!`;

  return false; // Prevent form submission reload
}

// ---------- ATTACH QUIZ FORM SUBMISSION ----------
document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quizForm");
  if (quizForm) {
    quizForm.onsubmit = checkQuiz;
  }
});
