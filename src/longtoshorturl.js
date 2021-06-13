import React from 'react';

class Longtoshorturl extends React.Component {
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
        <h3>Enter Long URL to convert into a short one!</h3>
        <input type = "text" value = {this.state.longUrl} onChange={this.handleChangeInput}></input><br></br><br></br>
        <button onClick={this.state.convert}>
            Convert
         </button> <br></br><br></br>
         <input type = "text" value = {this.state.short} onChange={this.handleChangeOutput}></input>
        </div>;
    }
  }
  


export default Longtoshorturl;