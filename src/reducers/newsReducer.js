const SET_ALL_NEWS = 'SET_ALL_NEWS';
const SET_CURRENT_PAGE_NUMBER = 'SET_CURRENT_PAGE_NUMBER';
const SET_PAGE_COUNT_TOTAL = 'SET_PAGE_COUNT_TOTAL';

const defaultState = {
    allNews: [],
    currentPageNumber: 1,
    pageCountTotal: 2,
};

export default function appReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ALL_NEWS:
            return {...state, allNews: state.allNews.concat(action.payload)};
        case SET_CURRENT_PAGE_NUMBER:
            return {...state, currentPageNumber: action.payload};
        case SET_PAGE_COUNT_TOTAL:
            return {...state, pageCountTotal: action.payload};
        default:
            return state
    }
};

export const setAllNews = (allNews) => ({type: SET_ALL_NEWS, payload: allNews});
export const setCurrentPageNumber = (currentPageNumber) => ({type: SET_CURRENT_PAGE_NUMBER, payload: currentPageNumber});
export const setPageCountTotal = (pageCountTotal) => ({type: SET_PAGE_COUNT_TOTAL, payload: pageCountTotal});
