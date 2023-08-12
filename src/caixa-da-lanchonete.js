import { CardapioDaLanchonete } from "./cardapio-da-lanchonete.js";
import { RegrasPedidosLanchonete } from "./regras-pedidos-lanchonete.js";
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const cardapio = new CardapioDaLanchonete();
        const pedidoValido = new RegrasPedidosLanchonete();

        const total = itens.reduce((acc, item) => {
            const [code, quantity] = item.split(',')
            if (pedidoValido.verificaPedidoFeito(code, quantity)) {
             const itemById = cardapio.getItem(code);
             return acc + itemById.value * parseInt(quantity);
             
        } else {
            return acc;
             
          }
          
     }, 0);
    

    switch (metodoDePagamento) { 
        case 'dinheiro':
            return total * 0.95;
        case 'credito':
            return total * 1.05;
        case 'debito':
            return total;
        default:
            throw new Error(`Forma de pagamento ${metodoDePagamento} inválda!`);
    }
    }
}

export { CaixaDaLanchonete };

