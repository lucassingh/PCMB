import React from 'react'
import { Col, Row, Card } from 'react-bootstrap';
import './address.scss';

const AddressLocation = ({ telefono }) => {
    return (
        <Row md={12} className="mt-3 mb-3">
            <Col md={12} className='d-flex justify-content-center flex-column'>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Télefono de contacto:</Card.Title>
                        <Card.Text style={{fontSize: 30, fontWeight:'bold', color: '#009929'}}>
                            {telefono}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default AddressLocation