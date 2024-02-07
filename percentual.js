const representaçãoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalMensal = Object.values(representaçãoPorEstado).reduce((acc, valor) => acc + valor, 0);

const percentuais = {};

for (const estado in representaçãoPorEstado) {
    percentuais[estado] = (representaçãoPorEstado[estado] / totalMensal) * 100;
}

module.exports = percentuais;
