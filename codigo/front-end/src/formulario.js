import React from 'react';

function Formulario({
    data,
    setData,
    caesPequenos,
    setCaesPequenos,
    caesGrandes,
    setCaesGrandes,
    encontrarMelhorPetshop,
    melhorPetshop,
}) {
    return ( <
        div className = "container" >
        <
        h1 > PetShop < /h1> <
        h2 > Formulário de consulta < /h2> <
        form id = "intention-form"
        onSubmit = { encontrarMelhorPetshop } >
        <
        label htmlFor = "data" > Data: < /label> <
        input type = "date"
        id = "data"
        value = { data }
        onChange = {
            ({ target: { value } }) => setData(value)
        }
        required /
        >

        <
        label htmlFor = "caesPequenos" >
        Quantidade de Cães Pequenos:
        <
        /label> <
        input type = "number"
        id = "caesPequenos"
        value = { caesPequenos }
        onChange = {
            ({ target: { value } }) =>
            setCaesPequenos(value)
        }
        required /
        >

        <
        label htmlFor = "caesGrandes" >
        Quantidade de Cães Grandes:
        <
        /label> <
        input type = "number"
        id = "caesGrandes"
        value = { caesGrandes }
        onChange = {
            ({ target: { value } }) =>
            setCaesGrandes(value)
        }
        required /
        >

        <
        button type = "submit" > Consultar < /button> < /
        form > {
            melhorPetshop && ( <
                div >
                O melhor petshop é { melhorPetshop.nome }
                com um custo total de { ' ' } { melhorPetshop.custoTotal }. <
                /div>
            )
        } <
        /div>
    );
}

export default Formulario;