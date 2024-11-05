document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  

     const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

     let users = JSON.parse(localStorage.getItem("Users")) || [];

     const user = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        localStorage.setItem("isLoggedIn", "true");

        sessionStorage.setItem("usuarioActivo", JSON.stringify(user));

          window.location.href = "panel.html";
    } else {
        alert("Contraseña no coincide con json");
    }
});

console.log(sessionStorage.getItem("usuarioActivo"));