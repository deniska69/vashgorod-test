import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllNews, setCurrentPageNumber, setPageCountTotal } from '../../../reducers/newsReducer';
import { API_URL } from '../../../core/config';
import axios from 'axios';

import classes from './Landing.module.css';
import Post from './post/Post';

const Landing = () => {
    const dispatch = useDispatch();
    const allNews = useSelector(state => state.news.allNews);
    const currentPageNumber = useSelector(state => state.news.currentPageNumber);
    const pageCountTotal = useSelector(state => state.news.pageCountTotal);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        if(isLoading){
            axios.get(`${API_URL}?city=1&group_id=1731&with_image=1&fields=id,url,header,litera,image,dt_publish&page=${currentPageNumber}`)
                .then(response => {
                    dispatch(setAllNews(response.data.items));
                    dispatch(setCurrentPageNumber(currentPageNumber + 1));
                    dispatch(setPageCountTotal(response.data._meta.pageCount));
                })
                .finally(() => setIsLoading(false));
        };

        // eslint-disable-next-line
    },[isLoading]);

    useEffect(()=>{
        document.addEventListener('scroll', scrollHandler);

        return function() {
            document.removeEventListener('scroll', scrollHandler);
        };

        // eslint-disable-next-line
    },[]);

    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && currentPageNumber < pageCountTotal) {
            setIsLoading(true);
        };
    };

    return(
        <div className={classes.Landing}>
            {allNews && 
                allNews.map((post, index) => (
                    <Post key={index} post={post} />
                ))
            }
        </div>
    );
};

export default Landing;