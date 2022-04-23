import React from 'react';
import { Card, Container } from 'react-bootstrap';


const Home = () => {
    return (
        <Container className="mt-3">
            <h2>Nosotros</h2>
            <Card>
                <Card.Body>Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.</Card.Body>
            </Card>
        </Container>
    );
};

export default Home;