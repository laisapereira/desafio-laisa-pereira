import { CardapioDaLanchonete } from "./cardapio-da-lanchonete.js";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const cardapio = new CardapioDaLanchonete();
        const total = itens.reduce((acc, item) => {
        const [code, quantity] = item.split(',')
        const itemById = cardapio.getItem(code);
        return acc + itemById.value * parseInt(quantity);
     }, 0);
    

    switch (metodoDePagamento) { 
        case 'dinheiro':
            return total * 0.95;
        case 'credito':
            return total * 1.05;
        case 'debito':
            return total;
        default:
            throw new Error(`Metodo de pagamento ${metodoDePagamento} não suportado`);
    }
    }
}

