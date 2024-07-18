const mongoose = require('mongoose');

const URI = 'mongodb+srv://mongoatlas:admin@cluster0.4ih86bj.mongodb.net/datos?retryWrites=true&w=majority';
mongoose.connect(URI)

//.then(db => console.log('Base de datos conectada'))
//.catch(err => console.log(err));

  .then(() => {
    console.log('Conexión a MongoDB Atlas exitosa');
  })
  .catch((error) => {
    console.error('Error conectándose a MongoDB Atlas:', error);
  });

//module.exports = mongoose;

