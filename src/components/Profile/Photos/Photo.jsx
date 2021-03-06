import c from '../Profile.module.css';
import {Col, Avatar} from 'antd';
import {HeartFilled, MessageFilled} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {NavLink} from 'react-router-dom';
import {LoadingOutlined} from '@ant-design/icons';

const Photo = props => {
	return (
		<Col order={props.order}
			 span={7}
			 className={c.photo}>
			<NavLink to={`/${props.currentUserId}/photo/${props.id}`}>
				{props.isFetching
				? <LoadingOutlined spin={true} />
				: <Avatar shape='square' size={300} src={props.src} alt='' />
				}
			</NavLink>
		</Col>
	)
}

export default Photo;