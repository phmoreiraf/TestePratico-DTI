const express = require('express');
const app = express();
app.use(express.json());

function encontrarMelhorCanil(data, caesPequenos, caesGrandes) {
    const canis = [
        { nome: "Canil Feliz", distancia: 2, diaDaSemana: { pequeno: 20, grande: 40 }, fimDeSemana: { pequeno: 24, grande: 48 } },
        { nome: "Vai Cachorro", distancia: 1.7, diaDaSemana: { pequeno: 15, grande: 50 }, fimDeSemana: { pequeno: 20, grande: 55 } },
        { nome: "ChowChawgas", distancia: 0.8, diaDaSemana: { pequeno: 30, grande: 45 }, fimDeSemana: { pequeno: 30, grande: 45 } }
    ];

    // Verifica se a data é um dia da semana ou fim de semana
    const dia = new Date(data).getDay();
    const ehFimDeSemana = dia === 0 || dia === 6;

    let melhorCanil = null;
    let custoMinimo = Infinity;

    for (const canil of canis) {
        const custo = ehFimDeSemana ?
            canil.fimDeSemana.pequeno * caesPequenos + canil.fimDeSemana.grande * caesGrandes :
            canil.diaDaSemana.pequeno * caesPequenos + canil.diaDaSemana.grande * caesGrandes;

        if (custo < custoMinimo || (custo === custoMinimo && canil.distancia < melhorCanil.distancia)) {
            melhorCanil = canil;
            custoMinimo = custo;
        }
    }

    return { nome: melhorCanil.nome, custoTotal: custoMinimo };
}

app.post('/melhor-canil', (req, res) => {
    const { data, caesPequenos, caesGrandes } = req.body;
    const melhorCanil = encontrarMelhorCanil(data, caesPequenos, caesGrandes);
    res.json(melhorCanil);
});

app.listen(8080, () => console.log('Servidor rodando na porta 8080'));
