export class Reserva {
    constructor(hospede, quarto) {
        this.hospede = hospede
        this.quarto = quarto
    } 

    get_info() {
        return {
            hospede: this.hospede.get_nome(),
            quarto: this.quarto.numero
        }
    }
}
