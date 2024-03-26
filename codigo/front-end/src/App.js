import React, { useState } from 'react';
import axios from 'axios';
import Formulario from './formulario';

function App() {
    const [data, setData] = useState('');
    const [caesPequenos, setCaesPequenos] = useState('');
    const [caesGrandes, setCaesGrandes] = useState('');
    const [melhorCanil, setMelhorCanil] = useState(null);
    const [loading, setLoading] = useState(false);

    const encontrarMelhorCanil = async () => {
        setLoading(true);
        console.log("Enviando solicitação para encontrar o melhor canil...");
        try {
            const response = await axios.post('http://localhost:8080/melhor-canil', {
                data: data,
                caesPequenos: caesPequenos,
                caesGrandes: caesGrandes,
            });
            console.log("Resposta do servidor:", response.data);
            setMelhorCanil(response.data);
        } catch (error) {
            console.error('Erro ao obter melhor canil:', error);
        }
        setLoading(false);
    };

    return (
        <Formulario
            data={data}
            setData={setData}
            caesPequenos={caesPequenos}
            setCaesPequenos={setCaesPequenos}
            caesGrandes={caesGrandes}
            setCaesGrandes={setCaesGrandes}
            encontrarMelhorCanil={encontrarMelhorCanil}
            melhorCanil={melhorCanil}
            loading={loading}
        />
    );
}

export default App;
