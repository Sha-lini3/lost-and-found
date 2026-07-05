document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    const savedUsername = localStorage.getItem("username");

    const savedPassword = localStorage.getItem("password");

    if(username===savedUsername && password===savedPassword){

        alert("Login Successful ✅");

        localStorage.setItem("isLoggedIn","true");

        window.location.href="Firstpage.html";

    }

    else{

        alert("Invalid Username or Password");

    }

});