document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const usuario = document.getElementById('usuario').value.trim();
  const password = document.getElementById('password').value.trim();
  const mensajeError = document.getElementById('mensaje-error');

  mensajeError.textContent = '';

  if (!usuario || !password) {
    mensajeError.textContent = 'Por favor completa todos los campos.';
    return;
  }

  const formData = new FormData();
  formData.append('usuario', usuario);
  formData.append('password', password);

  fetch('php/login.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      window.location.href = 'dashboard.html';
    } else {
      mensajeError.textContent = data.mensaje || 'Credenciales incorrectas.';
    }
  })
  .catch(() => {
    mensajeError.textContent = 'Error al conectar con el servidor.';
  });
});
