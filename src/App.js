import React from 'react';
import './assets/style/App.css';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import CostControl from './pages/costControl';
import Operation from './pages/operation';
import DashBoard from './pages/dashBoard';
import Light from './pages/light';
import Cal from './pages/cal';
import Counter from './pages/counter';
import Todo from './pages/todo';

const App = ({store}) => {
  return (
    <div className="App toFlex">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/route-config" component={CostControl} />
            <Route path="/operation" component={Operation} />
            <Route path="/light" component={Light} />
            <Route path="/cal" component={Cal} />
            <Route path="/counter" component={Counter} />
            <Route path="/todo" component={Todo} />
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
