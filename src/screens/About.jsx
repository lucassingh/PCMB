import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import imgTwo from '../assets/img-1.jpg'
import '../styles/about.scss';
import { useTranslation } from 'react-i18next';

const About = () => {

    const { t } = useTranslation("global");

    return (
        <section className='section-about'>
            <div className='container'>
                <Row>
                    <Col md={6} className='d-md-flex justify-content-md-center align-items-md-start flex-md-column'>
                        <h2 className='title-about- mb-3 mt-3'>{t('about.title')}</h2>
                        <span className='text'>{t('about.text')}</span>
                    </Col>
                    <Col md={6} className='mt-5 mb-5 d-md-flex justify-content-md-end align-items-md-start text-center'>
                        <Image src={imgTwo} width='80%' />
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default About