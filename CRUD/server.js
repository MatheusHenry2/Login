const express = require('express')
const bodyParser = require('body-parser')
const port = 80;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

let usuariosEmail = [];
let usuariosSenha = [];

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index1.html")
})

app.post('/cadastrar', (req, res) => {
    usuariosEmail.push(req.body.usuario)
    usuariosSenha.push(req.body.senha)  
    res.sendFile(__dirname + "/views/index.html")
})

app.post('/entrar', (req, res) => {
    verificaLogin(req.body.usuario, req.body.senha, res)
})

function verificaLogin(email, senha, res) {
    for (let i = 0; i < usuariosEmail.length; i++) {
        if (email == usuariosEmail[i] && senha == usuariosSenha[i]) {
            res.send(usuariosEmail)
        } else {
            res.status(404);
        }
    }
}

app.listen(port, () => {
    console.log('Server has started');
})
