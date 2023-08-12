import React from 'react'
import '../styles/who.scss';
import { Col, Row, Image } from 'react-bootstrap'
import icon from '../assets/icon.png'
import { useTranslation } from 'react-i18next';

const Who = () => {

    const { t } = useTranslation("global");

    return (
        <section className='who-section'>
            <div className='bg'></div>
            <div className='container'>
                <Row>
                    <Col md={12} className='text-center mb-3 mt-3'>
                        <h2 className='header-section'>{t('who.title')}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className='mt-3'>
                        <div className='text-center mb-2 mt-2'>
                            <Image src={icon} className='icon' alt='book' />
                        </div>
                        <Row className='mt-3'>
                            <span className='text text-center'>
                                {t('who.text1')}
                            </span>
                        </Row>
                    </Col>
                    <Col md={4} className='mt-3'>
                        <div className='text-center mb-2 mt-2'>
                            <Image src={icon} className='icon' alt='book' />
                        </div>
                        <Row className='mt-3'>
                            <span className='text text-center'>
                                {t('who.text2')}
                            </span>
                        </Row>
                    </Col>
                    <Col md={4} className='mt-3'>
                        <div className='text-center mb-2 mt-2'>
                            <Image src={icon} className='icon' alt='book' />
                        </div>
                        <Row className='mt-3'>
                            <span className='text text-center'>
                                {t('who.text3')}
                            </span>
                        </Row>
                    </Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col md={4} className='mt-3'>
                        <div className='text-center mb-2 mt-2'>
                            <Image src={icon} className='icon' alt='book' />
                        </div>
                        <Row className='mt-3'>
                            <span className='text text-center'>
                                {t('who.text4')}
                            </span>
                        </Row>
                    </Col>
                    <Col md={4} className='mt-3'>
                        <div className='text-center mb-2 mt-2'>
                            <Image src={icon} className='icon' alt='book' />
                        </div>
                        <Row className='mt-3'>
                            <span className='text text-center'>
                                {t('who.text5')}
                            </span>
                        </Row>
                    </Col>
                    <Col md={4} className='mt-3'>
                        <div className='text-center mb-2 mt-2'>
                            <Image src={icon} className='icon' alt='book' />
                        </div>
                        <Row className='mt-3'>
                            <span className='text text-center'>
                                {t('who.text6')}
                            </span>
                        </Row>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Who