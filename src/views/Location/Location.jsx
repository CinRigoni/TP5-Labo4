import React from 'react';
import { Container } from 'react-bootstrap';
import mapa from '../../assets/location/map.png'

const Location = () => {
    return (
        <Container className="mt-3">
            <h2>¿Donde Nos podes encontrar?</h2>
            <p> Av. Las Heras y Av. San Martin, Ciudad de Mendoza</p>
            <img src={mapa} alt="" />
        </Container>
    );
};

export default Location;