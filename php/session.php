<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['logueado']) && $_SESSION['logueado'] === true) {
  echo json_encode(['logueado' => true, 'usuario' => $_SESSION['usuario']]);
} else {
  echo json_encode(['logueado' => false]);
}
