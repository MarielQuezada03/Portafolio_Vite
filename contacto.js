
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;

    if (name.value.trim() === '') {
        nameError.textContent = 'El nombre es obligatorio';
        isValid = false;
    } else if (!nameRegex.test(name.value.trim())) {
        nameError.textContent = 'El nombre solo debe contener letras y espacios';
        isValid = false;
    }

    if (email.value.trim() === '' || !email.value.includes('@')) {
        emailError.textContent = 'Introduce un correo válido';
        isValid = false;
    }

    if (message.value.trim() === '') {
        messageError.textContent = 'El mensaje no puede estar vacío';
        isValid = false;
    }

    if (isValid) {
        alert('Formulario enviado con éxito :)');
        this.reset();
    }
});