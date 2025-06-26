import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa {
    add_quarto(hotel, quarto) {
        hotel.add_quarto(quarto)
    }

    remover_quarto(hotel, quarto) {
        hotel.remover_quarto(quarto)
    }

    registrar_hospede(hotel, hospede) {
        hotel.registrar_hospede(hospede)
    }

    cancelar_reserva(hotel, reserva) {
        hotel.cancelar_reserva(reserva)
    }
}