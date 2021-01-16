import c from './Friends.module.css';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getFriends} from '../../redux/friendsReducer';
import {Row, Col, Avatar} from 'antd';
import 'antd/dist/antd.css';
import {NavLink, withRouter} from 'react-router-dom';

const Friend = React.memo(props => {
	return (
		<Col span={3} className={c.PhotosNavCol}>
			<NavLink to={'/' + props.id}>
				<Avatar src={props.photo} size={100} />
			</NavLink>
		</Col>
	)
})

const Friends = React.memo(props => {

	console.log('friends')

	const friends = props.friends.map(f => <Friend key={f.id}
												   fName={f.first_name}
												   lName={f.last_name}
												   city={f.city ? f.city.title : null}
												   country={f.country ? f.country.title : null}
												   photo={f.photo_100}
												   id={f.id} />)

	return (
		<Row>
			{friends}
		</Row>
	);
})

const mapStateToProps = state => {
	return {
		friends: state.friendsPage.friends,
		id: state.profilePage.user.id
	}
}

export default connect(mapStateToProps, {getFriends})(withRouter(Friends));