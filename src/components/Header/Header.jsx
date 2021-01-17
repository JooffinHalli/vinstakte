import c from './Header.module.css';
import 'antd/dist/antd.css';
import React from 'react';
import {Row, Col, Avatar} from 'antd';
import {connect} from 'react-redux';
import {getMe} from '../../redux/profileReducer';
import {NavLink} from 'react-router-dom';

const Header = props => {

	return (
		 <Col span={24} className={c.header}>
		 	<Row align='bottom'>
		 		<Col span={4} offset={4} className={c.logo}>Vinstakte</Col>
		 		<Col span={1} offset={13} >
		 			<NavLink to={`/${props.myId}`}>
		 				<Avatar src={props.myAva} size={30} />
		 			</NavLink>
		 		</Col>
		 	</Row>
		 </Col>
	)
}

const mapStateToProps = state => {
	return {
		myAva: state.profilePage.me.photo_200,
		myId: state.profilePage.me.id
	}
}

export default connect(mapStateToProps, {getMe})(Header);