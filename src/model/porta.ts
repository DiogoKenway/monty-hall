export default class PortaModel {
    #numero: number;
    #temPresente: boolean;
    #selecionada: boolean;
    #aberta: boolean;

    constructor (numero: number, temPresente = false, selecionada = false, aberta = false) {
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

    desselecionar(): object {
        const selecionado: boolean = false;
        return new PortaModel(this.numero, this.temPresente, selecionado, this.aberta)
    }

    alternarSelecao() : object{
        const selecionado = !this.#selecionada;
        return new PortaModel(this.numero, this.temPresente, selecionado, this.aberta)
    }

    abrir() : object {
        const aberto = true;
        console.log(aberto);
        
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberto)
    }
}

