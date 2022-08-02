const SET_ALL_NEWS = 'SET_ALL_NEWS';

const defaultState = {
    allNews: []
};

export default function appReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ALL_NEWS:
            return {...state, allNews: action.payload};
        default:
            return state
    }
}

export const setAllNews = (news) => ({type: SET_ALL_NEWS, payload: news});
