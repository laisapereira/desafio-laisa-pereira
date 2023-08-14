import { CardapioDaLanchonete } from "./cardapio-da-lanchonete.js";

class RegrasPedidosLanchonete {
 
  verificaPedidoFeito(itens, code, quantity) {
    const cardapio = new CardapioDaLanchonete();
    const itemInfo = cardapio.getItem(code);
    
   // criar um array de itens principais e colocar um push cada vez que verificar que um principal existe mp array
   // se o tamanho desse array for > 0, obviamente o principalnao esta sozinho
   // logo ele nao cai no if de "Item extra não pode ser pedido sem o principal"
   if (itens.length != 0) {  
    for (let i=0; i < itens.length; i++)  {
    let isPrincipal = true; 

    if (itemInfo) {
     if (itemInfo.code.includes("combo1") || itemInfo.code.includes("combo2") || itemInfo.description.includes("extra")) {
      isPrincipal = false;        
    }     console.log(isPrincipal)
    if (!isPrincipal) {
      console.log("Item extra não pode ser pedido sem o principal") 
      return false;
  }   else if (parseInt(quantity) === 0 ) {
      console.log("Quantidade inválida!");
      return false;
  } else {
    return true
  }

  } else {
    console.log('Item inválido!')
    return false;
  }
  }

} else {
  console.log("Pedido vazio!");
  return false;

} 







    /* for (let i=0; i < itens.length; i++)  { 
      const [code, quantity] = itens[i].split(',');
      const itemInfo = cardapio.getItem(code);
      console.log(code, quantity, itemInfo)

     if (itemInfo) {
        if (itemInfo.description.includes('extra') ) {
          const codePrincipal = itemInfo.code.split(",")[i]
          if (!itens[codePrincipal]) {
          console.log("Item extra não pode ser pedido sem o principal");
          console.log(itemInfo)
          return false;
        } else if (parseInt(quantity) === 0 ) {
          console.log("Quantidade inválida!");

        } else {
          if (!itemInfo.code.includes("combo")) {
          itens[itemInfo.code] = true;
          console.log("oi puta")
        }
      } 
      } else {
        console.log("Item inválido!");
        return false;
      }
      
    } 

    
      
  }  */

    } 
  } 


export { RegrasPedidosLanchonete };



