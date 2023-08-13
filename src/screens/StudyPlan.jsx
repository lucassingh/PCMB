import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import img from '../assets/img-3.png'
import { useTranslation } from 'react-i18next';
import '../styles/section.scss';

const StudyPlan = () => {

    const { t } = useTranslation("global");

    return (
        <section className='section-'>
            <div className='container mt-4'>
                <Row>
                    <Col md={6} className='d-md-flex justify-content-md-center align-items-md-start flex-md-column'>
                        <h2 className='title-about- mb-3'>{t('study.title')}</h2>
                        <span className='text'>
                            {t('study.text')}
                        </span>
                    </Col>
                    <Col md={6} className='mt-5 d-md-flex justify-content-md-end align-items-md-start text-center'>
                        <Image src={img} width='80%' />
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default StudyPlan