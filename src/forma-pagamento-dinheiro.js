
import { FormaDePagamento } from "./Forma-de-pagamento.js";

class FormaDePagamentoDinheiro extends FormaDePagamento{
  constructor(){
    super()
    this.taxa = 0.95;
    this.forma = "dinheiro";
  }

  aplicarRegraPagamento(valorTotal){
    return valorTotal * this.taxa;

  }

}

export { FormaDePagamentoDinheiro };