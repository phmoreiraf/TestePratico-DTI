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
}) {
    const handleSubmit = (event) => {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        // Chama a função para encontrar o melhor canil
        encontrarMelhorCanil();
    };

    return (
        <div class="container">
        <div class="form-image">
            <img src="assets/img//undraw_shopping_re_3wst.svg" alt="">
        </div>
        <div class="form">
            <form id="intention-form" onSubmit={handleSubmit}>
                <div class="form-header">
                    <div class="title">
                        <h1>Cadastre-se</h1>
                    </div>
                </div>
        
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

                <button type="submit">Consultar</button>
            </form>
            <br/>
            <br/>            
            {melhorCanil && (
                <div>

                    
                    O melhor canil é {melhorCanil.nome} com um custo total de{' '}
                    {melhorCanil.custoTotal}.

                
                </div>
            )}
        </div>
    );
}

export default Formulario;
