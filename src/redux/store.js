import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import friendsReducer from './friendsReducer';
import profileReducer from './profileReducer';

let reducers = combineReducers({
	profilePage: profileReducer,
	friendsPage: friendsReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window._store_ = store;

export default store;