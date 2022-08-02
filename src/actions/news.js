import axios from 'axios';
import { setAllNews } from '../reducers/newsReducer';
import { API_URL } from '../core/config';

export const getAllNews = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}news/?city=1&group_id=1731&with_image=1&fields=id,url,header,litera,image,dt_publish`);
            dispatch(setAllNews(response.data.items));
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    };
};