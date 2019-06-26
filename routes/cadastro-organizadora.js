let express = require('express');
let router = express.Router();
var Database = require('../database');
var isNull = require('../script').isNull;
const config = require('../config');
var Document;

router.get('/', function (req, res, next) {
    res.render('cadastro-organizadora');
});

router.post('/nova-organizadora', (req, res, next) => {

    console.log('Tentando cadastrar usuário...');

    console.log(req.body);


    let nome = req.body.nomeOrganizadora;
    let usuario = req.body.usuarioOrganizadora;
    let email = req.body.emailOrganizadora;
    let senha = req.body.senhaOrganizadora;


    console.log(nome, usuario, email, senha );

    if (isNull(nome) || isNull(usuario) || isNull(email) || isNull(senha)) {

        console.log('Algum dos campos não foram preenchidos');
        return;
    } else {

        console.log("tentando acesso ao banco de dados...")
        Database.query(`insert into userSeven (nome, usuario, email, senha) values ('${nome}', '${usuario}', '${email}','${senha}' );`).then(resultados => {
            console.log(resultados);
          //  Document.write('Sua organizadora ' + nome + 'foi cadastrada com sucesso!')
            res.status(200).redirect('https://sevendashboard.azurewebsites.net');

        })


        /*
            Database.query(`insert into Usuario values ('${username}', '${email}', '${password}', 7 , 1, ${cnpj}, ${endereco}, ${empresa});`).then(resultados => {
            console.log(resultados);
            res.status(200).redirect('/dashboard');

        })





        */

    }
});

module.exports = router;

