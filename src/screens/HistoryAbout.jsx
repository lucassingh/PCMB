import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import imgTwo from '../assets/img-1b.jpg'
import '../styles/about.scss';
import { useTranslation } from 'react-i18next';

const AboutHistory = () => {

    const { t } = useTranslation("global");

    return (
        <section className='section-about'>
            <div className='container'>
                <Row>
                    <Col md={6} className='order-md-1 order-2 mt-3 mb-5 d-md-flex justify-content-md-start align-items-md-start text-center'>
                        <Image src={imgTwo} width='80%' />
                    </Col>
                    <Col md={6} className='order-md-2 order-1 mb-5 d-md-flex justify-content-md-center align-items-md-end flex-md-column'>
                        <h2 className='title-about- mb-3 mt-3'>{t('aboutHistory.title')}</h2>
                        <span className='text-a'>{t('aboutHistory.text')}</span>
                        <div className='d-flex mt-3'>
                            <span className='info'>+ 20 sedes</span>
                            <span className='info le'>+ 400 alumnos</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default AboutHistory