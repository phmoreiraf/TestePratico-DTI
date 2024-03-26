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
            <img src="img/dog.png" alt="">
        </div>
        <div class="form">
            <form id="intention-form" onSubmit={handleSubmit}>
                <div class="form-header">
                    <div class="title">
                        <h1>Formulário de consulta - Canil</h1>
                    </div>
                </div>

         <div class="input-group">
                    <div class="input-box">
                        <label htmlfor="data">Data</label>
                        <input id="data" type="date" name="data" placeholder="Digite a data" value={data}
                    onChange={({ target: { value } }) => setData(value)}
                     required/>
                    </div>

                    <div class="input-box">
                        <label htmlfor="caesPequenos">Quantidade de Cães Grandes </label>
                        <input id="caesPequenos" type="number" name="caesPequenos" placeholder="Digite a quantidade de Cães Pequenos" value={caesPequenos}
                    onChange={({ target: { value } }) =>
                        setCaesPequenos(value)
                    } required/>
                    </div>

                    <div class="input-box">
                        <label htmlFor="caesGrandes">Quantidade de Cães Grandes </label>
                        <input id="caesGrandes" type="number" name="caesGrandes" placeholder="Digite a quantidade de Cães Grandes:" value={caesGrandes}
                    onChange={({ target: { value } }) =>
                        setCaesGrandes(value)
                    } required/>
                    </div>
                     </div>
                          <div class="continue-button">
                        <button type="submit"><a href="#">Consultar </a></button>
                </div>
            </form>
        </div>
    </div>
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
