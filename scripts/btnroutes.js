const route = {
    '/cotizar': '/pages/budget/cotizacion.html',
};

function loadPage(page) {
    if (!page) {
        console.warn('Ruta no encontrada en el objeto route.');
        content.innerHTML = '<h1>404 - Página no encontrada</h1>';
        return;
    }

    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Página no encontrada');
            }
            return response.text();
        })
        .then(() => {
            window.location.href = page;
        })
        .catch(err => {
            console.warn('Error cargando la página:', err);
            content.innerHTML = '<h1>404 - Página no encontrada</h1>';
        });
}


