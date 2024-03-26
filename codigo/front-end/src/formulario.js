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
    loading,
}) {
    return (
        <div className="container">
            <h1>PetShop</h1>
            <h2>Formulário de consulta</h2>
            <form id="intention-form" onSubmit={encontrarMelhorPetshop}>
                <label htmlFor="data">Data:</label>
                <input
                    type="date"
                    id="data"
                    value={data}
                    onChange={({ target: { value } }) => setData(value)}
                    required
                />

                <label htmlFor="caesPequenos">
                    Quantidade de Cães Pequenos:
                </label>
                <input
                    type="number"
                    id="caesPequenos"
                    value={caesPequenos}
                    onChange={({ target: { value } }) =>
                        setCaesPequenos(value)
                    }
                    required
                />

                <label htmlFor="caesGrandes">
                    Quantidade de Cães Grandes:
                </label>
                <input
                    type="number"
                    id="caesGrandes"
                    value={caesGrandes}
                    onChange={({ target: { value } }) =>
                        setCaesGrandes(value)
                    }
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading ? 'Consultando...' : 'Consultar'}
                </button>
            </form>
            {melhorPetshop && (
                <div>
                    <h2>Melhor Canil:</h2>
                    <p>Nome: {melhorPetshop.nome}</p>
                    <p>Preço total dos banhos: {melhorPetshop.custoTotal}</p>
                </div>
            )}
        </div>
    );
}

export default Formulario;
