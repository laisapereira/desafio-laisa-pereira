 import { CardapioDaLanchonete } from "./cardapio-da-lanchonete.js";

class PedidosLanchonete {
  constructor() {
      this.itensPedidos = [];
      this.quantidadeItens = this.itensPedidos.length;
  }

  verificaPedidoFeito(itens) {
    const cardapio = new CardapioDaLanchonete();
    const erros = [];
  

    if (itens.length === 0) {
      erros.push("Não há itens no carrinho de compra!") 
    }
    
    itens.map((item) => {
      if (item.quantidade === 0) {
       erros.push("Quantidade inválida!")
      } 
      if (item.codigo != cardapio.getItem(item.codigo)) {
        erros.push("Item inválido!")
      } 
       
    });


  if (itens.includes("combo1") || itens.includes("combo2")) {
      return "Combo não pode ser pedido sem o principal!" }
    

  const possuiPrincipalComExtra = itens.some((item) =>
  (item.codigo === "queijo" && itens.some(otherItem => otherItem.codigo === "sanduiche")) ||
  (item.codigo === "chantily" && itens.some(otherItem => otherItem.codigo === "cafe"))
);

   let podeCalcular = false;
   if (!possuiPrincipalComExtra) {
    podeCalcular = true;
   } else {
    erros.push("Item extra não pode ser pedido sem o principal")
    !podeCalcular 
  } 
  return { podeCalcular, erros };
  }


}
export { PedidosLanchonete };



