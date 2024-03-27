import React from 'react';
import MinhaImagem from './assets/doguinho.jpg';
import MinhaImagem2 from './assets/doguinho.jpg';
import MinhaImagem3 from './assets/doguinho.jpg';

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
        <div className="container">
            <div className="form-image">
                <img src={MinhaImagem} alt="Imagem cachorro" />
                <img src={MinhaImagem2} alt="Imagem cachorro2" />
                <img src={MinhaImagem3} alt="Imagem cachorro3" />
            </div>
            <div className="form">
                <form id="intention-form" onSubmit={handleSubmit}>
                    <div className="form-header">
                        <div className="title">
                            <h1>Formulário de consulta - Canil</h1>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-box">
                            <label htmlFor="data">Data</label>
                            <input 
                                id="data" 
                                type="date" 
                                name="data" 
                                placeholder="Digite a data" 
                                value={data}
                                onChange={({ target: { value } }) => setData(value)}
                                required
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="caesPequenos">Quantidade de Cães Pequenos</label>
                            <input 
                                id="caesPequenos" 
                                type="number" 
                                name="caesPequenos" 
                                placeholder="Digite a quantidade de Cães Pequenos" 
                                value={caesPequenos}
                                onChange={({ target: { value } }) => setCaesPequenos(value)}
                                required
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="caesGrandes">Quantidade de Cães Grandes</label>
                            <input 
                                id="caesGrandes" 
                                type="number" 
                                name="caesGrandes" 
                                placeholder="Digite a quantidade de Cães Grandes" 
                                value={caesGrandes}
                                onChange={({ target: { value } }) => setCaesGrandes(value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="continue-button">
                        <button type="submit">Consultar</button>
                    </div>
                </form>
                <br/>
                <br/>
                {melhorCanil && (
                <div>
                    O melhor canil é {melhorCanil.nome} com um custo total de {' '}
                    {melhorCanil.custoTotal}.
                </div>
            )}
            </div>
           
        </div>
    );
}

export default Formulario;
