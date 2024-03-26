const express = require('express');
const app = express();
app.use(express.json());

function encontrarMelhorPetshop(data, caesPequenos, caesGrandes) {
    const petshops = [
        { nome: "Meu Canino Feliz", distancia: 2, diaDaSemana: { pequeno: 20, grande: 40 }, fimDeSemana: { pequeno: 24, grande: 48 } },
        { nome: "Vai Rex", distancia: 1.7, diaDaSemana: { pequeno: 15, grande: 50 }, fimDeSemana: { pequeno: 20, grande: 55 } },
        { nome: "ChowChawgas", distancia: 0.8, diaDaSemana: { pequeno: 30, grande: 45 }, fimDeSemana: { pequeno: 30, grande: 45 } }
    ];

    const dia = new Date(data).getDay();
    const isFimDeSemana = [0, 6].includes(dia);

    let melhorPetshop = null;
    let melhorCusto = Infinity;

    for (const petshop of petshops) {
        const custo = isFimDeSemana
            ? petshop.fimDeSemana.pequeno * caesPequenos + petshop.fimDeSemana.grande * caesGrandes
            : petshop.diaDaSemana.pequeno * caesPequenos + petshop.diaDaSemana.grande * caesGrandes;

        if (custo < melhorCusto) {
            melhorPetshop = petshop;
            melhorCusto = custo;
        } else if (custo === melhorCusto && petshop.distancia < melhorPetshop.distancia) {
            melhorPetshop = petshop;
        }
    }

    return { nome: melhorPetshop.nome, custoTotal: melhorCusto };
}

app.post('/melhor-petshop', (req, res) => {
    const { data, caesPequenos, caesGrandes } = req.body;
    const melhorPetshop = encontrarMelhorPetshop(data, caesPequenos, caesGrandes);
    res.json(melhorPetshop);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
