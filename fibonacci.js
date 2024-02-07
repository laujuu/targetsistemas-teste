function verificaFibonacci(numero) {
    let a = 0, b = 1, c;

    while (a <= numero) {
        if (a === numero) {
            console.log(`${numero} pertence a sequencia de Fibonacci.`);
            return;
        }
        c = a + b;
        a = b;
        b = c;
    }

    console.log(`${numero} não pertence a sequencia de Fibonacci.`);
}

module.exports = verificaFibonacci;
