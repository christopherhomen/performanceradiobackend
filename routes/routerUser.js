const express = require("express");
//creo objeto tipo router
const router = express.Router();
const db = require("../baseDatos");

// 1) Metodo HTTP (verbos HTTP)
// 2) RUTA (VIrtual)
// 3) EL ALGORITMO QUE YO PROGRAMO PARA RESPONDER ESA PETICION

//REGISTRO RUTAS

//1 leer usuario
router.get("/get/:idUsuario", function(req, res){
    // console.log(req.params);
    let idUsuario = req.params.idUsuario;
    let usuario = db.getUser(idUsuario)
    //envie la respuesta de get
    // res.send("Get user id" + req.params);
    //envie el usuario que retorno la bd 
    res.json(usuario);
    res.status(200);
});

//2. creat usuario
router.post("/create", function(req, res){
    //los datos vienen en el cuerpo de la peticion :
    //le paso los datos del rquest body
    let newUser = req.body;
    let id = db.createUser(newUser);
    res.send(id);
}); 

//3. eliminar usuario
router.delete("/delete/:idUsuario", function (req, res) {
    let idUsuario = req.params.idUsuario;
    db.deleteUser(idUsuario);
    res.send("El usuario se elimino correctamente");
    res.status(200);
});
module.exports = router