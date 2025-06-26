// Link do vídeo explicativo:
// Link do projeto no Replit:

import express from "express"
import { Funcionario } from "./Classes/Funcionario.js";
import { Hospede } from "./Classes/Hospede.js";
import { Hotel } from "./Classes/Hotel.js";
import { Quarto } from "./Classes/Quarto.js";

const app = express()
const port = 3000

//Criar hotel
const hotel = new Hotel() 

//Criar funcionário
const funcionario = new Funcionario(1, "Vitória Paiva", "vitoriafspaiva@gmail.com")

app.post('/hospedes', (req, res) => {
    console.log("POST /hospedes - Registrando novo hóspede.", req.body)
    const { id, nome, email } = req.body
    const hospede = new Hospede(id, nome, email)
    funcionario.registrar_hospede(hotel, hospede) 
    res.status(201).json({ mensagem: "Hospede registrado", hospede})
    console.log("Hóspede registrado com sucesso!", hospede)                                                                                                                                                    
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})