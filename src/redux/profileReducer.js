import {profileApi} from '../api/api';

const SET_PHOTOS = 'SET-PHOTOS';
const SET_USER = 'SET-USER';
const SET_ME = 'SET-ME';

const initialState = {
	photos: [],
	user: {},
	currentUserId: null,
	me: {}
}

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_PHOTOS:
			return {...state, photos: action.photos};
		case SET_USER:
			return {...state, user: action.user, currentUserId: action.user.id};
		case SET_ME:
			return {...state, me: action.me};
		default:
			return state;
	}
}

const setPhotos = (photos) => ({type: SET_PHOTOS, photos});
const setUser = (user) => ({type: SET_USER, user});
const setMe = (me) => ({type: SET_ME, me});

export const getPhotos = (userId) => (dispatch) => {
	let result = profileApi.getPhotos(userId)
	result.then(res => dispatch(setPhotos(res.response.items)))
}

export const getUser = (userId) => (dispatch) => {
	let result = profileApi.getUser(userId)
	result.then(res => dispatch(setUser(res.response[0])))
}
export const getMe = () => (dispatch) => {
	let result = profileApi.getMe()
	result.then(res => dispatch(setMe(res.response[0])))
}

export default profileReducer;