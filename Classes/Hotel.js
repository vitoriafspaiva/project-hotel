import { Reserva } from "./Reserva"

export class Hotel {
    constructor() {
        this.quartos = []
        this.hospedes = []
        this.reservas = []
    }

    add_quarto(quarto) {
        this.quartos.push(quarto)
    }

    remover_quarto(quarto) {
        this.quartos = this.quartos.filter(q => q !== quarto)
    }

    registrar_hospede(hospede) {
        this.hospedes.push(hospede)
    }

    cancelar_reserva(reserva) {
        reserva.quarto.liberar()
        reserva.hospede.cancelar_reserva(reserva)
        this.reservas = this.reservas.filter(r => r !== reserva)
    }

    fazer_reserva(hospede, quarto) {
        if(quarto.estaDisponivel()) {
            const reserva = new Reserva(hospede, quarto)
            quarto.reservar()
            hospede.fazer_reserva(reserva)
            this.reservas.push(reserva)

            return reserva
        } else {
            throw new Error("Quarto indisponivel!")
        }
    }

    get_quartos() {
        return this.quartos
    }

    get_reservas() {
        return this.reserva
    }


}