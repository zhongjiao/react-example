import React, { Component } from 'react';
import ReHeader from '../../components/re-header';
import { Layout } from 'antd';
import { addLight, removeLight } from '../../components/re-move-light';
import '../../assets/style/light.css';

class Light extends Component {
	
	render() {

		const { Content } = Layout;

		return (
			<Layout className="appLayoutBg">
				<ReHeader className="header" isBack title="灯光背景" />
				<Content className="pst-r">
					<div className="pst-a background w-h-100" onMouseMove={(e) => {
						addLight(e, {currentTarget: e.currentTarget});
					}} onMouseLeave={(e) => {
						removeLight(e.currentTarget);
					}}></div>
				</Content>
			</Layout>
		);
	}
}

export default Light;