import React from 'react';
import 'react-tabs/style/react-tabs.css';
import { Col, Row } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useTranslation } from 'react-i18next';

const TabsComponent = () => {

    const { t } = useTranslation("global");

    return (
        <Tabs>
            <TabList>
                <Tab>Eje Bíblico</Tab>
                <Tab>Eje misionológico</Tab>
                <Tab>Eje práctico</Tab>
            </TabList>

            <TabPanel>
                <Row className='mt-5 mb-5'>
                    <Col md={6}>
                        <span>• {t('tabs.sub11')}</span><br />
                        <span>• {t('tabs.sub12')}</span><br />
                        <span>• {t('tabs.sub13')}</span><br />
                    </Col>
                    <Col md={6}>
                        <span>• {t('tabs.sub14')}</span><br />
                        <span>• {t('tabs.sub15')}</span><br />
                        <span>• {t('tabs.sub16')}</span><br />
                    </Col>
                </Row>
            </TabPanel>
            <TabPanel>
                <Row className='mt-5 mb-5'>
                    <Col md={6}>
                        <span>• {t('tabs.sub21')}</span><br />
                        <span>• {t('tabs.sub22')}</span><br />
                        <span>• {t('tabs.sub23')}</span><br />
                        <span>• {t('tabs.sub24')}</span><br />
                        <span>• {t('tabs.sub25')}</span><br />
                        <span>• {t('tabs.sub26')}</span><br />
                        <span>• {t('tabs.sub27')}</span><br />
                        <span>• {t('tabs.sub28')}</span><br />
                        <span>• {t('tabs.sub29')}</span><br />
                        <span>• {t('tabs.sub210')}</span><br />
                        <span>• {t('tabs.sub211')}</span><br />
                        <span>• {t('tabs.sub212')}</span><br />
                    </Col>
                    <Col md={6}>
                        <span>• {t('tabs.sub213')}</span><br />
                        <span>• {t('tabs.sub214')}</span><br />
                        <span>• {t('tabs.sub215')}</span><br />
                        <span>• {t('tabs.sub216')}</span><br />
                        <span>• {t('tabs.sub217')}</span><br />
                        <span>• {t('tabs.sub218')}</span><br />
                        <span>• {t('tabs.sub219')}</span><br />
                        <span>• {t('tabs.sub220')}</span><br />
                        <span>• {t('tabs.sub221')}</span><br />
                        <span>• {t('tabs.sub222')}</span><br />
                        <span>• {t('tabs.sub223')}</span><br />
                        <span>• {t('tabs.sub224')}</span><br />
                    </Col>
                </Row>
            </TabPanel>
            <TabPanel>
                <Row className='mt-5 mb-5'>
                    <Col md={6}>
                        <span>• {t('tabs.sub31')}</span><br />
                        <span>• {t('tabs.sub32')}</span><br />
                        <span>• {t('tabs.sub33')}</span><br />
                        <span>• {t('tabs.sub34')}</span><br />
                        <span>• {t('tabs.sub35')}</span><br />
                        <span>• {t('tabs.sub36')}</span><br />
                        <span>• {t('tabs.sub37')}</span><br />
                        <span>• {t('tabs.sub38')}</span><br />
                        <span>• {t('tabs.sub39')}</span><br />
                    </Col>
                    <Col md={6}>
                        <span>• {t('tabs.sub310')}</span><br />
                        <span>• {t('tabs.sub311')}</span><br />
                        <span>• {t('tabs.sub312')}</span><br />
                        <span>• {t('tabs.sub313')}</span><br />
                        <span>• {t('tabs.sub314')}</span><br />
                        <span>• {t('tabs.sub315')}</span><br />
                        <span>• {t('tabs.sub316')}</span><br />
                        <span>• {t('tabs.sub317')}</span><br />
                        <span>• {t('tabs.sub318')}</span><br />
                    </Col>
                </Row>
            </TabPanel>
        </Tabs>
    )
}

export default TabsComponent