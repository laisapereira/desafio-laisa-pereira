import { CardapioDaLanchonete } from "./cardapio-da-lanchonete.js";

class RegrasPedidosLanchonete {
 
  verificaPedidoFeito(code, quantity) {
    const cardapio = new CardapioDaLanchonete();
    const itemInfo = cardapio.getItem(code);
    
      if (itemInfo) {
        if (itemInfo.description.includes('extra') || itemInfo.code.includes("combo")) {
          console.log("Item extra não pode ser pedido sem o principal");
        } else if (parseInt(quantity) === 0 ) {
          console.log("Quantidade inválida!");
        } else if (quantity.trim() === "") {
          console.log("Não há itens no carrinho de compra!")
        }
      } else {
        console.log("Item inválido!");
        return false;
      }
   

    }
  }

export { RegrasPedidosLanchonete };



