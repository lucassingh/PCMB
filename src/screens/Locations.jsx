import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../styles/section.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import img from '../assets/map.png'
import AddressLocation from '../components/address/AddressLocation';

const Locations = () => {

    const { t } = useTranslation("global");

    return (
        <section className='section-'>
            <div className='container mt-5 mb-5'>
                <Row>
                    <Col md={12} className=''>
                        <h3 className='title-about-'>{t('locations.title')}</h3>
                    </Col>
                    <Col md={12} className='mt-4'>
                        <Tabs forceRenderTabPanel defaultIndex={1}>
                            <TabList>
                                <Tab>Buenos Aires</Tab>
                                <Tab>CABA</Tab>
                                <Tab>Santa Fe</Tab>
                                <Tab>Chaco</Tab>
                                <Tab>Neuqen</Tab>
                                <Tab>La Pampa</Tab>
                                <Tab>Mendoza</Tab>
                                <Tab>Chubut</Tab>
                            </TabList>
                            <TabPanel>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab>Lugano</Tab>
                                        <Tab>La Plata</Tab>
                                        <Tab>Longchamps</Tab>
                                        <Tab>Mar del Plata</Tab>
                                        <Tab>Bahía Blanca</Tab>
                                        <Tab>Tandil</Tab>
                                        <Tab>Punta Alta</Tab>
                                        <Tab>Lanús</Tab>
                                        <Tab>Campana</Tab>
                                        <Tab>Gonzalez Catan</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <AddressLocation direccion="Rivadvia 890" nombre="Carlos Rodriguez" email="crodriguez@pcmb.com" telefono="+54925665458" img={img} />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation direccion="Calle Libertad 456" nombre="Juan López" email="juan.lopez@example.com" telefono="+54998765432" img={img} />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation direccion="Carrera 789" nombre="María González" email="maria.gonzalez@example.com" telefono="+54955555555" img={img} />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation direccion="Calle 25 de Mayo 987" nombre="Luis Rodríguez" email="luis.rodriguez@example.com" telefono="+54933333333" img={img} />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation direccion="Avenida Rivadavia 4567" nombre="Elena García" email="elena.garcia@example.com" telefono="+54977777777" img={img} />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation direccion="Calle San Martín 543" nombre="Carlos Fernández" email="carlos.fernandez@example.com" telefono="+54988888888" img={img} />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation direccion="Avenida Belgrano 789" nombre="Laura Pérez" email="laura.perez@example.com" telefono="+54966666666" img={img} />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation direccion="Calle Corrientes 1234" nombre="Javier Ramírez" email="javier.ramirez@example.com" telefono="+54922222222" img={img} />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation direccion="Avenida Pueyrredón 567" nombre="Marta Silva" email="marta.silva@example.com" telefono="+54911111111" img={img} />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation direccion="Calle Florida 890" nombre="Andrés Martín" email="andres.martin@example.com" telefono="+54999999999" img={img} />
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab>Caballito</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <AddressLocation direccion="Avenida Santa Fe 4321" nombre="Carolina López" email="carolina.lopez@example.com" telefono="+54944444444" img={img} />
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab>Rosario</Tab>
                                        <Tab>Venado Tuerto</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <AddressLocation direccion="Calle Lavalle 654" nombre="Diego González" email="diego.gonzalez@example.com" telefono="+54977777777" img={img} />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation direccion="Avenida Callao 987" nombre="Florencia Fernández" email="florencia.fernandez@example.com" telefono="+54988888888" img={img} />
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab>Resistencia</Tab>
                                        <Tab>Saenz Peña</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <AddressLocation direccion="Calle Reconquista 321" nombre="Gustavo Pérez" email="gustavo.perez@example.com" telefono="+54966666666" img={img} />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation direccion="Avenida Córdoba 765" nombre="Inés Ramírez" email="ines.ramirez@example.com" telefono="+54922222222" img={img} />
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab>Neuqen</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <AddressLocation direccion="Calle Sarmiento 234" nombre="Jorge Silva" email="jorge.silva@example.com" telefono="+54911111111" img={img} />
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab>La Pampa</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <AddressLocation direccion="Avenida 9 de Julio 543" nombre="Karina Martínez" email="karina.martinez@example.com" telefono="+54999999999" img={img} />
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab>Mendoza</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <AddressLocation direccion="Calle Esmeralda 876" nombre="Lorenzo López" email="lorenzo.lopez@example.com" telefono="+54944444444" img={img} />
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab>Comodoro Rivadavia</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <AddressLocation direccion="Avenida Juan B. Justo 123" nombre="Marina González" email="marina.gonzalez@example.com" telefono="+54977777777" img={img} />
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Locations 