const user = require('../models/user'); // modelo del usuario, interaccion con el usuario para ingreso, consulta, etc 
const usersController = {};
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

usersController.getUsers = async(req, res) => 
{
    res.send('Bienvenido al backend de Gestion Usuarios 2.0');
}

usersController.addUser = async(req, res) => 
{
    try {
    //res.send('Registro de nuevo usuario');

    //Imprimir en la consola la información de la pantalla
    //console.log(req.body);

    //Encriptar la contrasena con un metodo sincronico 
    req.body.password = bcrypt.hashSync(req.body.password, 12);

    //Se guarda en una constante los datos de correo y clave 
    const { email, password } = req.body;

    //Se crea una constante newUser con el esquema que se guardará en la base de datos. 
    const newUser = new user ({email, password});

    // const user = await user.create(req.body)

    //Se guarda en la base de datos 
    await newUser.save();// .save() metodo asincrono toma tiempo para gardarse para poder continuar con otras tareas agregar await y en la funcion async

    //Se crea un token asociado al _id de la colección User y se le asigna el nombre secretkey.
    const token = jwt.sign({_id: newUser._id}, 'secretKey');
    // despues de guardar el dato en la base de crea el token el mismos que es devuelto al cliente
    
    //Se envía como estado “OK” o estado 200. Y se imprime el token 
    res.status(200).json({token});

    //Se imprime en consola los datos enviados en el JSON 
    console.log(newUser);
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar usuario');
    }
    
}

// Controlador para ingreso
usersController.loginUser = async (req, res) => {

    //Se almacena en una constante los datos enviados en un formulario 
    //const { email, password } = req.body;

    try {

        //Se realiza una búsqueda mediante el correo en la base de datos si lo encuentra lo guarda
        const userFind = await user.findOne({ email: req.body.email });

        if (!userFind) {
            return res.status(401).send("El correo no existe");
        }

        const eq = bcrypt.compareSync(req.body.password, userFind.password);

        if (!eq) {
            return res.status(401).send("Clave incorrecta");
        }

        //Se asigna a una constante el token creado al crear el usuario.
        const token = jwt.sign({ _id: user._id }, 'secretKey');
        return res.status(200).json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el ingreso');
    }
};

usersController.getTasks=async(req,res)=> 
{ 
    res.json([ 
        { 
            _id:1, 
            name:'Tarea1', 
            descripcion:'Informacion tarea1' 
        }, 
        { 
            _id:2, 
            name:'Tarea2', 
            descripcion:'Informacion tarea2' 
        }, 
        { 
            _id:3, 
            name:'Tarea3', 
            descripcion:'Informacion tarea3' 
        } 
    ]) 
} 

//En la funcion la cabecera se la debe definir en el postman dando un valor, en este caso se debe dar el token 
function verificarToken(req, res, next){

    console.log(req.headers.authorizacion);

    if(!req.headers.authorizacion){
        return res.status(401).send('No tiene autorización para continuar');
    }
    //se coloca por defecto la palabra bearer espacio y el token obtenido
    //dividir el string recibido 
    const token = req.headers.authorizacion.split(' ')[1]// crea un arreglo ['Bearer', 'token']
    
    if (token == 'null'){
        return res.status(401).send('No existe token');
    }

    const payload = jwt.verify(token, 'secretKey') //Contenido del token
    console.log(payload)// muestra los datos contenidos en el payload deberia ser el id del usuario
    req.userId = payload._id ;
    next();
}

module.exports = usersController;