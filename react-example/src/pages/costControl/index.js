import React, { Component } from 'react';
import ReHeader from '../../components/re-header';
import { Layout } from 'antd';
// import './css/costControl.css';

class CostControl extends Component {
  
  render() {
		console.log('index: ', this.props)
    
    const { Content } = Layout;
    return (
      <Layout className="appLayoutBg">
        <ReHeader className="header" isBack title="费控审批" />
        <Content>
				  this is <span className="test">costControl</span>
        </Content>
      </Layout>
    );
  }
}

export default CostControl;
