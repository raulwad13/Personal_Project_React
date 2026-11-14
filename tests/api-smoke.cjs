// Prueba sencilla de la API sin depender de una base de datos local.
const { spawn } = require("node:child_process");
const assert = require("node:assert/strict");

const port = 34567;
const base = `http://127.0.0.1:${port}/api/monsters`;
const server = spawn(process.execPath, ["index.js"], {
  env: { ...process.env, PORT: String(port), NODE_ENV: "production", MONGODB_URI: "mongodb://127.0.0.1:1/monsters" },
  stdio: "ignore",
});

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function check() {
  try {
    let response;
    // Espera a que Express escuche antes de lanzar las peticiones.
    for (let attempt = 0; attempt < 40; attempt++) {
      try {
        response = await fetch(base);
        break;
      } catch {
        await pause(250);
      }
    }
    assert.ok(response, "El servidor Express no ha arrancado");
    assert.equal(response.status, 200, "La consulta pública debe funcionar");
    const monsters = await response.json();
    assert.ok(Array.isArray(monsters) && monsters.length > 0, "Debe haber monstruos de ejemplo");

    const blocked = await fetch(base + "/seed", { method: "POST" });
    assert.equal(blocked.status, 403, "La carga de datos debe estar bloqueada en producción");
    const blockedEdit = await fetch(base, { method: "DELETE" });
    assert.equal(blockedEdit.status, 403, "La eliminación debe estar bloqueada en producción");
    console.log("API comprobada: consulta pública y escrituras bloqueadas en producción.");
  } finally {
    server.kill();
  }
}

check().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
