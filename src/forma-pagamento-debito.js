import FormaDePagamento from "./Forma-de-pagamento.js";

class FormaDePagamentoDebito extends FormaDePagamento{
  constructor(){
    this.taxa = 1;
    this.forma = "debito";
   
  }

  aplicarRegraPagamento(valorTotal){
    return valorTotal * this.taxa;

  }

}

export { FormaDePagamentoDebito };