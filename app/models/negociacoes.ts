import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  /* Através dos generics, estamos informando para o TypeScript que podemos inserir apenas objetos do tipo "Negociacao" no array abaixo. */
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  /* O modificador "Readonly" cria uma lista imutável. Apenas teremos acesso a métodos que não modificam o próprio array. */
  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}

const list = [];
