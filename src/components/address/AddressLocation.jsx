import React from 'react'
import { Col, Row, Image } from 'react-bootstrap';
import './address.scss';

const AddressLocation = ({ direccion, nombre, email, telefono, img }) => {
    return (
        <Row md={12} className="mt-3 mb-3">
            <Col md={6} className='d-flex justify-content-center flex-column'>
                <div className='d-flex flex-column'>
                    <div className='cont-row d-flex mb-4'>
                        <strong><span className='label'>Dirección: </span></strong>
                        <span className='text'>{direccion}</span>
                    </div>
                    <div className='cont-row d-flex mb-4'>
                        <strong><span className='label'>Anfitrion: </span></strong>
                        <span className='text'>{nombre}</span>
                    </div>
                    <div className='cont-row d-flex mb-4'>
                        <strong><span className='label'>E-mail: </span></strong>
                        <span className='text'>{email}</span>
                    </div>
                    <div className='cont-row d-flex mb-4'>
                        <strong><span className='label'>Teléfono: </span></strong>
                        <span className='text'>{telefono}</span>
                    </div>
                </div>
            </Col>
            <Col md={6} className='mt-4 d-flex justify-content-center align-items-center'>
                <Image src={img} width='50%' />
            </Col>
        </Row>
    )
}

export default AddressLocation