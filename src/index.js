const express = require("express")
const mercado = require("./controllers/mercado.js")

const app = express()
const port = 5000

app.get("/mercado",(req,res)=> {
    res.json(mercado.index())
})

app.get("/mercado/:id",(req,res)=> {
    res.json(mercado.show(req.params.id))
})

app.post ("/mercado",(req,res) => {
    const code = mercado.update(req.body, req.params.id)
    res.status(code).send("Cadastro realizado com sucesso")
})

app.put("/Mercado/:id"(req,res)=> {
    const index = 
    db[index]. 
})