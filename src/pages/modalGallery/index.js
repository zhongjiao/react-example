import React, { Component } from 'react'
import ReHeader from '../../components/re-header'
import { Layout } from 'antd'
import Feature from './components/feature'
import { Switch, Route } from 'react-router-dom'
import ImgPad from './components/imgPad'
import Gallery from './components/gallery'
import Modal from './components/modal'
import './css/index.css'

class ModalGallery extends Component {
  
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    // set previousLocation if props.location is not modal
    if (!location.state || !location.state.modal) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    
    const { Content } = Layout
    let { location } = this.props
    const isModal = location.state && location.state.modal

    return (
      <Layout className="appLayoutBg">
        <ReHeader className="header" isBack title="模态" />
        <Content>
          <Switch location={isModal ? this.previousLocation : location}>
            <Route exact path="/modal-gallery" component={Feature}/>
            <Route path="/modal-gallery/gallery" component={Gallery}/>
            <Route path="/modal-gallery/img/:color" component={ImgPad}/>
          </Switch>
          { isModal ? <Route path="/modal-gallery/img/:color" component={Modal}/> : null }
        </Content>
      </Layout>
    );
  }
}

export default ModalGallery;