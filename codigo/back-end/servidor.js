const express = require('express');
const cors = require('cors');
const { isWeekend } = require('date-fns');
const app = express();
app.use(express.json());
app.use(cors());

function encontrarMelhorCanil(data, caesPequenos, caesGrandes) {
    const canis = [
        { nome: "Canil Feliz", distancia: 2, diaDaSemana: { pequeno: 20, grande: 40 }, fimDeSemana: { pequeno: 24, grande: 48 } },
        { nome: "Vai Cachorro", distancia: 1.7, diaDaSemana: { pequeno: 15, grande: 50 }, fimDeSemana: { pequeno: 20, grande: 55 } },
        { nome: "ChowChawgas", distancia: 0.8, diaDaSemana: { pequeno: 30, grande: 45 }, fimDeSemana: { pequeno: 30, grande: 45 } }
    ];

    const dataFormatada = new Date(data); // Converte a string de data para um objeto Date
    const diaDaSemana = dataFormatada.getDay(); // Obtém o dia da semana (0 a 6, onde 0 = domingo, 6 = sábado)
    const ehFinalDeSemana = diaDaSemana === 6 || diaDaSemana === 5; // Verifica se é sábado ou domingo

    let melhorCanil = null;
    let custoMinimo = Infinity;

    for (const canil of canis) {
        const custo = ehFinalDeSemana ?
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
    console.log("Recebendo solicitação para encontrar o melhor canil...");
    const { data, caesPequenos, caesGrandes } = req.body;
    console.log("Dados recebidos:", { data, caesPequenos, caesGrandes });
    const melhorCanil = encontrarMelhorCanil(data, caesPequenos, caesGrandes);
    console.log("Melhor canil encontrado:", melhorCanil);
    res.json(melhorCanil);
});

app.listen(8080, () => console.log('Servidor rodando na porta 8080'));