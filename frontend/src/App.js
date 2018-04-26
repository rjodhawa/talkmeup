import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import HomePage from './home.js'

class App extends Component {
  state = {
    Email: '',
    url: window.location.href,
  }
  constructor(){
    super();
    this.setState({
      url: window.location.href
    });
  }

  homePageClick(){
    console.log(this.state.url);
    if(this.state.url.indexOf("hash")!==-1){
      return (<HomePage />);
    }else{
      return (<Form />);
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to talkmeup.co</h1>
        </header>
        <br/>
        {this.homePageClick()}
      </div>
    );
  }
}

export default App;
