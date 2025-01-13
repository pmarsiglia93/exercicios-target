const faturamentoDiario = [
    { dia: 1, valor: 200.0 },
    { dia: 2, valor: 250.0 },
    { dia: 3, valor: 0.0 }, // Dia sem faturamento (final de semana/feriado)
    { dia: 4, valor: 300.0 },
    { dia: 5, valor: 400.0 },
    { dia: 6, valor: 0.0 },
    { dia: 7, valor: 150.0 },
    { dia: 8, valor: 0.0 },
    { dia: 9, valor: 500.0 },
    { dia: 10, valor: 320.0 },
    { dia: 11, valor: 0.0 },
];


function calcularFaturamento(faturamento) {

    const diasValidos = faturamento.filter(d => d.valor > 0);

    if (diasValidos.length === 0) {
        console.log("Não há dados de faturamento válidos.");
        return;
    }


    const menorFaturamento = Math.min(...diasValidos.map(d => d.valor));
    const maiorFaturamento = Math.max(...diasValidos.map(d => d.valor));


    const somaFaturamento = diasValidos.reduce((acc, d) => acc + d.valor, 0);
    const mediaMensal = somaFaturamento / diasValidos.length;


    const diasAcimaMedia = diasValidos.filter(d => d.valor > mediaMensal).length;


    console.log(`Menor faturamento diário: R$ ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior faturamento diário: R$ ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaMedia}`);
}


calcularFaturamento(faturamentoDiario);
