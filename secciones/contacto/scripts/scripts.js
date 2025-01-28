// Botón para copiar el número en la sección de contacto.
document
    .getElementById('copyButtonNumber')
    .addEventListener('click', function () {
        // Crea un elemento de texto temporal
        const tempInput = document.createElement('input');
        tempInput.value = '4771763961';
        document.body.appendChild(tempInput);

        // Selecciona y copia el texto
        tempInput.select();
        document.execCommand('copy');

        // Elimina el elemento de texto temporal
        document.body.removeChild(tempInput);

        // Opcional: Cambia el texto del botón para indicar que se ha copiado
        this.textContent = 'Número Copiado ✔️';
        setTimeout(() => {
            this.textContent = '☎️ (477) 176 39 61';
        }, 2000); // Cambia el texto de nuevo después de 2 segundos
    });

// Botón para copiar el email en la sección de contacto.
document
    .getElementById('copyButtonEmail')
    .addEventListener('click', function () {
        // Crea un elemento de texto temporal
        const tempInput = document.createElement('input');
        tempInput.value = 'contacto@franciscoangelnunezluna.com';
        document.body.appendChild(tempInput);

        // Selecciona y copia el texto
        tempInput.select();
        document.execCommand('copy');

        // Elimina el elemento de texto temporal
        document.body.removeChild(tempInput);

        // Opcional: Cambia el texto del botón para indicar que se ha copiado
        this.textContent = 'Email Copiado ✔️';
        setTimeout(() => {
            this.textContent = 'contacto@franciscoangelnunezluna.com';
        }, 2000); // Cambia el texto de nuevo después de 2 segundos
    });
