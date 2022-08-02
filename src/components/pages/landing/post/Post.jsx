import { useNavigate } from 'react-router-dom';

import classes from './Post.module.css';

const Post = ({post}) => {
    const navigate = useNavigate();

    const clickToCard = () => {
        navigate(`/news/${post.id}`);
    }

    return(
        <div className={classes.Post} onClick={() => clickToCard()}>
            <img className={classes.Image} 
                 src={post.image} 
                 alt={post.id} />
            <div className={classes.Header}>
                {post.header}
            </div>
            <div className={classes.Litera}>
                {post.litera}
            </div>
        </div>
    );
};

export default Post;