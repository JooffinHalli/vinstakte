import c from './ProfileInfo.module.css';
import 'antd/dist/antd.css';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Avatar} from 'antd';
import {getPhotos, getUser} from '../../redux/profileReducer';
import {getFriends} from '../../redux/friendsReducer';
import {NavLink, withRouter} from 'react-router-dom';

const ProfileInfo = React.memo(props => {

	console.log('info')


	let userId = (props.match.params.userId || '51108958');

	useEffect(() => {
        props.getUser(userId)
        props.getPhotos(userId)
        props.getFriends(userId);
    }, [userId])

	let {friends, followers, photos} = {...props.user.counters};

	return (
		<Row>
			<Col span={7}>
				<Avatar size={150} src={props.user.photo_200}/>
			</Col>
			<Col span={14} className={c.profileInfo}>
				<Row className={c.domain}><span>{props.user.domain}</span></Row>
				<Row className={c.counts}>
					<NavLink to={'/' + userId} className={c.count}>
						{photos} <span>публикаций</span>
					</NavLink> 
					<NavLink to={'/' + userId + '/followers'} className={c.count}>
						{followers} <span>подписчиков</span>
					</NavLink>
					<NavLink to={'/' + userId + '/friends'} className={c.count}>
						{friends} <span>друзей</span>
					</NavLink>
				</Row>
				<Row className={c.name}>{props.user.first_name } {props.user.last_name}</Row>
			</Col>
		</Row>
	)
})

const mapStateToProps = state => {
	return {
		user: {...state.profilePage.user},
		photos: state.profilePage.photos,
		friends: state.friendsPage.friends,
	}
}

export default connect(mapStateToProps, {getUser, getPhotos, getFriends})(withRouter(ProfileInfo));
