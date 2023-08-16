import { CardapioDaLanchonete } from "./cardapio-da-lanchonete.js";
import { PedidosLanchonete } from "./pedido-lanchonete.js";
import { FormaDePagamentoDebito } from "./forma-pagamento-debito.js"; 
import { FormaDePagamentoCredito } from "./forma-pagamento-credito.js"; 
import { FormaDePagamentoDinheiro } from "./forma-pagamento-dinheiro.js";

class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    const valorItens = new PedidosLanchonete();
    const erros = valorItens.verificaPedidoFeito(itens);
    
    let podeCalcular = true;

    if (erros.length > 0) {
      console.log("Erros encontrados:");
      erros.forEach((erro) => {
        console.log(erro);
      });
      podeCalcular = false;
    }

    if (podeCalcular) {
      const cardapio = new CardapioDaLanchonete();
      let valorTotal = 0;

      for (const item of itens) {
        const [codigo, quantidade] = item.split(',');
        const itemInfo = cardapio.getItem(codigo);

        if (itemInfo) {
          valorTotal += itemInfo.valor * parseInt(quantidade);
        } else {
          console.log("Item inválido")
         
        }
      }

      let formaDePagamento;

      if (metodoDePagamento === "debito") {
        formaDePagamento = new FormaDePagamentoDebito();
      } else if (metodoDePagamento === "credito") {
        formaDePagamento = new FormaDePagamentoCredito();
      } else {
        formaDePagamento = new FormaDePagamentoDinheiro();
      }

      const valorComDesconto = formaDePagamento.aplicarRegraPagamento(valorTotal);

      return valorComDesconto;
    }

}
}

export { CaixaDaLanchonete };
