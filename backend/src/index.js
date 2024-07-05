// inicio del servidor 

const express = require('express'); 
const app = express(); 
const cors = require('cors');

require('./database');

app.use(cors());
app.use(express.json()); //Ser capaz de convertie los datos que recibe del servidor a datos javascript que van a apoderse manipular

app.use(require('./routes/index'))

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

