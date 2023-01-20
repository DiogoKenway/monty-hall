class Porta {
    #numero;
    #temPresente;
    #selecionada;
    #aberta;

    constructor (numero, temPresente = false, selecionada = false, aberta = false) {
        this.#numero = numero;
        this.#temPresente = temPresente;
        this.#selecionada = selecionada;
        this.#aberta = aberta;
    }

    get numero() {
        this.#numero;
    }

    get temPresente() {
        this.#temPresente;
    }

    get selecionada() {
        this.#selecionada;
    }
    get aberta() {
        this.#aberta;
    }

    desselecionar() {
        const selecionado = false;
        return new Porta(this.numero, this.temPresente, selecionado, this.aberta)
    }

    alternarSelecao() {
        const selecionado = !this.#selecionada;
        return new Porta(this.numero, this.temPresente, selecionado, this.aberta)
    }

    abrir() {
        const aberto = true;
        return new Porta(this.numero, this.temPresente, selecionado, aberto)
    }
}

const p1 = new Porta(1);
// console.log(p1.alternarSelecao());
console.log(p1.alternarSelecao()); 
console.log(p1.alternarSelecao()); 
console.log(p1.alternarSelecao()); 
