document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const numero_de_expediente = document.getElementById('numero_de_expediente').value;
    const carrera = document.getElementById('carrera').value;
    const cuatrimestre = document.getElementById('cuatrimestre').value;
    const telefono = document.getElementById('telefono').value;
    const experiencia = document.getElementById('experiencia').value;
  
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre, apellidos, numero_de_expediente, carrera, cuatrimestre, telefono, experiencia }) });
  
    const data = await response.json();
    alert(data.message);
  });
  