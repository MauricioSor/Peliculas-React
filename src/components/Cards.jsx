import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 

const Cards = ({ peliculas}) => {
    return (
        <section className='d-flex'>
            {
            peliculas.map((nombre,descripcion,indicePelicula) => (
                <Card className=" mx-2 my-2" key={indicePelicula}>
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                    </div>
                    <div>
                    </div>
                <Button className='my-2' variant='danger'>Borrar</Button>
                </Card>
            ))
            }
        </section>
    );
};

export default Cards;
