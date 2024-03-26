import React, { useState } from 'react';
import axios from 'axios';
import Formulario from './formulario';
import './petshop.css';

function App() {
    const [data, setData] = useState('');
    const [caesPequenos, setCaesPequenos] = useState('');
    const [caesGrandes, setCaesGrandes] = useState('');
    const [melhorPetshop, setMelhorPetshop] = useState(null);

    const encontrarMelhorPetshop = async() => {
        const response = await axios.post('http://localhost:3000/melhor-petshop', {
            data: data,
            caesPequenos: caesPequenos,
            caesGrandes: caesGrandes,
        });

        setMelhorPetshop(response.data);
    };

    return ( <
        Formulario data = { data }
        setData = { setData }
        caesPequenos = { caesPequenos }
        setCaesPequenos = { setCaesPequenos }
        caesGrandes = { caesGrandes }
        setCaesGrandes = { setCaesGrandes }
        encontrarMelhorPetshop = { encontrarMelhorPetshop }
        melhorPetshop = { melhorPetshop }
        />
    );
}

export default App;