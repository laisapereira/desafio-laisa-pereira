import { CaixaDaLanchonete } from './caixa-da-lanchonete.js';

const caixa = new CaixaDaLanchonete();

const itens = [ 'sanduiche,1', 'combo1,2','queijo,2'];
const metodoDePagamento = 'credito';

const valorTotal = caixa.calcularValorDaCompra(metodoDePagamento, itens);
console.log(`Valor total da compra: R$ ${valorTotal.toFixed(2).replace('.', ',')}`);

