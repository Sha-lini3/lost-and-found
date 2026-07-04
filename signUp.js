document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirm-password").value;

    if(pass !== confirm){
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", pass);

    alert("Signup Successful!");

    window.location.href = "login.html";
});