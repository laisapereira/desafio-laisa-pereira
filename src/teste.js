import { CaixaDaLanchonete} from './caixa-da-lanchonete.js';



const caixa = new CaixaDaLanchonete();

const itens = ['cafe,1', 'chantily,2', 'sanduiche,3'];

const metodoDePagamento = 'dinheiro';
const valorTotal = caixa.calcularValorDaCompra(metodoDePagamento, itens);
console.log(`Valor total da compra: R$ ${valorTotal.toFixed(2)}`);
