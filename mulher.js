const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: "Aline Buttelli",
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.dreamstime.com%2Fprogramador-da-mulher-no-processo-do-trabalho-na-ilustra%25C3%25A7%25C3%25A3o-vetor-menina-nos-vidros-com-conceito-liso-estilo-port%25C3%25A1til-image139687164&psig=AOvVaw0sbC-inGEIESwhn4e-L_2t&ust=1683053554760000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNihoaPl1P4CFQAAAAAdAAAAABAE",
        minibio: "Desenvolvedora em construção!"
    })
}

function mostraPorta () {
    console.log ("Servidor criado e rodando na porta ", porta)
}

app.use(router.get ("/mulher", mostraMulher))
app.listen(porta, mostraPorta)