const express = require('express')
const mysql = require('mysql2')

const app = express()

const db = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'root123',
  database: 'empresa'
})

db.connect((err) => {
  if (err) {
    console.log('Erro MySQL:', err)
  } else {
    console.log('MySQL conectado!')
  }
})

app.get('/', (req, res) => {
  res.send('Backend Node.js funcionando 🚀')
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})

