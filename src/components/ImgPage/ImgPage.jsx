import c from './ImgPage.module.css';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Avatar} from 'antd';
import 'antd/dist/antd.css';
import {getPhoto} from '../../redux/photoReducer';
import {withRouter} from 'react-router-dom';
import {LoadingOutlined} from '@ant-design/icons';



const ImgPage = React.memo(props => {

	let size = Object.values({...props.photo.sizes})[8]

	let url = Object.values({...size})[1]

	let userId = (props.match.params.userId || '51108958');
	let photoId = (props.match.params.photoId || '');

	useEffect(() => {
		props.getPhoto(userId, photoId)
	}, [photoId])

	return (
		<React.Fragment>
			{props.isFetching
			? <LoadingOutlined spin={true} />
			: <Avatar src={url} size={400} shape='square' />
			}
		</React.Fragment>
	)
})

const mapStateToProps = state => {
	return {
		photo: state.photoPage.photo,
		userId: state.profilePage.currentUserId,
		isFetching: state.profilePage.isFetching,
	}
}

export default connect(mapStateToProps, {getPhoto})(withRouter(ImgPage));
