import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './item.scss'
import { useTranslation } from 'react-i18next';

const Items = () => {

    const { t } = useTranslation("global");

    return (
        <div className='main-container'>
            <div className='bg'></div>
            <div className='container'>
                <Row>
                    <Col md={2} className='item text-center'><span>{t('items.option1')}</span></Col>
                    <Col md={2} className='item text-center'><span>{t('items.option2')}<br /> {t('items.option2a')}</span></Col>
                    <Col md={2} className='item text-center'><span>{t('items.option3')}<br /> {t('items.option3a')}</span></Col>
                    <Col md={2} className='item text-center'><span>{t('items.option4')}<br /> {t('items.option4a')}</span></Col>
                    <Col md={2} className='item text-center'><span>{t('items.option5')} <br /> {t('items.option5a')}</span></Col>
                    <Col md={2} className='item text-center'><span>{t('items.option6')} <br /> {t('items.option6a')}</span></Col>
                </Row>
            </div>

        </div>
    )
}

export default Items