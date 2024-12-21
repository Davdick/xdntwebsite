

document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");

    // Rutas de los archivos HTML
    const routes = {
        '/': 'index.html',
        '/cotizar': '/pages/budget/cotizacion.html'
    };

    // Página predeterminada
    //const defaultPage = '/pages/home/home.html';
    const defaultPage ='/pages/home/home.html';
    // Función para cargar el contenido de la ruta en el div
    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                content.innerHTML = html; // Insertar el contenido de la página
                handleHashNavigation();  // Verificar si hay un hash en la URL
            })
            .catch(err => {
                console.warn('Error cargando la página:', err);
                content.innerHTML = '<h1>404 - Página no encontrada</h1>';
            });
    }

    // Manejar los clics en los enlaces
    document.querySelectorAll('.navbar a, .btn').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevenir la acción predeterminada de recargar la página
            const path = this.getAttribute('href').split('#')[0]; // Obtener el valor de href antes del #
            const hash = this.getAttribute('href').split('#')[1]; // Obtener el hash, si existe
            history.pushState({}, '', path); // Actualiza la URL sin recargar
            loadPage(routes[path] || defaultPage); // Cargar el contenido correspondiente
            if (hash) scrollToHash(hash); // Moverse al hash si existe
        });
    });

    // Escuchar cambios en la URL (para cuando navegas con el botón de atrás o adelante)
    window.addEventListener('popstate', function () {
        loadPage(routes[window.location.pathname] || defaultPage); // Si no hay ruta, cargar la página predeterminada
    });

    // Función para manejar anclajes después de cargar contenido
    function handleHashNavigation() {
        const hash = window.location.hash.substring(1); // Obtener el hash sin el #
        if (hash) {
            scrollToHash(hash); // Desplazarse al elemento correspondiente
        }
    }

    // Función para hacer scroll al hash
    function scrollToHash(hash) {
        const targetElement = document.getElementById(hash); // Buscar el elemento por su id
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Hacer scroll al elemento
        }
    }

    // Al cargar la página, comprobamos la URL y cargamos el contenido correspondiente
    const currentPath = window.location.pathname === '/' ? '/index.html' : window.location.pathname;

    // Cargar la página inicial o la ruta actual
    console.log(window.location.pathname);
    loadPage(routes[currentPath] || defaultPage); // Si no coincide con ninguna ruta, cargar la página predeterminada

    
});

function cotweb() {
    

    loadPage('/pages/budget/cotizacion.html');
}

