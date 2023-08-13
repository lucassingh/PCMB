import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import img from '../assets/img-1b.jpg'
import { useTranslation } from 'react-i18next';
import '../styles/section.scss';

const Cronology = () => {

    const { t } = useTranslation("global");

    return (
        <section className='section-'>
            <div className='container pt-4 pb-5'>
                <Row className="flex-column-reverse flex-md-row">
                    <Col md={6} className='mt-5 d-md-flex justify-content-md-start align-items-md-start text-center'>
                        <Image src={img} width='80%' />
                    </Col>
                    <Col md={6} className='d-md-flex justify-content-md-center align-items-md-start flex-md-column'>
                        <h2 className='title-about- mb-3'>{t('aboutHistory.title')}</h2>
                        <span className='text'>
                            {t('aboutHistory.text')}
                        </span>
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

export default Cronology