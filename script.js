(() => {
  const users = {
    Admin: [
      { username: "Hello", password: "hello" },
      { username: "Hai", password: "hai" },
      { username: "Namaste", password: "namaste" }
    ],
    Customer: [
      { username: "Orange", password: "orange" },
      { username: "Apple", password: "apple" },
      { username: "Grapes", password: "grapes" }
    ],
    Guest: [
      { username: "Blue", password: "pass1" },
      { username: "Green", password: "pass2" },
      { username: "Rainbow", password: "pass3" }
    ]
  };

  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginBtn = document.getElementById("loginBtn");
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");
  const message = document.getElementById("message");


  function toggleButton() {
    loginBtn.disabled = !(usernameInput.value.trim() && passwordInput.value);
  }

  
  function clearErrors() {
    usernameError.textContent = "";
    passwordError.textContent = "";
    message.textContent = "";
    message.className = "message";
  }

  function validate() {
    let valid = true;
    clearErrors();

    if (!usernameInput.value.trim()) {
      usernameError.textContent = "Username is required";
      valid = false;
    }
    if (!passwordInput.value) {
      passwordError.textContent = "Password is required";
      valid = false;
    }
    return valid;
  }


  function checkCredentials(username, password) {
    for (const role in users) {
      if (users[role].some(u => u.username === username && u.password === password)) {
        return role;
      }
    }
    return null;
  }

  usernameInput.addEventListener("input", () => {
    toggleButton();
    usernameError.textContent = "";
    message.textContent = "";
  });

  passwordInput.addEventListener("input", () => {
    toggleButton();
    passwordError.textContent = "";
    message.textContent = "";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) return;

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    const role = checkCredentials(username, password);

    if (role) {
      message.textContent = `Login Successful! Welcome ${role}`;
      message.className = "message success";
    } else {
      message.textContent = "Invalid Credentials. Try again.";
      message.className = "message error";
      passwordInput.value = "";
      toggleButton();
      passwordInput.focus();
    }
  });

  toggleButton();
})();
