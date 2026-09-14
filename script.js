// ==========================================
// 1. MENSAJE BÁSICO DE BIENVENIDA
// ==========================================
console.log("=== INICIANDO SCRIPT DE PRUEBA ===");
console.log("¡Hola, mundo! Mi archivo script.js está funcionando correctamente.");

// ==========================================
// 2. USO DE VARIABLES Y OPERACIONES
// ==========================================
let usuario = "Ubaldo";
let rol = "Estudiante";
let edad = 20;

console.log("Nombre de usuario:", usuario);
console.log(`El usuario ${usuario} tiene el rol de${rol}.`);

// Operación matemática sencilla
let numeroA = 15;
let numeroB = 25;
let suma = numeroA + numeroB;

console.log(`La suma de ${numeroA} + ${numeroB} es igual a:${suma}`);

// ==========================================
// 3. ESTRUCTURAS DE DATOS (ARREGLOS Y OBJETOS)
// ==========================================
// Lista/Arreglo
let tecnologias = ["JavaScript", "HTML", "CSS", "Node.js"];
console.log("Lista de tecnologías:", tecnologias);

// Objeto con detalles
let sistema = {
  nombre: "Servidor Local",
  ip: "192.168.1.202",
  estado: "Activo"
};

console.log("Información del sistema:", sistema);

// ==========================================
// 4. MÚLTIPLES TIPOS DE SALIDA EN CONSOLA
// ==========================================
console.info("Información: El proceso se completó con éxito.");
console.warn("Advertencia: Esta es una alerta de prueba.");
console.error("Error: Este es un mensaje de error simulado.");

console.log("=== FIN DEL SCRIPT ===");
