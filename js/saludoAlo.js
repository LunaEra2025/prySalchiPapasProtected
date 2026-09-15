const nombreUsuario = "Alondra";
const nombreProyecto = "saalchipapa";
const autenticado = true;

if (autenticado) {
  console.log("========================================");
  console.log(`   ¡BIENVENIDO/A AL PROYECTO ${nombreProyecto.toUpperCase()}!`);
  console.log("========================================");
  console.log(`Usuario: ${nombreUsuario}`);
  console.log("Estado: Ya estás dentro del equipo ✅");
  console.log(`Proyecto: ${nombreProyecto}`);
  console.log("========================================");
} else {
  console.log("❌ Acceso denegado. No estás dentro del proyecto.");
}