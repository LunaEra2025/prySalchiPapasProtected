<?php
session_start();
header('Content-Type: application/json');

$usuarios = [
  'admin'  => password_hash('admin123', PASSWORD_DEFAULT),
  'cajero' => password_hash('cajero123', PASSWORD_DEFAULT),
];

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  echo json_encode(['success' => false, 'mensaje' => 'Método no permitido.']);
  exit;
}

$usuario  = trim($_POST['usuario'] ?? '');
$password = trim($_POST['password'] ?? '');

if (empty($usuario) || empty($password)) {
  echo json_encode(['success' => false, 'mensaje' => 'Campos vacíos.']);
  exit;
}

if (isset($usuarios[$usuario]) && password_verify($password, $usuarios[$usuario])) {
  $_SESSION['usuario'] = $usuario;
  $_SESSION['logueado'] = true;
  echo json_encode(['success' => true]);
} else {
  echo json_encode(['success' => false, 'mensaje' => 'Usuario o contraseña incorrectos.']);
}
