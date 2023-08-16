import { CardapioDaLanchonete } from "./cardapio-da-lanchonete.js";

class PedidosLanchonete {
  constructor() {
      this.itensPedidos = [];
      this.quantidadeItens = this.itensPedidos.length;
  }

  verificaPedidoFeito(itens) {
    const itemInfo = cardapio.getItem(item.code);
    if (itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }
    
    itens.map((item) => {
      if (item.quantidade === 0) {
        return "Quantidade inválida!";
      } 
      if (item.code != cardapio.getItem(item.code)) {
        return "Item inválido!";
      } 
       
    });

    } }

   if (itemInfo.code.includes("combo1") || itemInfo.code.includes("combo2")) {
      return "Combo não pode ser pedido sem o principal!" }

   const possuiPrincipalComExtra = itens.some((item) =>
      item.code === "queijo" && (itens.some(otherItem => otherItem.code === "sanduiche")) ||
      item.code === "chantily" && (itens.some(otherItem => otherItem.code === "cafe"))
  );

   if (possuiPrincipalComExtra) {
      itens.reduce((acc, item) => {  
      return acc + item.value * item.quantidade;
    }, 0);

  } else {
    return "Item extra não pode ser pedido sem o principal";
  } 

export { PedidosLanchonete };



