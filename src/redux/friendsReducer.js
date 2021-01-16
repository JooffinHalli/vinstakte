import {friendsApi} from '../api/api';

const SET_FRIENDS = 'SET-FRIENDS';

const initialState = {
	friends: []
}

const friendsReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_FRIENDS:
			return {...state, friends: action.friends};
		default:
			return state;
	}
}

const setFriends = (friends) => ({type: SET_FRIENDS, friends});

export const getFriends = (userId) => (dispatch) => {
	let result = friendsApi.getFriendsAPI(userId)
	result.then(res => dispatch(setFriends(res.response.items)))
}

export default friendsReducer;