import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../cardVideo/cardVideo.scss';
import ModalVideo from 'react-modal-video'

const CardVideo = ({ title, text, imgurl, url }) => {

    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true)
    }

    return (
        <>
            <Card style={{ width: '20rem' }} onClick={handleClick} className='mb-3'>
                <Card.Img variant="top" src={imgurl} />
                <Card.Body>
                    <Card.Title className='subtitle-news'>{title}</Card.Title>
                    <Card.Text className='card-text'>{text}</Card.Text>
                    <Button className='button' onClick={() => setOpen(true)}>Ver en YouTube</Button>
                </Card.Body>
            </Card>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={url} onClose={() => setOpen(false)} />
        </>
    )
}

export default CardVideo