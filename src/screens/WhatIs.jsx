import React from 'react'
import { Col, Row } from 'react-bootstrap';
import '../styles/whatis.scss';
import { useTranslation } from 'react-i18next';

const WhatIs = () => {

    const { t } = useTranslation("global");

    return (
        <section className='section-proposal text-center'>
            <div className='container pt-5 pb-5'>
                <Row>
                    <Col md={12}>
                        <span>
                            {t('proposal.text1')}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <span className='color'>
                            {t('proposal.text2')} <br /> {t('proposal.text3')}
                        </span>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default WhatIs