import c from '../Profile.module.css';
import {Col, Avatar} from 'antd';
import {HeartFilled, MessageFilled} from '@ant-design/icons';
import 'antd/dist/antd.css';

const Photo = props => {

	return (
		<Col order={props.order}
			 span={7}
			 className={c.photo}>
			<Avatar shape='square' size={300} src={props.src} alt='' />
		</Col>
	)
}

export default Photo;