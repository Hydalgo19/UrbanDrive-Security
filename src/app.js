document.getElementById("reservationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const car = document.getElementById("car").value;
    const message = document.getElementById("message");

    if(name === "" || car === "") {
        message.textContent = "Por favor, completa todos los campos.";
        return;
    }

    message.textContent =
        "Solicitud enviada correctamente para el vehículo: " + car;
});

const password = "admin123";