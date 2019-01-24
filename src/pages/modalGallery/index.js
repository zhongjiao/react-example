import React, { Component } from 'react';
import ReHeader from '../../components/re-header';
import { Layout } from 'antd';

class Operation extends Component {
  
  render() {
    
    const { Content } = Layout

    return (
      <Layout className="appLayoutBg">
        <ReHeader className="header" isBack title="模态" />
        <Content>
				  this is <span className="test">Operation</span>
        </Content>
      </Layout>
    );
  }
}

export default Operation;