import React from 'react'
import './footer.scss'
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation("global");

    return (
        <div className='footer-section'><span>&#169; 2023 PCMB {t('contact.text2')}</span></div>
    )
}

export default Footer