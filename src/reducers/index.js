import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
    news: newsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
