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
console.log("Funcionario:", funcionario.get_nome(), "- Email:", funcionario.get_email())

//Criar quartos
const quarto1 = new Quarto(102, "Solteiro")
const quarto2 = new Quarto(104, "Casal")
const quarto3 = new Quarto(105, "Solteiro")

funcionario.add_quarto(hotel, quarto1)
funcionario.add_quarto(hotel, quarto2)
funcionario.add_quarto(hotel, quarto3)

console.log("\nTodos os quartos do hotel:")
hotel.get_quartos().forEach(quarto => {
    console.log(`Quarto ${quarto.numero} - Tipo: ${quarto.tipo} - Disponível: ${quarto.estaDisponivel() ? 'Sim' : 'Não'}`)
})

//Criar hospedes
const hospede1 = new Hospede(2, "Vinicius Arcanjo", "vinicius.arcanjo@outlook.com.br")
const hospede2 = new Hospede(3, "Lara Sampaio", "lara.sampaio@gmail.com")
const hospede3 = new Hospede(4,"Malu Sampaio", "malu.sampaio@gmai.com")

funcionario.registrar_hospede(hotel, hospede1)
funcionario.registrar_hospede(hotel, hospede2)
funcionario.registrar_hospede(hotel, hospede3)

console.log("\nTodos os hospedes registrados:")
hotel.hospedes.forEach(hospede => {
    console.log(`Hóspede: ${hospede.get_nome()} - Email: ${hospede.get_email()} - ID: ${hospede.get_id()}`)
})

//Reservas
const reserva1 = hotel.fazer_reserva(hospede1, quarto1)
const reserva2 = hotel.fazer_reserva(hospede2, quarto2)
const reserva3 = hotel.fazer_reserva(hospede3, quarto3)

console.log("\nStatus dos quartos após reserva:")
hotel.get_quartos().forEach(quarto => {
    console.log(`Quarto ${quarto.numero} - Tipo: ${quarto.tipo} - Disponível: ${quarto.estaDisponivel() ? 'Sim' : 'Não'}`)
})

console.log("\nReservas por hóspedes:")
console.log("Reserva: ", hospede1.consultar_reservas().map(r => r.get_info()))
console.log("Reserva: ", hospede2.consultar_reservas().map(r => r.get_info())) 
console.log("Reserva:", hospede3.consultar_reservas().map(r=> r.get_info()))

console.log("\nTodas as reservas do hotel:")
console.log(hotel.get_reservas().map(r => r.get_info()))

//Cancelamento de reserva
console.log("\n--- Cancelamento de reserva ---")
funcionario.cancelar_reserva(hotel, reserva1)
console.log("Reservas canceladas: ", reserva1.get_info())

console.log("\nStatus dos quartos:")
hotel.get_quartos().forEach(quarto => {
    console.log(`Quarto ${quarto.numero} - Tipo: ${quarto.tipo} - Disponível: ${quarto.estaDisponivel() ? 'Sim' : 'Não'}`)
})

console.log(`\nReservas de ${hospede1.get_nome()} após o cancelamento:`, hospede1.consultar_reservas())
console.log("\nReservas que não foram cancelados:")
console.log(hotel.get_reservas().map(r => r.get_info()))