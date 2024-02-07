const dados = require('./dados.json');

const verificaFibonacci = require('./fibonacci');
const calcularFaturamento = require('./faturamento');
const percentuais = require('./percentual');
const inversorString = require('./inversor');

verificaFibonacci(13);
verificaFibonacci(22);

calcularFaturamento(dados);

console.log('-----');
console.log('Percentual de representação por estado:');
console.log(percentuais);

console.log('-----');
inversorString('Target Sistemas');
inversorString('Orgulho!');
