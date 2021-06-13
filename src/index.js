import React from 'react';
import ReactDOM from 'react-dom';
import Shorttolongurl from './shorttolongurl';
import Longtoshorturl from './longtoshorturl';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/Shorttolongurl" component={Shorttolongurl} />
          <Route exact path="/Longtoshorturl" component={Longtoshorturl} />
          <Route exact path="/" component={Home} />
        </Switch>
    </Router>
  );
}

ReactDOM.render(
 <App />,
 document.getElementById('root')
);

