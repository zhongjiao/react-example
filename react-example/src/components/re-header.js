import React from 'react';
import { Layout, Row, Col, Icon } from 'antd';
import { Link } from 'react-router-dom';

const ReHeader = (prop) => {
	const { Header } = Layout;
	const hClass = prop.className ? 'align-center ' + prop.className : 'align-center';
	const Back = prop.isBack ? (
		<Col className="align-left pdl6" span={8}>
			<Link className="clw" to={prop.path ? prop.path : '/'}>
			<Icon type="left"/> 返回</Link>
		</Col>
	) : <Col span={8} />;

	return (
		<Header className={hClass} style={{'padding': '0'}}>
			<Row type="flex" justify="space-around" align="middle">
				{ Back }
				<Col span={8}>{prop.title}</Col>
				<Col span={8} className="toFlex com-right pdr6">{prop.children ? prop.children : ''}</Col>
			</Row>
		</Header>
	);
}

export default ReHeader;