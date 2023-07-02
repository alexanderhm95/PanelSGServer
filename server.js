const express = require("express");
const path = require("path");

const app = express();

// Ruta para servir los archivos estáticos de Angular
app.use(express.static(path.join(__dirname, 'dist/panel-sg/')));

// Ruta para cualquier otra solicitud
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/panel-sg/index.html"));
});

// Manejo de rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "dist/panel-sg/404.html"));
});

// Puerto en el que se ejecutará el servidor
const port = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor node.js en ejecución en el puerto ${port}`);
});
