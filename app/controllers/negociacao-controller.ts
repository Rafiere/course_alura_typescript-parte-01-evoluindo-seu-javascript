import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  private negociacoes: Negociacoes = new Negociacoes();

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    /* Não conseguimos utilizar esse código pois o array que o método "lista()" retorna é imutável. */
    // this.negociacoes.lista().pop();
    this.limparFormulario();
    this.negociacoes.adiciona(negociacao);
  }

  criaNegociacao(): Negociacao {
    const exp = /-/g;

    const negociacao = new Negociacao(
      new Date(this.inputData.value.replace(exp, ",")),
      parseInt(this.inputQuantidade.value),
      parseFloat(this.inputValor.value)
    );

    return negociacao;
  }

  limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }
}
