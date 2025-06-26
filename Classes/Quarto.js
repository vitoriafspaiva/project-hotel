export class Quarto {
    constructor(numero, tipo) {
        this.numero = numero
        this.tipo = tipo
        this.disponivel = true
    }

    reservar() {
        this.disponivel = false
    }

    liberar() {
        this.disponivel = true
    }

    estaDisponivel() {
        return this.disponivel
    }
}