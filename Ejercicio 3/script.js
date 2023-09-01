function validate() {
    var userName = document.getElementsByName("userName")[0].value;
    var userEmail = document.getElementsByName("userEmail")[0].value;
    var userPassword = document.getElementsByName("userPassword")[0].value;
    var errorMessage = document.getElementById("lblMessage");
    errorMessage.innerText = '';
    if (userName === '') {
        errorMessage.innerText = 'Error, ingrese su nombre por favor.';
    }
    else if (!/^[A-Za-z\s]+$/.test(userName)) {
        errorMessage.innerText = 'Error, el nombre ingresado no es válido.';
    }
    else if (userEmail === '') {
        errorMessage.innerText = 'Error, ingrese su correo electrónico por favor.';
    }
    else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(userEmail)) {
        errorMessage.innerText = 'Error, el correo electrónico ingresado no es válido.';
    }
    else if (userPassword === '') {
        errorMessage.innerText = 'Error, ingrese su contraseña por favor.';
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(userPassword)) {
        errorMessage.innerText = 'Error, la contraseña debe contener minimamente 8 caracteres, una mayúscula, una minúscula y un número.';
    }
    else {
        document.getElementsByName("userName")[0].value = '';
        document.getElementsByName("userEmail")[0].value = '';
        document.getElementsByName("userPassword")[0].value = '';
        errorMessage.innerText = '';
        alert("¡Bienvenid@ " + userName + "!");
    }
}