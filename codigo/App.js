import React, { useState } from 'react';
import axios from 'axios';
import '/petshop.css';
import Formulario from '/Formulario';

function App() {
    const [data, setData] = useState('');
    const [caesPequenos, setCaesPequenos] = useState(0);
    const [caesGrandes, setCaesGrandes] = useState(0);
    const [melhorPetshop, setMelhorPetshop] = useState(null);

    const encontrarMelhorPetshop = async(event) => {
        event.preventDefault();
        const response = await axios.post('http://localhost:3000/melhor-petshop', { data, caesPequenos, caesGrandes });
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