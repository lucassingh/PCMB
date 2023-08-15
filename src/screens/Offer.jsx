import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import img from '../assets/img-2.jpg'
import '../styles/offer.scss'

const Offer = () => {
    return (
        <section id='offer' className='section-offer'>
            <div className='container pt-5 pb-5'>
                <Row>
                    <Col md={4} className='cont-img'>
                        <Image src={img} width='80%' />
                    </Col>
                    <Col md={8} className='cont-text'>
                        <h4>¿Estás listo para hacer el PCMB?</h4>
                        <div className='d-flex flex-column'>
                            <span>
                                Si ya estas decidido a realizar el curso, no dudes en inscribirte, podes llenar el formulario online aqui.
                            </span>
                            <a style={{
                                background: '#009929',
                                textAlign: 'center',
                                color: '#fff',
                                fontWeight: 'bold',
                                marginTop: 30,
                                padding: '15px',
                                width: 200,
                                textDecoration: 'none',
                                border: '1px solid #009929',
                                cursor: 'pointer',
                                borderRadius: '8px'
                            }}
                                rel="noreferrer"
                                target='_blank'
                                href='https://forms.gle/sJZYRdkx8aauh13C6' offset={-70} spy={true} smooth={true} duration={1000} >
                                Inscribirse
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Offer