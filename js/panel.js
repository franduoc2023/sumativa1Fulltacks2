window.onload = function() {
    const usuarioActivo = JSON.parse(sessionStorage.getItem("usuarioActivo"));

    if (usuarioActivo) {
        document.getElementById("firstName").value = usuarioActivo.firstName || "";
        document.getElementById("secondName").value = usuarioActivo.secondName || "";
        document.getElementById("firstApp").value = usuarioActivo.firstApp || "";
        document.getElementById("secondApp").value = usuarioActivo.secondApp || "";
        document.getElementById("birthdayDate").value = usuarioActivo.birthdayDate || "";
        document.getElementById("emailAddress").value = usuarioActivo.email || "";
        document.getElementById("phoneNumber").value = usuarioActivo.phone || "";
    }
};

function guardarCambioUsuario() {
    const usuarioModificado = {
        firstApp: document.getElementById("firstApp").value,
        firstName: document.getElementById("firstName").value,
        secondName: document.getElementById("secondName").value,
        secondApp: document.getElementById("secondApp").value,
        birthdayDate: document.getElementById("birthdayDate").value,
        email: document.getElementById("emailAddress").value,
        phone: document.getElementById("phoneNumber").value
    };

     let users = JSON.parse(localStorage.getItem("Users")) || [];
    const usuarioActivo = JSON.parse(sessionStorage.getItem("usuarioActivo"));

     users = users.map(user => 
        user.email === usuarioActivo.email ? { ...user, ...usuarioModificado } : user
    );

     localStorage.setItem("Users", JSON.stringify(users));

     sessionStorage.setItem("usuarioActivo", JSON.stringify({ ...usuarioActivo, ...usuarioModificado }));

    alert("Los cambios se han guardado correctamente.");
}


 console.log(sessionStorage.getItem("usuarioActivo"));


 document.getElementById("cierraSesion").addEventListener("click", function() {
    localStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("usuarioActivo");
    window.location.href = "index.html";

});