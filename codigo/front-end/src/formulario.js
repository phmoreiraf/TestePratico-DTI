import React from 'react';

function Formulario({
    data,
    setData,
    caesPequenos,
    setCaesPequenos,
    caesGrandes,
    setCaesGrandes,
    encontrarMelhorCanil,
    melhorCanil,
    loading,
}) {
    return (
        <div className="container">
            <h1>Canil</h1>
            <h2>Formulário de consulta</h2>
            <form id="intention-form" onSubmit={encontrarMelhorCanil}>
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
            {melhorCanil && (
                <div>
                    <h2>Melhor Canil:</h2>
                    <p>Nome: {melhorCanil.nome}</p>
                    <p>Preço Total dos Banhos: {melhorCanil.precoTotal}</p>
                </div>
            )}
        </div>
    );
}

export default Formulario;
