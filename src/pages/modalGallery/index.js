import React, { Component } from 'react';
import ReHeader from '../../components/re-header';
import { Layout } from 'antd';
import Feature from './components/feature'

class ModalGallery extends Component {
  
  render() {
    
    const { Content } = Layout

    return (
      <Layout className="appLayoutBg">
        <ReHeader className="header" isBack title="模态" />
        <Content>

        </Content>
      </Layout>
    );
  }
}

export default ModalGallery;