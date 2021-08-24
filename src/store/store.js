import { createStore, combineReducers } from 'redux';
import pageStore from './page.store';

export default createStore(
    combineReducers({
        page: pageStore,
    }))