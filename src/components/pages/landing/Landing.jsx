import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../../../actions/news';

import classes from './Landing.module.css';
import Post from './post/Post';

const Landing = () => {
    const dispatch = useDispatch();
    const listNews = useSelector(state => state.news.allNews); 

    useEffect(()=>{
        dispatch(getAllNews());
        // eslint-disable-next-line
    },[]);

    return(
        <div className={classes.Landing}>
            {listNews.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    );
};

export default Landing;