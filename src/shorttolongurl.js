import React from 'react';
import { Link } from 'react-router-dom';

class Shorttolongurl extends React.Component 
{
    constructor(props)
    {
      super(props);
      this.state = {longUrl : "", short : "" , convert : () => {
        const url = this.state.short;
        fetch(url.substring(21)).then(response => response.json())
        .then(data => {
            const result = data.longUrl;
            this.setState({longUrl: result});
    });
      }};
    }
    handleChangeInput = (event) => {
        this.setState({short: event.target.value});
      }    
    render() 
    {
        return <div><h1>Shorty URL!</h1>
        <h3>Enter short URL</h3>
        <input type = "text" value = {this.state.shortUrl} onChange={this.handleChangeInput} placeholder="Short URL"></input><br></br><br></br>
        <button onClick={this.state.convert}>
            Convert
         </button> <br></br><br></br>
         <Link to="">{this.state.longUrl}</Link>  
        </div>
    }
}

export default Shorttolongurl;