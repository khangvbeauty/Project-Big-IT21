const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

let passwordFields = document.getElementsByClassName("password");
let toggleShowIcons = document.getElementsByClassName("toggleShowPassword");
let toggleHideIcons = document.getElementsByClassName("toggleHidePassword");

for (let i = 0; i < passwordFields.length; i++) {
  passwordFields[i].addEventListener("input", handlePasswordInput);
  toggleShowIcons[i].addEventListener("click", changeTypePass);
  toggleHideIcons[i].addEventListener("click", changeTypePass);
}

function handlePasswordInput(event) {
  let passwordField = event.target;
  let toggleIcon = passwordField.nextElementSibling;

  if (passwordField.value.length > 0) {
    toggleIcon.style.display = "block";
  } else {
    toggleIcon.style.display = "none";
  }
}

function changeTypePass(event) {
  let toggleIcon = event.target;
  let passwordField = toggleIcon.previousElementSibling;

  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }

  // Thay đổi biểu tượng hiển thị/ẩn mật khẩu
  if (toggleIcon.classList.contains("fa-eye")) {
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}
