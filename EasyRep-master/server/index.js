const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//app.use(cors());

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "matheus",
  database: "easyrep",
});

db.connect(function(err) {
  if (err){
    console.log("errinho!")
    //console.log(err);
  }else{
  console.log("Connected!"); 
  }
});

app.use(express.json());
app.use(cors());


app.get('/republicas', async (req, res) => {
  //const lista = await db.selectUserByType(2);
 // res.json(lista);

 db.query("SELECT * FROM republicas", (err, result) => {
  res.json(result);
  //res.send({ msg: "Republica cadastrado com sucesso" });   
 // res.send(result)
});

});


app.post("/register", (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;
  const nome = req.body.nome;
  const rua = req.body.rua;
  const numero = req.body.numero;
  const bairro = req.body.bairro;
  const complemento = req.body.complemento;
  const cidade = req.body.cidade;
  const cep = req.body.cep;
  const valorContas= req.body.valorContas;
  const acessoCozinha= req.body.acessoCozinha;
  const acessoGaragem= req.body.acessoGaragem;
  const acessoLavanderia= req.body.acessoLavanderia;
  const aceitaPet= req.body.aceitaPet;
  const tipoInquilino= req.body.tipoInquilino;
  const politicaLimpeza= req.body.politicaLimpeza;
  const regime = req.body.regime;

  db.query("SELECT * FROM republicas WHERE email = ?", [email], (err, result) => {
    if (err) {
      //result.send(err);
    }
    //console.log(result);
    if (result.length === 0) {
      bcrypt.hash(senha, saltRounds, (err, hash) => {
        //console.log(result.length);
        db.query(
          "INSERT INTO republicas (email, senha, nome, rua, numero, bairro, complemento, cidade, cep, valorContas, acessoCozinha, acessoLavanderia, acessoGaragem, aceitaPet, tipoInquilino, politicaLimpeza, regime) VALUE (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
          [email, hash, nome, rua, numero, bairro, complemento, cidade, cep, valorContas, acessoCozinha, acessoLavanderia, acessoGaragem, aceitaPet, tipoInquilino, politicaLimpeza, regime ],
          (err, res) => {
            //if (err) {
            //  //res.send(err);
           // }
            //console.log(err);
            res.send({ msg: "Republica cadastrado com sucesso" });
           // alert("Rep cadastrada c/ sucesso!")
          }
        );
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
});

app.post("/login", (req, res) =>  {
  const email = req.body.email;
  const senha = req.body.senha;
  //console.log(req.body.email);

  db.query("SELECT * FROM republicas WHERE email = ?", [email], (err, result) => {
    //console.log(result);
    
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(senha, result[0].senha, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response) {
          res.send({ msg: "Usuário logado :" + result[0].nome });
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });
    } else {
      res.send({ msg: "Usuário não registrado!" });
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});

/*const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "matheus",
  database: "easyrep",
  port: 3306
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;
  const nome = req.body.nome;
  const rua = req.body.rua;
  const numero = req.body.numero;
  const bairro = req.body.bairro;
  const complemento = req.body.complemento;
  const cidade = req.body.cidade;
  const cep = req.body.cep;
  const valorContas= req.body.valorContas;
  const acessoCozinha= req.body.acessoCozinha;
  const acessoGaragem= req.body.acessoGaragem;
  const acessoLavanderia= req.body.acessoLavanderia;
  const aceitaPet= req.body.aceitaPet;
  const tipoInquilino= req.body.tipoInquilino;
  const politicaLimpeza= req.body.politicaLimpeza; 

  db.query("SELECT * FROM republicas WHERE email = ?", [email], (err, result) => {
    if (err) {
      //res.send(err);
    }
    console.log(result);
    if (result.length === 0) {
      bcrypt.hash(senha, saltRounds, (err, hash) => {
        console.log(result.length);
        db.query(
          "INSERT INTO republicas (email, senha, nome, rua, numero, bairro, complemento, cidade, cep, valorContas, acessoCozinha, acessoLavanderia, acessoGaragem, aceitaPet, tipoInquilino, politicaLimpeza) VALUE (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
          [email, hash, nome, rua, numero, bairro, complemento, cidade, cep, valorContas, acessoCozinha, acessoLavanderia, acessoGaragem, aceitaPet,  tipoInquilino, politicaLimpeza ],
          (err, response) => {
            if (err) {
              res.send(err);
            }
            console.log(err);
            res.send({ msg: "Republica cadastrado com sucesso" });
          }
        );
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
});

app.post("/login", (req, res) =>  {
  const email = req.body.email;
  const senha = req.body.senha;
  //console.log(req.body.email);

  db.query("SELECT * FROM republicas WHERE email = ?", [email], (err, result) => {
    //console.log(result);
    
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(senha, result[0].senha, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response) {
          res.send({ msg: "Usuário logado :" + result[0].nome });
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });
    } else {
      res.send({ msg: "Usuário não registrado!" });
    }
  });
});

app.get("/RepProfile", (req, res) =>  {
  const nome = '';

  db.query("SELECT nome FROM republicas WHERE email = ?", [nome], (err, result) => {
    //console.log(result);
    
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
        if (response) {
          nome = result[0].nome
          //res.send({ msg: "Usuário logado :" + result[0].nome });
          res.send({ nome: result[0].nome });
        } else {
          res.send({ msg: "#!#!#" });
        }
    }
  });
});








app.get('/republicas', async (req, res) => {
  const lista = await db.selectUserByType(2);
  res.json(lista);
});


app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
*/