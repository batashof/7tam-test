import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import {reducer as data} from './reducers';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};
const rootReducer = combineReducers({
    data
});


export default function configureStore() {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    return createStore(persistedReducer, applyMiddleware(thunk));
}
