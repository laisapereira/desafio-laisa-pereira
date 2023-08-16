class CardapioDaLanchonete {
  constructor() {
    this.itens=[];
  }

  setItems() {
    const cafe = new ItemLanchonete("cafe", "Café", 3.00);
    this.itens.push(cafe);

    const chantily = new ItemLanchonete("chantily", "Chantily (extra do Café)", 1.50);
    this.itens.push(chantily);

    const suco = new ItemLanchonete("suco", "Suco Natural", 6.20);
    this.itens.push(suco);

    const sanduiche = new ItemLanchonete("sanduiche", "Sanduíche", 6.50);
    this.itens.push(sanduiche);

    const queijo = new ItemLanchonete("queijo", "Queijo (extra do Sanduíche)", 2.00);
    this.itens.push(queijo);

    const salgado = new ItemLanchonete("salgado", "Salgado", 7.25);
    this.itens.push(salgado);

    const combo1 = new ItemLanchonete("combo1", "1 Suco e 1 Sanduíche", 9.50);
    this.itens.push(combo1);

    const combo2 = new ItemLanchonete("combo2", "1 Café e 1 Sanduíche", 7.50);
    this.itens.push(combo2);

  }

}

export { CardapioDaLanchonete };
