document.querySelectorAll('.price').forEach(priceElement => {
    // Obtener el texto del precio
    const priceText = priceElement.textContent.trim();
    const priceMatch = priceText.match(/\$([\d,]+)/); // Extraer el valor numérico

    if (priceMatch) {
        const originalPrice = parseFloat(priceMatch[1].replace(/,/g, '')); // Convertir a número
        const discountedPrice = (originalPrice * 0.5).toLocaleString(); // Calcular descuento y formatear

        // Modificar el contenido del precio
        priceElement.innerHTML = `
            <span class="original">Desde $${originalPrice.toLocaleString()} MXN</span>
            <span class="discount">Oferta: Desde $${discountedPrice} MXN</span>
        `;
    }
});