const Mercado = require("../controllers/mercado.js")

let proxId = 1

const model = (body, id = proxId++) => {
    if(
        body.nome != undefined 

    ) {
        return {
            id,
            nome: body.nome
        }
    }
}

module.exports = model