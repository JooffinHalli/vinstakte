import {photoApi} from '../api/api';

const SET_PHOTO = 'SET-PHOTO';

const initialState = {
	photo: {},
}

const photoReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_PHOTO:
			return {...state, photo: action.photo};
		default:
			return state;
	}
}

const setPhoto = (photo) => ({type: SET_PHOTO, photo: {...photo}});

export const getPhoto = (userId, photoId) => (dispatch) => {
	let result = photoApi.getPhoto(userId, photoId)
	result.then(res => dispatch(setPhoto(res.response[0])))
}

export default photoReducer;