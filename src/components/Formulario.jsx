import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Cards from './Cards';

const Formulario = () => {
    const peliculasLocalStorage = JSON.parse(localStorage.getItem('listapeliculas')) || [];
    const [pelicula, setPelicula] = useState('');
    const [peliculas, setPeliculas] = useState(peliculasLocalStorage);

    useEffect(() => {
        localStorage.setItem('listapeliculas', JSON.stringify(peliculas));
    }, [peliculas]);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        setPeliculas([...peliculas, pelicula]);
        setPelicula('');
        setValidated(true);
    };

    const handlePeliculaChange = (event) => {
        setPelicula(event.target.value);
    };


    return (
        <div className="container text-light">
            <h1>Administrador de Peliculas</h1>
            <hr />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Iron Man 1"
                            value={pelicula}
                            onChange={handlePeliculaChange}
                        />
                        <Form.Control.Feedback>El nombre es válido!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Complete este campo</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Un empresario millonario construye un traje blindado..."
                        />
                        <Form.Control.Feedback>La descripción es válida!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Complete este campo</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Género</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Seleccione un género</option>
                            <option value="Masculino">Acción</option>
                            <option value="Femenino">Aventura</option>
                            <option value="Otro">Terror</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Button type="submit">Enviar</Button>
            </Form>
            <h1 className='text-center mt-5'>Peliculas</h1>
            <hr />
            <Cards peliculas={peliculas} className='my-4' />
        </div>
    );
};

export default Formulario;
