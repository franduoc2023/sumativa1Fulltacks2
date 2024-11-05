document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var requiredFields = ["firstName", "secondName", "firstApp", "secondApp", "birthdayDate", "emailAddress", "phoneNumber", "password"];
    var allFieldsComplete = requiredFields.every(
        
        function(id) {
        return document.getElementById(id).value.trim() !== "";
    });
    
 
    if (!allFieldsComplete  ) {
        alert("Completa todo el formulario");
        return;
    }

     var password = document.getElementById("password").value;
    var passwordComprobar = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#\$%\^\&*\)\(+=._-])[A-Za-z\d!@#\$%\^\&*\)\(+=._-]{6,10}$/;

    if (!passwordComprobar.test(password)) {
        alert("debe incluir mayuscula, minuscula, numero y entre 6 a 10 digitos");
        return;
    }

     var userData = {
        firstName: document.getElementById("firstName").value,
        secondName: document.getElementById("secondName").value,
        firstApp: document.getElementById("firstApp").value,
        secondApp: document.getElementById("secondApp").value,
        birthdayDate: document.getElementById("birthdayDate").value,
        email: document.getElementById("emailAddress").value,
        phone: document.getElementById("phoneNumber").value,
        gender: document.querySelector('input[name="inlineRadioOptions"]:checked').value,
        password: password
    };

    var users = JSON.parse(localStorage.getItem('Users')) || [];
    users.push(userData);
    localStorage.setItem('Users', JSON.stringify(users));
    alert("Se completó el guardado");
    window.location.href = "login.html";
});
console.log(sessionStorage.getItem("usuarioActivo"));
//localstore https://stackoverflow.com/questions/61137054/using-localstorage-to-store-login-info