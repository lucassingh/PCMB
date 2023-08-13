import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import img from '../assets/img-2a.jpg'
import { useTranslation } from 'react-i18next';
import '../styles/section.scss';
import { Link } from 'react-scroll';

const Host = () => {

    const { t } = useTranslation("global");

    return (
        <section className='section-'>
            <div className='container pt-4 pb-5'>
                <Row className="flex-column-reverse flex-md-row">
                    <Col md={6} className='mt-5 d-md-flex justify-content-md-start align-items-md-start text-center'>
                        <Image src={img} width='80%' />
                    </Col>
                    <Col md={6} className='d-md-flex justify-content-md-center align-items-md-start flex-md-column'>
                        <h2 className='title-about- mb-3'>{t('host.title')}</h2>
                        <span className='text'>
                            {t('host.text')}
                        </span>
                        <div className='d-flex'>
                            <button style={{ background: '#fff', color: '#009929', fontWeight: 'bold', marginTop: 30, padding: '15px', width: 200, border: '1px solid #009929', cursor: 'pointer', borderRadius: '8px', marginRight:20 }}>
                                <Link to='contact' spy={true} smooth={true} duration={1000} >Requisitos</Link>
                            </button>
                            <button style={{ background: '#009929', color: '#fff', fontWeight: 'bold', marginTop: 30, padding: '15px', width: 200, border: '1px solid #009929', cursor: 'pointer', borderRadius: '8px' }}>
                                <Link to='contact' spy={true} smooth={true} duration={1000} >Inscripción</Link>
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Host