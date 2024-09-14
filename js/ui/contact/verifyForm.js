export function verifyFrom() {
  // Get form elements
  const form = document.getElementById("contactForm");
  console.dir(form);
  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("yourMsg");

  // Error elements
  const fullnameError = document.getElementById("fullname-error");
  const emailError = document.getElementById("email-error");
  const subjectError = document.getElementById("subject-error");
  const messageError = document.getElementById("message-error");

  // Validate email format
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Show error message
  function showErrorMessage(input, message, errorElement) {
    errorElement.textContent = message;
    input.classList.add("error");
  }

  // Clear error message
  function clearErrorMessage(input, errorElement) {
    errorElement.textContent = "";
    input.classList.remove("error");
  }

  // Form validation function
  function validateForm(event) {
    let isValid = true;

    // Validate Full Name
    if (fullname.value.trim() === "") {
      showErrorMessage(fullname, "Full Name is required.", fullnameError);
      isValid = false;
    } else {
      clearErrorMessage(fullname, fullnameError);
    }

    // Validate Email
    if (email.value.trim() === "") {
      showErrorMessage(email, "Email is required.", emailError);
      isValid = false;
    } else if (!validateEmail(email.value.trim())) {
      showErrorMessage(
        email,
        "Please enter a valid email address.",
        emailError
      );
      isValid = false;
    } else {
      clearErrorMessage(email, emailError);
    }

    // Validate Subject
    if (subject.value.trim() === "") {
      showErrorMessage(subject, "Subject is required.", subjectError);
      isValid = false;
    } else {
      clearErrorMessage(subject, subjectError);
    }

    // Validate Message
    if (message.value.trim().length < 25) {
      showErrorMessage(
        message,
        "Message must be at least 25 characters long.",
        messageError
      );
      isValid = false;
    } else {
      clearErrorMessage(message, messageError);
    }

    // If form is invalid, prevent submission
    if (!isValid) {
      event.preventDefault();
    }
  }

  // Add event listener for form submission
  form.addEventListener("submit", validateForm);
}
