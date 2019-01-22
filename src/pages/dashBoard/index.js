import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Icon, Row, Col } from 'antd';
import './css/dashboard.css';
import { Link } from 'react-router-dom';
import ReHeader from '../../components/re-header';

const random = () => Math.random().toString(32).substring(3, 8)

class ListDashboard extends Component {
  state = {
    dashboards: [
      { id: random(), label: '费控', value: 'costControl/2' },
      { id: random(), label: '智能运维', value: 'operation' },
      { id: random(), label: '灯光背景', value: 'light' },
      { id: random(), label: '日历特效', value: 'cal' },
      { id: random(), label: '计数', value: 'counter' },
      { id: random(), label: 'Todo', value: 'todo' },
      { id: random(), label: '小不点', value: 'cost' }
    ]
  }
	render() {
		const dashboards = this.state.dashboards;
		const col = dashboards.map(l => (
			<Col span={8} key={ l.id }>
				<Link className="linkColor align-center" to={l.value}>{l.label}</Link>
			</Col>
		))
		const { Content } = Layout
		const menu = (
			<Menu>
				<Menu.Item key="1">1st menu item</Menu.Item>
				<Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
				<Menu.Item key="3">3rd item</Menu.Item>
			</Menu>
		)
		console.log('index: ', this.props)
		return (
			<Layout className="appLayoutBg">
				<ReHeader className="header" title="列表页">
					<Dropdown overlay={menu} trigger={['click']}>
						<Icon type="ellipsis" className="fw fs12" />
					</Dropdown>
				</ReHeader>
				<Content>
					<Row type="flex" align="middle" className="dashboard">
						{ col }
					</Row>
				</Content>
			</Layout>
		);
	}
}

export default ListDashboard