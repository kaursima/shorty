import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shorttolongurl from './shorttolongurl';
import Longtoshorturl from './longtoshorturl';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';

/*
class Welcome extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {longUrl : "", res : "", short : "" , convert : () => {
      fetch('/urls', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"longUrl": this.state.longUrl})
    })
  .then(response => response.json())
  .then(data => {
    const result = data.shortUrl;
      this.setState({short: result});
  });
    }};
  }

  handleChangeInput = (event) => {
    this.setState({longUrl: event.target.value});
  }
  handleChangeOutput = (event) => {
    this.setState({short: event.target.value});
  }

  render() {
    return <div> 
      <h1>Shorty URL!</h1>
      <input type = "text" value = {this.state.longUrl} onChange={this.handleChangeInput}></input><br></br><br></br>
      <button onClick={this.state.convert}>
          Convert
       </button> <br></br><br></br>
       <input type = "text" value = {this.state.short} onChange={this.handleChangeOutput}></input>
      </div>;
  }
}

ReactDOM.render(
  <Welcome />,
 document.getElementById('root')
);

*/

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