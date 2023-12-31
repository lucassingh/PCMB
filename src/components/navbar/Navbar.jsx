import React, { useState } from 'react'
import { Link } from 'react-scroll';
import styles from './Navbar.module.scss'
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import logo from '../../assets/logo.png'
import Container from 'react-bootstrap/Container';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggler = () => setMenuOpen((p) => !p);

    const { t } = useTranslation("global");

    return (

        <div className={styles.navbar}>
            <Container>
                <div className={styles.navbar__content}>
                    <Link style={{cursor:'pointer'}} to='inicio' className={styles.logo} spy={true} smooth={true} duration={500}>
                        <img src={logo} alt="brand" width='80%' />
                    </Link>
                    <div>
                        <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                            <Link className={styles.nav__item}
                                to="inicio" spy={true} smooth={true} duration={500}
                            >
                                {t('header.link1')}
                            </Link>
                            <Link className={styles.nav__item}
                                to="history" spy={true} smooth={true} duration={500} offset={-70}
                            >
                                {t('header.link2')}
                            </Link>
                            <Link className={styles.nav__item}
                                to="objetivos" spy={true} smooth={true} duration={500}  offset={-70}
                            >
                                {t('header.link3')}
                            </Link>
                            <Link className={styles.nav__item}
                                to="plan" spy={true} smooth={true} duration={500} offset={-70}
                            >
                                {t('header.link4')}
                            </Link>
                            <Link className={styles.nav__item}
                                to="host" spy={true} smooth={true} duration={500} offset={-70}
                            >
                                {t('header.link5')}
                            </Link>
                        </nav>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                        {/* {
                            i18n.language === 'es' ? (
                                <span onClick={() => i18n.changeLanguage("en")} style={{ marginRight: '15px', cursor: 'pointer' }}>EN</span>
                            ) : (
                                <span onClick={() => i18n.changeLanguage("es")} style={{ marginRight: '15px', cursor: 'pointer' }}>ES</span>
                            )
                        } */}
                        <button style={{ background: '#009929', color: '#fff', fontWeight: 'bold', padding: '8px', border: '1px solid #009929', cursor: 'pointer', borderRadius: '8px' }}>
                            <Link to='offer' offset={-70} spy={true} smooth={true} duration={1000} >Inscribirse</Link>
                        </button>
                    </div>
                    <div className='mobile' style={{ marginLeft: 15 }}>
                        <div onClick={menuToggler} >
                            {!menuOpen ? <BiMenuAltRight size={25} /> : <AiOutlineClose size={25} />}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar