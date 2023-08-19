import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../styles/section.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
                                <Tab>Santa Fe</Tab>
                                <Tab>Mendoza</Tab>
                                <Tab>San Juan</Tab>
                                <Tab>Río Negro</Tab>
                                <Tab>La Rioja</Tab>
                                <Tab>Stgo. del Estero</Tab>
                            </TabList>
                            <TabPanel>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab>San Miguel</Tab>
                                        <Tab>Mar del Plata</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <AddressLocation telefono="+54 9 11 2757 9390" />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation telefono="+54 9 223 691 1297" />
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab>Rosario</Tab>
                                        <Tab>Gálvez</Tab>
                                        <Tab>V. Constitución</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <AddressLocation telefono="+54 9 341 357 2897" />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation telefono="+54 9 3404 45 9741" />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation telefono="+54 9 3400 41 9089" />
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab>Capital</Tab>
                                        <Tab>Luján de Cuyo</Tab>
                                        <Tab>Palmira</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <AddressLocation telefono="+54 9 261 630 0707" />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation telefono="+54 9 261 614 6257" />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation telefono="+54 9 2634 21 7848" />
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab>Capital</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <AddressLocation telefono="+54 9 264 581 1017" />
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab>Sierra Grande</Tab>
                                        <Tab>Senillosa</Tab>
                                        <Tab>Gral. Roca</Tab>
                                        <Tab>Fernandez Oro</Tab>
                                        <Tab>C. Cordero</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <AddressLocation telefono="+54 9 2984 51 3793" />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation telefono="+54 9 299 507 8562" />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation telefono="+54 9 2984 55 9609" />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation telefono="+54 9 299 570 2283" />
                                    </TabPanel>
                                    <TabPanel>
                                        <AddressLocation telefono="+54 9 299 471 4509" />
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab>Villa Unión</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <AddressLocation telefono="+54 9 3804 50 2027" />
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab>Capital</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <AddressLocation telefono="+54 9 3856 98 6098" />
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