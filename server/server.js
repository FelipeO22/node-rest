require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded app.use es un middleware
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get('/usuario', function(req, res) {
    res.json('getUsuario')
})

app.post('/usuario', function(req, res) {
        let body = req.body;
        if (body.nombre === undefined) {
            res.status(400).json({
                ok: false,
                mensaje: 'El nombre es necesario'
            })


        }
        res.json({
            persona: body
        })
    })
    //PUT es para actualizar registros

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json('El id es:' + id)
})

app.delete('/usuario', function(req, res) {
    res.json('getUsuario')
})

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto", process.env.PORT);
})

app.listen