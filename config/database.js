const conexao = require('mongoose')

conexao.connect('mongodb+srv://juliano:juliano@cluster0.vd0rdwj.mongodb.net/test')
.then((res) => console.log("conectado"))
.catch((err) => console.log("erro"+err))

module.exports = { conexao }