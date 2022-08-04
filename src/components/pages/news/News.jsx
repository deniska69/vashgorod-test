import { useEffect, useState } from 'react';
import { API_URL } from '../../../core/config';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const News = () => {
    const { id } = useParams();
    const [header, setHeader] = useState('');
    const [text, setText] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    const clickToButton = () => {
        navigate(`/`);
    };

    useEffect(()=>{
        axios.get(`${API_URL}${id}`, 
            { headers: { 'Content-Type': 'application/json' } }, 
            { crossDomain: true }, 
            { withCredentials: true })
            .then(response => {
                setHeader(response.data.header);
                setText(response.data.body);
                setDate(new Date(response.data.dt_publish).toLocaleString('ru-RU', { timeZone: 'Asia/Novosibirsk' }));
            })

        // eslint-disable-next-line
    },[]);

    return(
        <Container style={{ minHeight: '100vh', maxWidth: '600px', width: '100%', display: 'flex', flexDirection: 'column', rowGap: '1rem', padding: '2vw' }}>
            <Button variant="success" size="sm" onClick={() => clickToButton()}>Вернуться к новостям</Button>
            <Card style={{ padding: '1rem' }}>
                <Row style={{ margin: '0 0 0.7em 0', paddingLeft: 'calc(var(--bs-gutter-x) * .5)', paddingRight: 'calc(var(--bs-gutter-x) * .5)', fontSize: '1.8em', fontWeight: '500', lineHeight: '1.2', color: '#333' }}>{header}</Row>
                <Row style={{ margin: '0 0 0.7em 0', paddingLeft: 'calc(var(--bs-gutter-x) * .5)', paddingRight: 'calc(var(--bs-gutter-x) * .5)', fontSize: '0.8em', color: '#999' }}>{date}</Row>
                <Row style={{ margin: '0' }} dangerouslySetInnerHTML={{ __html: text }}></Row>
            </Card>
        </Container>
    );
};

export default News;