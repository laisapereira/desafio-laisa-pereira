import FormaDePagamento from "./Forma-de-pagamento.js";

class FormaDePagamentoCredito extends FormaDePagamento{
  constructor(){
    this.taxa = 1.03;
    this.forma = "credito"; 
  }

  aplicarRegraPagamento(valorTotal){
    return valorTotal * this.taxa;

  }

}

export { FormaDePagamentoCredito };