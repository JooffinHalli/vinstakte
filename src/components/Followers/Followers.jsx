import c from './Followers.module.css';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getFriends} from '../../redux/friendsReducer';
import {Row, Col, Avatar} from 'antd';
import 'antd/dist/antd.css';
import {NavLink, withRouter} from 'react-router-dom';
import {LoadingOutlined} from '@ant-design/icons';

const Follower = React.memo(props => {
	return (
		<Col span={8} className={c.photosNavCol}>
			<NavLink to={'/' + props.id}>
				{props.isFetching
				? <LoadingOutlined spin={true} />
				: <Avatar src={props.photo} size={100} />
				}
			</NavLink>
			<div>{props.fName} {props.lName}</div>
		</Col>
	)
})

const Followers = React.memo(props => {

	console.log('followers')

	const followers = props.followers.map(f => <Follower key={f.id}
												   		 fName={f.first_name}
												   		 lName={f.last_name}
												   		 photo={f.photo_100}
												   		 id={f.id} />)

	return (
		<Row>
			{followers}
		</Row>
	);
})

const mapStateToProps = state => {
	return {
		followers: state.friendsPage.followers,
		isFetching: state.profilePage.isFetching,
	}
}

export default connect(mapStateToProps)(withRouter(Followers));