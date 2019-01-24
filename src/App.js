import React from 'react';
import './assets/style/App.css';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import CostControl from './pages/costControl';
import ModalGallery from "./pages/modalGallery";
import DashBoard from './pages/dashBoard';
import Light from './pages/light';
import Cal from './pages/cal';
import Counter from './pages/counter';
import Todo from './pages/todo';

const App = ({store}) => {
  // const Child = ({ match }) => {
  //   console.log('index: ', match)

  //   return <DashBoard />
  // }
  return <div className="App toFlex">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/costControl" component={CostControl} />
            <Route path="/modal-gally" component={ModalGallery} />
            <Route path="/light" component={Light} />
            <Route path="/cal" component={Cal} />
            <Route path="/counter" component={Counter} />
            <Route path="/todo" component={Todo} />
            <Route path="/" component={DashBoard} />
          </Switch>
        </Router>
      </Provider>
    </div>;
}

// App.propTypes = {
//   store: PropTypes.object.isRequired
// }

export default App;
