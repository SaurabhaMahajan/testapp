
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../App.scss'

// import NavbarToggle from 'react-bootstrap/NavbarToggle';
//   import Messages from './components/Messages';

function CardComponent(props) {
    return (
        <>
            <Card style={{ display: 'inline-block' }} border={'light'} className="sans">
                <Image src={props.image} thumbnail={props.thumbnail} fluid className={props.class && props.class} />
                <Card.Body className="p-3 text-center">
                    <Card.Title className="font-weight-bold">Lorem Ipsum</Card.Title>
                    <Card.Text>
                        We fill the space content. High quality, beautiful, solid and pleasant to the touch
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
CardComponent.propTypes = {
    thumbnail: PropTypes.bool,
    class: PropTypes.string,
    image: PropTypes.string.isRequired
};

export default CardComponent