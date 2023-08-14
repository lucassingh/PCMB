import React from 'react'
import '../styles/features.scss'
import { Col, Row } from 'react-bootstrap'

const Features = () => {

    return (
        <section className='features-section'>
            <div className='bg'></div>
            <div className='container'>
                <Row>
                    <Col md={12} className='text-center mt-3 mb-5'>
                        <h2 className='header-section'>Características del PCMB</h2>
                    </Col>
                    <Col>
                    <span className='text'>• Se auto sostiene por la gestión sabia de los anfitriones.</span><br />
                    <span className='text'>• Es simple y práctico, solo 5 horas promedio una vez por mes.</span><br />
                    <span className='text'>• Permite que iglesias de una ciudad participen juntas aprendiendo y llevando a cabo la práctica de las enseñanzas.</span><br />
                    <span className='text'>• Todos son desafiados a realizar viajes de apoyo nacional o internacional como experiencia transcultural.</span><br />
                    </Col>
                </Row>
                
            </div>
        </section>
    )
}

export default Features