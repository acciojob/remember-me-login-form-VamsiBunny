// DOM Elements
const loginForm = document.getElementById("loginForm");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const checkboxField = document.getElementById("checkbox");
const submitButton = document.getElementById("submit");
const existingButton = document.getElementById("existing");

// Load saved user credentials on page load
window.onload = () => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingButton.style.display = "block";
    }
};

// Handle form submission
loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    const username = usernameField.value.trim();
    const password = passwordField.value.trim();
    const rememberMe = checkboxField.checked;

    // Validate username and password
    if (!username || !password) {
        alert("Please enter both username and password!");
        return;
    }

    if (rememberMe) {
        // Save credentials if "Remember me" is checked
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        // Clear saved credentials if "Remember me" is unchecked
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    // Confirmation alert
    alert(`Logged in as ${username}`);

    // Hide "Login as existing user" if "Remember me" is unchecked
    if (!rememberMe) {
        existingButton.style.display = "none";
    }
});

// Handle "Login as existing user" button click
existingButton.addEventListener("click", () => {
    const savedUsername = localStorage.getItem("username");

    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    } else {
        alert("No saved user found. Please log in manually.");
    }
});
