import { useNavigate } from 'react-router-dom';

import classes from './Post.module.css';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const Post = ({post}) => {
    const navigate = useNavigate();

    const clickToCard = (id) => {
        navigate(`/news/${id}`);
    };

    return(
        <Card className={classes.Card} style={{ padding: '1rem', cursor: 'pointer' }} onClick={() => clickToCard(post.id)}>
            <Row style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                <Col xs={3} sm={2} md={3} style={{ padding: '0' }}>
                    <Image src={post.image} style={{ maxWidth: '100%', maxHeight: '120px', overflow: 'hidden' }} rounded />
                </Col>
                <Col xs={8} sm={9} md={8} style={{ padding: '0', marginLeft: '0.7em' }}>
                    <Row style={{ margin: '0 0 0.7em 0', fontSize: '1.3em', color: '#333', lineHeight: '1.2', fontWeight: '500' }}>{post.header}</Row>
                    <Row style={{ margin: '0 0 0.7em 0', fontSize: '1rem', color: '#333', lineHeight: '1.2' }}>{post.litera}</Row>
                    <Row style={{ margin: '0', fontSize: '0.8em', color: '#999' }}>{post.dt_publish}</Row>
                </Col>
            </Row>
        </Card>
    );
};

export default Post;