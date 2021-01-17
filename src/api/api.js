import request from 'then-jsonp';

const baseUrl = 'https://api.vk.com/method/';
const user_id = '51108958';
const API_KEY = 'access_token=6e8c81df2fcb98f0727eef305421a5c69d94047e377ab3fafd766316595079578bb2688ef3227f5766db5';
//const method = 'friends.search';
//const params = 'count=60&fields=nickname, screen_name, sex, bdate, city, country, timezone, photo_50, photo_100, photo_200_orig, has_mobile, contacts, education, online, relation, last_seen, status, can_write_private_message, can_see_all_posts, can_post, universities, domain';
const v = 'v=5.126';

const makeRequest = (method, params) => {
	return request('GET', `${baseUrl}${method}?${params}&${API_KEY}&${v}`)
}

export const friendsApi = {
	getFriendsAPI: (userId) => {
		return makeRequest('friends.search', `user_id=${userId}&count=12&fields=nickname, screen_name, sex, bdate, city, country, timezone, photo_50, photo_100, photo_200_orig, has_mobile, contacts, education, online, relation, last_seen, status, can_write_private_message, can_see_all_posts, can_post, universities, domain`)
	},
	getFollowersAPI: (userId) => {
		return makeRequest('users.getFollowers', `user_id=${userId}&count=12&fields=nickname, screen_name, sex, bdate, city, country, timezone, photo_50, photo_100, photo_200_orig, has_mobile, contacts, education, online, relation, last_seen, status, can_write_private_message, can_see_all_posts, can_post, universities, domain`)
	}	
}

export const profileApi = {
	getPhotos: (userId) => {
		return makeRequest('photos.getAll', `count=9&owner_id=${userId}&extended=1&sort=1`)
	},
	getUser: (userId) => {
		return makeRequest('users.get', `user_ids=${userId}&fields=photo_200,counters,domain`)
	},
	getMe: () => {
		return makeRequest('users.get', 'fields=photo_200')
	}
}
export const photoApi = {
	getPhoto: (userId, photoId) => {
		return makeRequest('photos.getById', `photos=${userId}_${photoId}&extended=1&photo_sizes=1`)
	}
}


//https://api.vk.com/method/users.get?user_id=210700286&v=5.52