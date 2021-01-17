import {friendsApi} from '../api/api';

const SET_FRIENDS = 'SET-FRIENDS';
const SET_FOLLOWERS = 'SET-FOLLOWERS';

const initialState = {
	friends: [],
	followers: []
}

const friendsReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_FRIENDS:
			return {...state, friends: action.friends};
		case SET_FOLLOWERS:
			return {...state, followers: action.followers};
		default:
			return state;
	}
}

const setFriends = (friends) => ({type: SET_FRIENDS, friends});
const setFollowers = (followers) => ({type: SET_FOLLOWERS, followers});

export const getFriends = (userId) => (dispatch) => {
	let result = friendsApi.getFriendsAPI(userId)
	result.then(res => dispatch(setFriends(res.response.items)))
}
export const getFollowers = (userId) => (dispatch) => {
	let result = friendsApi.getFollowersAPI(userId)
	result.then(res => dispatch(setFollowers(res.response.items)))
}

export default friendsReducer;