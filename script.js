// Aplicar estilos CSS desde JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Estilos para el botón de volver arriba
    const botonVolverArriba = document.getElementById('volver-arriba');
    
    botonVolverArriba.style.position = 'fixed';
    botonVolverArriba.style.bottom = '20px';
    botonVolverArriba.style.right = '20px';
    botonVolverArriba.style.padding = '10px 20px';
    botonVolverArriba.style.fontSize = '16px';
    botonVolverArriba.style.cursor = 'pointer';
    botonVolverArriba.style.backgroundColor = '#007bff';
    botonVolverArriba.style.color = '#ffffff';
    botonVolverArriba.style.border = 'none';
    botonVolverArriba.style.borderRadius = '5px';
    botonVolverArriba.style.textAlign = 'center';
    botonVolverArriba.style.textDecoration = 'none';
    botonVolverArriba.style.display = 'none'; // Oculto inicialmente

    // Mostrar/ocultar botón de volver arriba según la posición del scroll
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            botonVolverArriba.style.display = 'block';
        } else {
            botonVolverArriba.style.display = 'none';
        }
    };

    // Animación para volver arriba suavemente
    botonVolverArriba.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
