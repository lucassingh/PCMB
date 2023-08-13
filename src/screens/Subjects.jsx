import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../styles/section.scss';
import TabsComponent from '../components/tabs/Tabs';

const Subjects = () => {
    
    const { t } = useTranslation("global");

    return (
        <section className='section-'>
            <div className='container mt-4'>
                <Row>
                    <Col md={12} className=''>
                        <h3 className='title-about- mb-3'>{t('study.title2')}</h3>
                    </Col>
                    <Col md={12} className='mt-5'>
                        <TabsComponent />
                    </Col>                    
                </Row>
            </div>
        </section>
    )
}

export default Subjects