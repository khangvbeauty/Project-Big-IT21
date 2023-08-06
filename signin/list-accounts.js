document.addEventListener("DOMContentLoaded", () => {
  const signUpForm = document.querySelector("#sign-up-form");
  const signInForm = document.querySelector("#sign-in-form");
  const signUpButton = document.querySelector("#sign-up-button");
  const signInButton = document.querySelector("#sign-in-button");
  const errorMessage = document.querySelector("#error-message");
  let accounts = [];

  // Fetch accounts data from JSON file
  fetch("accounts.json")
    .then((response) => response.json())
    .then((data) => {
      accounts = data;

      signUpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = signUpForm.querySelector("#sign-up-email").value;
        const password = signUpForm.querySelector("#sign-up-password").value;

        const existingAccount = accounts.find(
          (account) => account.email === email
        );
        if (existingAccount) {
          errorMessage.textContent = "Account already exists";
        } else {
          accounts.push({ email, password });
          errorMessage.textContent = "Account created successfully";
        }
      });

      signInForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = signInForm.querySelector("#sign-in-email").value;
        const password = signInForm.querySelector("#sign-in-password").value;

        const existingAccount = accounts.find(
          (account) => account.email === email && account.password === password
        );
        if (existingAccount) {
          errorMessage.textContent = "Logged in successfully";
        } else {
          errorMessage.textContent = "Invalid credentials";
        }
      });

      signUpButton.addEventListener("click", () => {
        errorMessage.textContent = "";
      });

      signInButton.addEventListener("click", () => {
        errorMessage.textContent = "";
      });
    })
    .catch((error) => console.error("Error fetching accounts:", error));
});
