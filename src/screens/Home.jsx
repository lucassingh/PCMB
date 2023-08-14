import React from 'react';
import '../styles/home.scss'
import { useTranslation } from 'react-i18next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserView, MobileView } from 'react-device-detect';
import { Link } from 'react-scroll';

const Home = () => {

    const { t } = useTranslation("global");

    return (
        <section id='inicio' className='section-hero'>
            <div className='bg'></div>
            <div className='container'>
                <Row className='pt-5 pb-3'>
                    <Col md={12} className='header-container'>
                        <h1>PCMB</h1>
                        <BrowserView>
                            <div className='d-flex flex-column'>
                                <span className='subtitle-regular'>{t('hero.title')}</span><br />
                                <button style={{ background: '#009929', color: '#fff', fontWeight: 'bold', marginTop: 30, padding: '15px', width: 200, border: '1px solid #009929', cursor: 'pointer', borderRadius: '8px' }}>
                                    <Link to='what' offset={-70} spy={true} smooth={true} duration={1000} >Ver Más</Link>
                                </button>
                            </div>
                        </BrowserView>

                        <MobileView>
                            <span className='subtitle-regular'>{t('hero.title')}</span>
                            <button style={{ background: '#009929', color: '#fff', fontWeight: 'bold', marginTop: 30, padding: '15px', width: 200, border: '1px solid #009929', cursor: 'pointer', borderRadius: '8px' }}>
                                <Link to='what' offset={-70} spy={true} smooth={true} duration={1000} >Ver Más</Link>
                            </button>
                        </MobileView>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Home