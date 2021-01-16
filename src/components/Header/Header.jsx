import c from './Header.module.css';
import 'antd/dist/antd.css';
import React from 'react';
import {Row, Col, Avatar} from 'antd';

const Header = props => {

	return (
		 <Col span={24} className={c.header}>
		 	<Row>
		 		<Col span={4} offset={4} className={c.logo}>Vinstakte</Col>
		 	</Row>
		 </Col>
	)
}

export default Header;