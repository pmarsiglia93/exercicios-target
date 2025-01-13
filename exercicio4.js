
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};


function calcularPercentual(faturamento) {

    const faturamentoTotal = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

    console.log("Faturamento Total: R$ " + faturamentoTotal.toFixed(2));


    for (const [estado, valor] of Object.entries(faturamento)) {
        const percentual = (valor / faturamentoTotal) * 100;
        console.log(`${estado}: ${percentual.toFixed(2)}%`);
    }
}


calcularPercentual(faturamentoPorEstado);
