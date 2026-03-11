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
  const emailRegex
