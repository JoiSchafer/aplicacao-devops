const express = require('express');
const app = express();
const path = require('path');

// Servir arquivos estáticos da pasta 'views'
app.use(express.static(path.join(__dirname, 'views')));

// Endpoint para servir a página index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Definir a porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});