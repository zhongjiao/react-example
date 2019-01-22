import React, { Component } from 'react';
import ReHeader from '../../components/re-header';
import { Layout } from 'antd';
import './css/cal.scss';
import { addLight, removeLight } from '../../components/re-move-light';
import '../../assets/style/light.css';
import Theme from './components/theme'
import Day from './components/day'

class Cal extends Component {
	componentDidMount() {
		//themes
		const themes = document.querySelectorAll('.themes li')
		for (let i = 0; i < themes.length; ++i) {
			themes[i].addEventListener('click', e => {
				let cal = document.getElementById('cal');
				cal.classList = cal.classList.value.replace(/theme-(\d|[a-z]+)?/, e.target.classList.value)
			})
		}
	}
	render() {

		const { Content } = Layout;

		return (
			<Layout className="appLayoutBg">
				<ReHeader className="header" isBack title="日历特效" />
				<Content className="pst-r theme-default" id="cal">
					<div className='themes'>
						<ul>
							{ <Theme len={ 6 } /> }
						</ul>
					</div>
					<div className='grid-container pst-r' onMouseMove={(e) => {
						addLight(e, {currentTarget: e.currentTarget});
					}} onMouseLeave={(e) => {
						removeLight(e.currentTarget);
					}}>
						<div className='mask top'></div>
						<div className='mask left'></div>
						<div className='content'>
							<div className='cal'>
								{ <Day len={ 32 } /> }
								<div className='day foo'>1</div>
								<div className='day foo'>2</div>
								<div className='day foo'>3</div>
								<div className='day foo'>4</div>
							</div>
						</div>
						<div className='mask right'></div>
						<div className='mask bottom'></div>
					</div>
				</Content>
			</Layout>
		);
	}
}

export default Cal;