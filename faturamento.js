function calcularFaturamento(dados) {
    let menorValor = Number.MAX_VALUE;
    let maiorValor = Number.MIN_VALUE;
    let soma = 0;
    let diasAcimaMedia = 0;

    dados.forEach((dia) => {
        if (dia.valor > maiorValor) {
            maiorValor = dia.valor;
        }

        if (dia.valor < menorValor && dia.valor > 0) {
            menorValor = dia.valor;
        }

        if (dia.valor > 0) {
            soma += dia.valor;
            diasAcimaMedia++;
        }
    });

    const media = soma / diasAcimaMedia;

    console.log('-----');
    console.log(`Menor valor de faturamento: ${menorValor}`);
    console.log(`Maior valor de faturamento: ${maiorValor}`);
    console.log(`Dias acima da média mensal: ${diasAcimaMedia}`);
}

module.exports = calcularFaturamento;
