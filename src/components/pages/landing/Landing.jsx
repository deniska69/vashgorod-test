import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllNews } from '../../../actions/news';

import classes from './Landing.module.css';

const Landing = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllNews());
        // eslint-disable-next-line
    },[]);

    return(
        <div className={classes.Landing}>
            Лэндинг
        </div>
    );
};

export default Landing;