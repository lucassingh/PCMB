import React from 'react'
import { Col, Row, Image } from 'react-bootstrap';
import logos from '../../assets/logos.png';
import './prefooter.scss';
import img1 from '../../assets/instagram.png'
import img2 from '../../assets/facebook.png'
import { useTranslation } from 'react-i18next';

const Prefooter = () => {

    const { t } = useTranslation("global");

    return (
        <section id='contact' className='section-prefooter'>
            <div className='container pt-5 pb-5'>
                <Row>
                    <Col md={4}>
                        <Image src={logos} width='100%' />
                    </Col>
                    <Col md={8} className='cont-address'>
                        <div className='cont-text'>
                            <span className='title'>
                                {t('contact.text')}
                            </span><br /> <br />
                            <span className='text'>
                                + 54 9 11 5979 4129  <br />
                                infopcmb@gmail.com
                            </span>
                            <div className='d-flex flex-row mt-3 align-items-center'>
                                <Image className='right' src={img1} width='12%' />
                                <span className='text'>infopcmb</span>
                            </div>
                            <div className='d-flex flex-row mt-3 align-items-center'>
                                <Image className='right' src={img2} width='14%' />
                                <span className='text'>infopcmb</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Prefooter