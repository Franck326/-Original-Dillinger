mongoose.connect('mongodb://127.0.0.1:27017/dillinger')
    .then(() => console.log('Conectado a MongoDB'))
    .catch((error) => console.log('Error al conectar a MongoDB:', error));