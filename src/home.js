import React from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Home extends React.Component 
{
    render() 
    {
        return <div>
            <h1>Shorty URL!</h1>
            <h3>Select a service to use! </h3>
            <Link to="/longtoshorturl">Long to Short URL</Link><br></br>
            <Link to="/shorttolongurl">Short to Long URL</Link>            
            </div>
    }
}

export default Home;