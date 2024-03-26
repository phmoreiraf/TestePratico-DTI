const express = require('express');
const app = express();
app.use(express.json());

function encontrarMelhorPetshop(data, caesPequenos, caesGrandes) {
    const petshops = [
        { nome: "Meu Canino Feliz", distancia: 2, diaDaSemana: { pequeno: 20, grande: 40 }, fimDeSemana: { pequeno: 24, grande: 48 } },
        { nome: "Vai Rex", distancia: 1.7, diaDaSemana: { pequeno: 15, grande: 50 }, fimDeSemana: { pequeno: 20, grande: 55 } },
        { nome: "ChowChawgas", distancia: 0.8, diaDaSemana: { pequeno: 30, grande: 45 }, fimDeSemana: { pequeno: 30, grande: 45 } }
    ];

    // Verifica se a data é um dia da semana ou fim de semana
    const dia = new Date(data).getDay();
    const ehFimDeSemana = dia === 0 || dia === 6;

    let melhorPetshop = null;
    let custoMinimo = Infinity;

    for (const petshop of petshops) {
        const custo = ehFimDeSemana ?
            petshop.fimDeSemana.pequeno * caesPequenos + petshop.fimDeSemana.grande * caesGrandes :
            petshop.diaDaSemana.pequeno * caesPequenos + petshop.diaDaSemana.grande * caesGrandes;

        if (custo < custoMinimo || (custo === custoMinimo && petshop.distancia < melhorPetshop.distancia)) {
            melhorPetshop = petshop;
            custoMinimo = custo;
        }
    }

    return { nome: melhorPetshop.nome, custoTotal: custoMinimo };
}

app.post('/melhor-petshop', (req, res) => {
    const { data, caesPequenos, caesGrandes } = req.body;
    const melhorPetshop = encontrarMelhorPetshop(data, caesPequenos, caesGrandes);
    res.json(melhorPetshop);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));