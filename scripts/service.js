

  async function sendData(){
        // Obtener los datos del formulario
    const contactMessage = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };
    
      try {
        // Enviar los datos a la API
        const response = await fetch('https://backendportafolio-a3czbee8aah8aybc.mexicocentral-01.azurewebsites.net/api/sign/postmessage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contactMessage)  // Convierte los datos a JSON
        });
    
        // Comprobar si la respuesta fue exitosa
        if (response.ok) {
          alert('Mensaje enviado exitosamente!');
        } else {
          alert('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        alert('There was an error sending the message.');
      }
  }
  