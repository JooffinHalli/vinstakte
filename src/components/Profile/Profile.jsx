import c from './Profile.module.css';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import Photo from './Photos/Photo';
import {getPhotos, getUser} from '../../redux/profileReducer';
import {getFriends} from '../../redux/friendsReducer';

const Profile = React.memo(props => {

	console.log('profile')


	let {friends, followers, photos} = {...props.user.counters};

	return (
		<React.Fragment>
			<Row>
				{props.photos.map(photo => <Photo key={photo.id}
									   		  	  id={photo.id}
									   		  	  src={photo.sizes[4].url || photo.sizes[3].url || photo.sizes[2].url || photo.sizes[1].url || photo.sizes[0].url}
									   		  	  order={props.photos.indexOf(photo) + 1}
								   	   		  	  likes={photo.likes.count}
								   	   		  	  currentUserId={props.user.id}
								   	   		  	  isFetching={props.isFetching} /> )}
			</Row>
		</React.Fragment>
	)
})

const mapStateToProps = state => {
	return {
		photos: state.profilePage.photos,
		user: {...state.profilePage.user},
		friends: state.friendsPage.friends,
		isFetching: state.profilePage.isFetching,
	}
}

export default connect(mapStateToProps, {getPhotos, getUser, getFriends})(Profile);
