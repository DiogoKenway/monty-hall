export default class Porta {
    #numero: number;
    #temPresente: boolean;
    #selecionada: boolean;
    #aberta: boolean;

    constructor (numero, temPresente = false, selecionada = false, aberta = false) {
        this.#numero = numero;
        this.#temPresente = temPresente;
        this.#selecionada = selecionada;
        this.#aberta = aberta;
    }

    get numero() :number{
        return this.#numero;
    }

    get temPresente() : boolean{
        return this.#temPresente;
    }

    get selecionada() : boolean {
        return this.#selecionada;
    }
    get aberta() : boolean{
        return this.#aberta;
    }

    desselecionar() {
        const selecionado = false;
        return new Porta(this.numero, this.temPresente, selecionado, this.aberta)
    }

    alternarSelecao() : object{
        const selecionado = !this.#selecionada;
        return new Porta(this.numero, this.temPresente, selecionado, this.aberta)
    }

    abrir() {
        const aberto = true;
        return new Porta(this.numero, this.temPresente, this.selecionada, aberto)
    }
}

