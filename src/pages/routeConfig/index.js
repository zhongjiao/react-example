import React, { Component } from 'react'
import ReHeader from '../../components/re-header'
import { Layout } from 'antd'
import routes from './routes'
import MainList from './components/mainList'
import MainHeadList from './components/mainHeadList'

class CostControl extends Component {
  
  render() {
    const { Content } = Layout;
    return (
      <Layout className="appLayoutBg">
        <ReHeader className="header" isBack title="路由配置" />
        <Content>
				  <ul>
            <MainHeadList routes={routes} />
          </ul>
          <MainList routes={routes} />
        </Content>
      </Layout>
    );
  }
}

export default CostControl;
