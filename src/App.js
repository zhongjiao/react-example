import React from 'react';
import './assets/style/App.css';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import RouteConfig from './pages/routeConfig';
import ModalGallery from './pages/modalGallery';
import DashBoard from './pages/dashBoard';
import Light from './pages/light';
import Cal from './pages/cal';
import Counter from './pages/counter';
import Todo from './pages/todo';
import QueryParams from './pages/queryParams';

const App = ({store}) => {
  return (
    <div className="App toFlex">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/route-config" component={RouteConfig} />
            <Route path="/modal-gallery" component={ModalGallery} />
            <Route path="/light" component={Light} />
            <Route path="/cal" component={Cal} />
            <Route path="/counter" component={Counter} />
            <Route path="/todo" component={Todo} />
            <Route path="/query-params" component={QueryParams} />
            <Route path="/" component={DashBoard} />
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

// App.propTypes = {
//   store: PropTypes.object.isRequired
// }

export default App;
