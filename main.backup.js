// Link do vídeo explicativo:
// Link do projeto no Replit:

import { Funcionario } from "./Classes/Funcionario.js";
import { Hospede } from "./Classes/Hospede.js";
import { Hotel } from "./Classes/Hotel.js";
import { Quarto } from "./Classes/Quarto.js";

//Criar hotel
const hotel = new Hotel() 

//Criar funcionário
const funcionario = new Funcionario(1, "Vitória Paiva", "vitoriafspaiva@gmail.com")

//Criar quartos
const quarto1 = new Quarto(102, "Solteiro")
const quarto2 = new Quarto (104, "Casal")

funcionario.add_quarto(hotel, quarto1)
funcionario.add_quarto(hotel, quarto2)

//Criar hospedes
const hospede1 = new Hospede(2, "Vinicius Arcanjo", "vinicius.arcanjo@outlook.com.br")
const hospede2 = new Hospede(3, "Lara Sampaio", "lara.sampaio@gmail.com")

funcionario.registrar_hospede(hotel, hospede1)
funcionario.registrar_hospede(hotel, hospede2)

//Reservas
const reserva1 = hotel.fazer_reserva(hospede1, quarto1)
const reserva2 = hotel.fazer_reserva(hospede2, quarto2)

console.log("Reserva: ", hospede1.consultar_reservas().map(r => r.get_info()))
console.log("Reserva: ", hospede2.consultar_reservas().map(r => r.get_info())), 

console.log("Todas as reservas")
// hotel.get_reservas().array.forEach((reserva, i) => {
//     const info = reserva.get_info()
//     console.log(`Reserva ${i + 1}: Hospede ${info.hospede}, Quarto ${info.quarto}`)
// }); 

//Cancelamento de reserva
funcionario.cancelar_reserva(hotel, reserva1)

console.log("Reservas após cancelamento", hospede1.consultar_reservas())