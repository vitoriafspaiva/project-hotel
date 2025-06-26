export class Pessoa {
    constructor(id, nome, email) {
        this.id = id
        this.nome = nome
        this.email = email
    }

    get_id() {
        return this.id
    }

    get_nome () {
        return this.nome
    }

    get_email () {
        return this.email
    }
}