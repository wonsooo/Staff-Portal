function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("login-message");
  const dashboard = document.getElementById("dashboard");

  // Temporary demo login (we'll replace this later)
  if (username === "staff" && password === "airasia") {
    message.style.color = "green";
    message.textContent = "Login successful. Welcome aboard ✈️";
    dashboard.style.display = "block";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid Staff ID or password.";
  }
}
