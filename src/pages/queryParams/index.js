import React, { Component } from 'react';
import ReHeader from '../../components/re-header';
import { Layout } from 'antd';
import { Link } from "react-router-dom";

class QueryParams extends Component {
	
	render() {

		const { Content } = Layout
		const { location } = this.props
		let params = new URLSearchParams(location.search)

		function Child({ name }) {
			return <p>This name is {name}</p>
		}

		return (
			<Layout className="appLayoutBg">
				<ReHeader className="header" isBack title="查询参数" />
				<Content className="pst-r">
					<ul>
						<li>
							<Link to={{ pathname: '/query-params', search: '?name=netflix' }}>Netflix</Link>
						</li>
						<li>
							<Link to={{ pathname: '/query-params', search: '?name=zillow-group' }}>Zillow Group</Link>
						</li>
						<li>
							<Link to={{ pathname: '/query-params', search: '?name=yahoo' }}>Yahoo</Link>
						</li>
					</ul>
					<Child name={params.get('name')}></Child>
				</Content>
			</Layout>
		);
	}
}

export default QueryParams;