import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { Negociacao } from "./models/negociacao";

const negociacao = new Negociacao(new Date(), 10, 100);

const controller = new NegociacaoController();

const form = document.querySelector(".form");
form.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  controller.adiciona();
});
console.log(negociacao);

// negociacao.quantidade = 10000;
console.log(negociacao.quantidade);
