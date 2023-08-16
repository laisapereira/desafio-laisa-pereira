class FormaDePagamento {
  constructor() { 
    this.forma;
    this.taxa;
  }

  aplicarRegraPagamento(valorTotal){
    return valorTotal * this.taxa;
  }

}

export { FormaDePagamento };
