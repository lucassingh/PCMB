import React from 'react';
import {  Col, Row } from 'react-bootstrap';
import '../styles/section.scss';
import CardVideo from '../components/cardVideo/CardVideo';
import {dataVideo} from '../assets/data'

const News = () => {

    return (
        <section className='section- pt-3 mb-5'>
            <div className='container pb-5 pt-5'>
                <Row className='mt-5'>
                    <h2 className='title-about- pb-2'>Noticias</h2>
                </Row>
                <Row>
                    
                    {
                        dataVideo.map((item) => (
                            <Col key={item.id} md={4} xs={12} className='mb-3'>
                                <CardVideo title={item.title} text={item.text} imgurl={item.imgurl} url={item.url} />
                            </Col>
                        ))
                    }
                    
                </Row>
            </div>
        </section>
    )
}

export default News