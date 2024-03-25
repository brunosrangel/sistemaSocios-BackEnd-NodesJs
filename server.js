const express = require('express');
const mongoose = require('./db');
const usuarioRoutes = require('./routes/usuarioRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/usuarios', usuarioRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
