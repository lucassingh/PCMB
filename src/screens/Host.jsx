import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import img from '../assets/img-2a.jpg'
import { useTranslation } from 'react-i18next';
import '../styles/section.scss';

const Host = () => {

    const { t } = useTranslation("global");

    return (
        <section id='host' className='section-'>
            <div className='container pt-3 pb-5'>
                <Row className="flex-column-reverse flex-md-row">
                    <Col md={6} className='mt-5 d-md-flex justify-content-md-start align-items-md-start text-center'>
                        <Image src={img} width='80%' />
                    </Col>
                    <Col md={6} className='d-md-flex justify-content-md-center align-items-md-start flex-md-column'>
                        <h2 className='title-about- mb-3'>{t('host.title')}</h2>
                        <span className='text'>
                            {t('host.text')}
                        </span>
                        <div className='d-flex flex-column'>
                            <a style={{ 
                                background: '#fff', 
                                textAlign: 'center', 
                                color: '#009929', 
                                fontWeight: 'bold', 
                                marginTop: 30, 
                                padding: '15px',
                                textDecoration:'none',
                                width: 300, 
                                border: '1px solid #009929', 
                                cursor: 'pointer', 
                                borderRadius: '8px', 
                                marginRight: 20 
                            }}
                                rel="noreferrer"
                                target='_blank'                                
                                href='https://drive.google.com/file/d/1-ooeMtIERUG47Q7kEgoAOCyf3j_ytTme/view?usp=sharingt' offset={-70} spy={true} smooth={true} duration={1000} >
                                Requisitos
                            </a>
                            <a style={{ 
                                background: '#009929', 
                                textAlign: 'center', 
                                color: '#fff', 
                                fontWeight: 'bold', 
                                marginTop: 30, 
                                padding: '15px', 
                                textDecoration:'none',
                                width: 300, 
                                border: '1px solid #009929', 
                                cursor: 'pointer', 
                                borderRadius: '8px' 
                            }}
                                rel="noreferrer"
                                target='_blank'
                                href='https://forms.gle/DC2PZLP2kohMVYYD7' offset={-70} spy={true} smooth={true} duration={1000} >
                                Inscripción
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Host