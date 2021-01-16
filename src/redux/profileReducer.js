import {profileApi} from '../api/api';

const SET_PHOTOS = 'SET-PHOTOS';
const SET_AVA = 'SET-AVA';

const initialState = {
	photos: [],
	user: {},
	currentUserId: null,
}

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_PHOTOS:
			return {...state, photos: action.photos};
		case SET_AVA:
			return {...state, user: action.user, currentUserId: action.user.id};
		default:
			return state;
	}
}

const setPhotos = (photos) => ({type: SET_PHOTOS, photos});
const setMyAvatar = (user) => ({type: SET_AVA, user});

export const getPhotos = (userId) => (dispatch) => {
	let result = profileApi.getPhotos(userId)
	result.then(res => dispatch(setPhotos(res.response.items)))
}

export const getUser = (userId) => (dispatch) => {
	let result = profileApi.getUser(userId)
	result.then(res => dispatch(setMyAvatar(res.response[0])))
}

export default profileReducer;