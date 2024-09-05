const fornecedor_controller = require ("./fornecedor.js")
const mercado_controller = require ("./mercado.js")

let proxId = 1

const model = (body, id = proxId++) => {
    if( id_mercado &&
        id_fornecedor &&
        body.nome != undefined &&
        body.quantidade != undefined 


    ) {
        return {
            id,
            nome: body.nome,
            id_fornecedor : body.id_fornecedor,
            id_mercado : body.id_mercado
        }
    }
}

module.exports = model