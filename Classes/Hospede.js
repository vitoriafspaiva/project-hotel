import { Pessoa } from "./Pessoa";

export class Hospede extends Pessoa {
    constructor(id, nome, email) {
        super(id, nome, email)
        this.reservas = []
    }

    fazer_reserva(reserva) {
        this.reservas.push(reserva)
    }

    cancelar_reserva(reserva) {
        this.reservas = this.reservas.filter(r => r !== reserva)
    }

    consultar_reservas() {
        return this.reservas
    }
}