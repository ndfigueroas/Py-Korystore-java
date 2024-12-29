// Función para alternar la visibilidad de las opciones de filtro y girar la flecha
function toggleFilterOptions(buttonId, optionsId) {
    const button = document.getElementById(buttonId);
    const options = document.getElementById(optionsId);
    const icon = button.querySelector('i');

    button.addEventListener('click', () => {
        // Cambiar la visibilidad de las opciones
        if (options.style.display === "none" || options.style.display === "") {
            options.style.display = "block";
            button.classList.add('open');  // Añadir clase para girar la flecha
        } else {
            options.style.display = "none";
            button.classList.remove('open');  // Remover clase para volver a la dirección inicial
        }
    });
}

// Aplicar las funciones a los filtros
toggleFilterOptions('filter-price', 'price-options');
toggleFilterOptions('filter-color', 'color-options');
toggleFilterOptions('filter-size', 'size-options');
toggleFilterOptions('filter-type', 'type-options');


// Obtener todos los elementos del dropdown
const categoryItems = document.querySelectorAll('.dropdown-item');

// Asignar un evento de clic para cada elemento del dropdown
categoryItems.forEach(item => {
    item.addEventListener('click', function () {
        // Remover la clase 'active' de todos los elementos
        categoryItems.forEach(i => i.classList.remove('active'));

        // Agregar la clase 'active' al elemento seleccionado
        this.classList.add('active');

        // Cambiar el texto del botón para mostrar la categoría seleccionada
        const dropdownButton = document.getElementById('categoryDropdown');
        dropdownButton.textContent = this.textContent;
    });
});

// Seleccionar todos los círculos de color y las etiquetas de color
const colorOptions = document.querySelectorAll('.color-option');

// Añadir evento de clic a cada opción de color (tanto al círculo como al texto)
colorOptions.forEach(option => {
    option.addEventListener('click', function () {
        // Obtener el círculo de color dentro de esta opción
        const circle = this.querySelector('.color-circle');

        // Alternar la clase 'selected' para marcar/desmarcar la selección
        circle.classList.toggle('selected');
    });
});

// Función para seleccionar un solo círculo por producto
document.querySelectorAll('.product-color-options').forEach(colorOptions => {
    colorOptions.addEventListener('click', function (event) {
        // Verificamos que el click fue en un círculo de color
        if (event.target.classList.contains('product-color-circle')) {
            // Limpiar la selección anterior en este conjunto de círculos
            colorOptions.querySelectorAll('.product-color-circle').forEach(circle => {
                circle.classList.remove('selected');
            });
            // Marcar el círculo seleccionado
            event.target.classList.add('selected');
        }
    });
});
