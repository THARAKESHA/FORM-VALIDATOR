document.getElementById("applicantForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form submission

  let valid = true;

  // Name validation: must be uppercase
  const name = document.getElementById("name").value;
  if (name !== name.toUpperCase()) {
    document.getElementById("nameError").textContent = "Name must be in uppercase.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation: regex
  const email = document.getElementById("email").value;
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Phone validation: numeric and length (10 digits)
  const phone = document.getElementById("phone").value;
  if (!/^\d{10}$/.test(phone)) {
    document.getElementById("phoneError").textContent = "Phone must be 10 digits.";
    valid = false;
  } else {
    document.getElementById("phoneError").textContent = "";
  }

  // Photo validation: jpg/png only
  const photo = document.getElementById("photo").files[0];
  if (photo) {
    const fileType = photo.type;
    if (fileType !== "image/jpeg" && fileType !== "image/png") {
      document.getElementById("photoError").textContent = "Only JPG or PNG allowed.";
      valid = false;
    } else {
      document.getElementById("photoError").textContent = "";
    }
  }

  // If all validations pass
  if (valid) {
    alert("Form submitted successfully!");
  }
});
